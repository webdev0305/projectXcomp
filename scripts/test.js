const { expect } = require("chai")
const { ethers } = require("hardhat")

const setBlockTime = async (date)=>{
  await network.provider.send("evm_setNextBlockTimestamp", [parseInt(date==undefined?new Date():new Date(date)/1000)] )
  await network.provider.send("evm_mine") 
}

const deployContract = async (contractName,...args)=>{
  const factory = await ethers.getContractFactory(contractName)
  const contract = await factory.deploy(...args)
  await contract.deployed()
  return contract
}

describe("Competition Test", ()=>{
  let owner, addr1, addr2, addrs;
  let Token, Competition;

  describe("Deploy", () => {
    it("Init", async () => {
      [owner, addr1, addr2, ...addrs] = await ethers.getSigners()
    })
    it("Token", async () => {
      Token = await deployContract("Token")
    })
    it("Competition", async () => {
      Competition = await deployContract("Competition",Token.address)
    })
  })
})