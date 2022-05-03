const deployContract = async (contractName,...args)=>{
  const factory = await ethers.getContractFactory(contractName)
  const contract = await factory.deploy(...args)
  await contract.deployed()
  return contract
}

const main = async () => {
  let owner, addr1, addr2, addrs;
  let Token, Competition;

  [owner, addr1, addr2, ...addrs] = await ethers.getSigners()
  console.log("Account balance:", (await owner.getBalance()).toString());
  Token = await deployContract("Token")
  Multicall = await deployContract("Multicall")
  Competition = await deployContract("Competition",Token.address)

  console.log("Token address:", Token.address)
  console.log("Multicall address:", Multicall.address)
  console.log("Competition address:", Competition.address)
  console.log("Account balance:", (await owner.getBalance()).toString());
  saveFrontendFiles()
}

function saveFrontendFiles() {
  const fs = require("fs");
  const contractsDir = `${__dirname}/../abi`;

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  const TokenArtifact = artifacts.readArtifactSync("Competition");

  fs.writeFileSync(
    contractsDir + "/CompetitionAbi.json",
    JSON.stringify(TokenArtifact.abi, null, 2)
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
