const { ethers } = require("hardhat")
const { deploy, deployProxy, upgradeProxy, getAt } = require('./utils')
// const deployContract = async (contractName,...args)=>{
//   const factory = await ethers.getContractFactory(contractName)
//   const contract = await factory.deploy(...args)
//   await contract.deployed()
//   return contract
// }

const main = async () => {
  let owner, addr1, addr2, addrs;
  let Token, Competition, CompX;

  [owner, addr1] = await ethers.getSigners()
  console.log(owner.address)
  // Token = await deploy("Token")
  // Multicall = await deploy("Multicall")

  // CompX = await deploy("Compx")
  // Competition = await deployProxy("Competition",["0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"])

  CompX = await getAt("Compx", "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE")
  await CompX.setNftAddress("0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e")

  await CompX.connect(addr1).claimToken();
  console.log("Compx amount",CompX.balanceOf(addr1.address))

  // saveFrontendFiles()
}

// function saveFrontendFiles() {
//   const fs = require("fs");
//   const contractsDir = `${__dirname}/../abi`;

//   if (!fs.existsSync(contractsDir)) {
//     fs.mkdirSync(contractsDir);
//   }

//   const TokenArtifact = artifacts.readArtifactSync("Competition");

//   fs.writeFileSync(
//     contractsDir + "/CompetitionAbi.json",
//     JSON.stringify(TokenArtifact.abi, null, 2)
//   )
// }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
