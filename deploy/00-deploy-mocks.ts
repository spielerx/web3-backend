import { network } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentNetworks } from "../helper-hardhat-config";

const DECIMALS = 8;

const INITIAL_ETH_PRICE = 2000 * 10 ** DECIMALS;

const DeployMocksFunc = async ({
    deployments,
    getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    if (developmentNetworks.includes(network.name)) {
        log("Deploying mocks...");
        await deploy("MockV3Aggregator", {
            from: deployer,
            args: [DECIMALS, INITIAL_ETH_PRICE],
            log: true,
        });
        log("Mocks deployed!");
    }
};

module.exports = DeployMocksFunc;
DeployMocksFunc.tags = ["all", "mocks"];
