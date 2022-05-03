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
  describe("test", ()=>{
    it("create comp", async ()=> {
      await(await Competition.create(1000,ethers.utils.parseEther("10"),-1,100)).wait()
    });
    it("start comp", async ()=> {
      await(await Competition.start(1, parseInt(new Date()/1000)+10000)).wait()
    });
    it("buy ticket", async ()=> {
      await(await Token.transfer(addr1.address, ethers.utils.parseEther("1000"))).wait()
      const amount  = await Token.balanceOf(addr1.address)
      console.log(amount)
      await(await Token.connect(addr1).approve(Competition.address, amount))
      await(await Competition.connect(addr1).buy(1, 1)).wait()
      console.log(await Token.balanceOf(addr1.address))
    })
  })
})