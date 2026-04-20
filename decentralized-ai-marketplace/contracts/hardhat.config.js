import "@nomicfoundation/hardhat-ethers";
import dotenv from "dotenv";
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.28",
  paths: {
    sources: "./solidity"
  },
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.POLYGON_URL || "https://rpc-amoy.polygon.technology",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  }
};
