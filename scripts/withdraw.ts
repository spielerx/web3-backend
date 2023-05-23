import { ethers, getNamedAccounts } from "hardhat";

async function main() {
    const { deployer } = await getNamedAccounts();
    console.log(deployer);

    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Getting FundMe contract with address", fundMe.address);

    const transactionResponse = await fundMe.withdraw();
    await transactionResponse.wait(1);

    console.log("Withdraw completed!");
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
