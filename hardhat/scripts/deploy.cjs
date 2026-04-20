const hre = require("hardhat");

async function main() {
  console.log("Deploying Decentralized AI Marketplace contracts...");

  // 1. Deploy ModelRegistry
  const ModelRegistry = await hre.ethers.getContractFactory("ModelRegistry");
  const modelRegistry = await ModelRegistry.deploy();
  await modelRegistry.waitForDeployment();
  console.log("ModelRegistry deployed to:", await modelRegistry.getAddress());

  // 2. Deploy NodeStaking
  const NodeStaking = await hre.ethers.getContractFactory("NodeStaking");
  const nodeStaking = await NodeStaking.deploy();
  await nodeStaking.waitForDeployment();
  console.log("NodeStaking deployed to:", await nodeStaking.getAddress());

  // 3. Deploy PaymentEscrow
  const PaymentEscrow = await hre.ethers.getContractFactory("PaymentEscrow");
  // Assuming PaymentEscrow takes the other addresses or just works standalone
  const paymentEscrow = await PaymentEscrow.deploy();
  await paymentEscrow.waitForDeployment();
  console.log("PaymentEscrow deployed to:", await paymentEscrow.getAddress());

  console.log("\nDeployment complete!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
