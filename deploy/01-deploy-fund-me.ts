import { network } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { developmentNetworks, networkConfig } from "../helper-hardhat-config";
import verify from "../utils/verify";

const deployFundMe = async ({
    getNamedAccounts,
    deployments,
}: HardhatRuntimeEnvironment) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const { chainId } = network.config;

    const config = networkConfig[chainId as keyof typeof networkConfig] ?? {};
    const isDevNetwork = developmentNetworks.includes(network.name);

    let ethUsdPriceFeedAddress;
    if (isDevNetwork) {
        ethUsdPriceFeedAddress = (await deployments.get("MockV3Aggregator"))
            .address;
    } else {
        ethUsdPriceFeedAddress = config.ethUsdPriceFeedAddress;
    }

    log("----------------------------------------------------");
    log("Deploying FundMe and waiting for confirmations...");

    const args = [ethUsdPriceFeedAddress];
    const fundMe = await deploy("FundMe", {
        from: deployer,
        log: true,
        args,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: config.blockConfirmations || 0,
    });
    log(`FundMe deployed at ${fundMe.address}`);

    if (!isDevNetwork && process.env.ETHERSCAN_API_KEY) {
        await verify(fundMe.address, args);
    }
};

export default deployFundMe;
deployFundMe.tags = ["all", "fundme"];
