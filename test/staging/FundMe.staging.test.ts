import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import { FundMe } from "../../typechain-types";
import { assert } from "chai";
import { developmentNetworks } from "../../helper-hardhat-config";

developmentNetworks.includes(network.name)
    ? describe.skip
    : describe("FundMe", () => {
          let fundMe: FundMe, deployer: SignerWithAddress;
          const SEND_VALUE = ethers.utils.parseEther("0.1"); // 1 ETH

          beforeEach(async function () {
              const accounts = await ethers.getSigners();
              deployer = accounts[0];
              fundMe = await ethers.getContract("FundMe", deployer.address);
          });

          it("Allows people fund and withdraw", async function () {
              this.timeout(120 * 1000);
              console.log("Start funding...");
              const transactionFundResponse = await fundMe.fund({
                  value: SEND_VALUE,
              });
              await transactionFundResponse.wait(1);

              console.log("Check deployer address in funders list");
              const funder = await fundMe.s_funders(0);
              assert.equal(deployer.address, funder);

              console.log("Withdrawing...");
              const transactionWithdrawResponse = await fundMe.withdraw({
                  gasLimit: 100000,
              });
              await transactionWithdrawResponse.wait(1);

              console.log("Getting contract balance...");
              const endingBalance = await fundMe.provider.getBalance(
                  fundMe.address
              );
              console.log(endingBalance.toString(), " should equal 0");
              assert.equal(endingBalance.toString(), "0");
          });
      });
