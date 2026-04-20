import hre from "hardhat";

async function main() {
  console.log("Deploying contracts...");

  // 1. Deploy ModelRegistry
  const ModelRegistry = await hre.ethers.getContractFactory("ModelRegistry");
  const modelRegistry = await ModelRegistry.deploy();
  await modelRegistry.waitForDeployment();
  console.log("ModelRegistry deployed to:", await modelRegistry.getAddress());

  // 2. Deploy PaymentEscrow
  const PaymentEscrow = await hre.ethers.getContractFactory("PaymentEscrow");
  const paymentEscrow = await PaymentEscrow.deploy();
  await paymentEscrow.waitForDeployment();
  console.log("PaymentEscrow deployed to:", await paymentEscrow.getAddress());

  // 3. Deploy NodeStaking
  const NodeStaking = await hre.ethers.getContractFactory("NodeStaking");
  const nodeStaking = await NodeStaking.deploy();
  await nodeStaking.waitForDeployment();
  console.log("NodeStaking deployed to:", await nodeStaking.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
