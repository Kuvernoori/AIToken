const hre = require("hardhat");
require('dotenv').config();


async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account! :", deployer.address);

  const AITU2329 = await hre.ethers.getContractFactory("AITU2329");
  const token = await AITU2329.deploy(deployer.address);

  await token.waitForDeployment();

  console.log("Token was deployed:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
