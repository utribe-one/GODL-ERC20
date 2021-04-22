// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory("GODL");
  console.log("Deploying GODL...");
  const box = await Box.deploy();
  await box.deployed();
  console.log("GODL deployed to:", box.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
