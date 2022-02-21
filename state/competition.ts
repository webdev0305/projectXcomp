import config from "config" // Airdrop config
import { eth } from "state/eth" // ETH state provider
import { ethers } from "ethers" // Ethers
import { formatFixed } from "@ethersproject/bignumber"
import { useEffect, useState } from "react" // React
import { createContainer } from "unstated-next" // State management
import { BigNumber } from "ethers"
import axios from 'axios'
import { getJsonWalletAddress } from "ethers/lib/utils"

const CompetitionABI = require("abi/CompetitionAbi.json")
const ERC20ABI = require("abi/ERC20Abi.json")
const UINT256_MAX = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

export interface ICompetition {
  id?: number
  title?: string
  description?: string
  countSold?: number
  countTotal?: number
  maxPerPerson?: number
  path?: string
  forGuest?: boolean
  forMember?: boolean
  priceForGuest?: number
  priceForMember?: number
  status?: number
  timeUpdated?: Date,
  timeEnd?: Date
  timeStart?: Date
  winner?: IUser
  logoImage?: string,
  winnerImage?: string,
  images?: string[]
}

export interface IUser {
  id?: string
  firstName?: string
  lastName?: string
  nickName?: string
  email?: string
  phone1?: string
  phone2?: string
  address?: string
  avatar?: string
  approved?: boolean
  isMember?: boolean
  isOwner?: boolean
  joinTime?: Date
  paidTime?: Date
  untilTime?: Date
  totalPaid?: BigNumber
  creditPlus?: BigNumber
  creditMinus?: BigNumber
  creditBalance?: BigNumber
  balance?: BigNumber
  balanceToken?: BigNumber
}

function useToken() {
  // Collect global ETH state
  const {
    address,
    provider,
  }: {
    address: string | null
    provider: ethers.providers.Web3Provider | null
  } = eth.useContainer()

  const [user, setUser] = useState<IUser>({})
  const [dataLoading, setDataLoading] = useState<boolean>(true) // Data retrieval status
  const [competitions, setCompetitions] = useState<ICompetition[]>([])
  const [feePerMonth, setFeePerMonth] = useState<BigNumber>()
  const [feePerYear, setFeePerYear] = useState<BigNumber>()
  const [creditsPerMonth, setCreditsPerMonth] = useState<BigNumber>()
  
  /**
   * Get contract
   * @returns {ethers.Contract} signer-initialized contract
   */
  const getContract = (): ethers.Contract => {
    return new ethers.Contract(
      // Contract address
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "0x8730B8bCd563d5a77e431C71a74688a4cB924618",
      CompetitionABI,
      // Get signer from authed provider
      provider?.getSigner()
    )
  }

  const getToken = (address: string): ethers.Contract => {
    return new ethers.Contract(
      address,
      ERC20ABI,
      provider?.getSigner()
    )
  }

  const createNewCompetition = async (countTotal:number, priceForGuest:string, priceForMember:string, maxPerPerson:number, path:string): Promise<void> => {
    // If not authenticated throw
    if (!address) {
      throw new Error("Not Authenticated")
    }

    // Collect competition contract
    const contract: ethers.Contract = getContract()
    // Try to creat new competition and refresh sync status
    const tx = await contract.create(countTotal, priceForGuest, priceForMember, maxPerPerson, path)
    await tx.wait()
    getBalance()
    // syncStatus()
  }

  const updateCompetition = async (id:number, countTotal:number, priceForGuest:string, priceForMember:string, maxPerPerson:number, path:string): Promise<void> => {
    if (!address) {
      throw new Error("Not Authenticated")
    }

    // Collect competition contract
    const contract: ethers.Contract = getContract()
    // Try to update competition and refresh sync status
    const tx = await contract.update(id, countTotal, priceForGuest, priceForMember, maxPerPerson, path)
    await tx.wait()
    getBalance()
    // syncStatus()
  }

  const startCompetition = async (comp: ICompetition, endTime:number): Promise<void> => {
    if (!address) {
      throw new Error("Not Authenticated")
    }
    const contract: ethers.Contract = getContract()
    const tx = await contract.start(comp.id, endTime)
    await tx.wait()
    comp.timeStart = new Date()
    comp.timeEnd = new Date(endTime*1000)
    comp.status = 1
    getBalance()
  }

  const finishCompetition = async (comp: ICompetition): Promise<ICompetition> => {
    if (!address) {
      throw new Error("Not Authenticated")
    }
    const contract: ethers.Contract = getContract()
    const tx = await contract.finish(comp.id)
    await tx.wait()
    getBalance()
    return await contract.competitions((comp.id??1)-1)
  }

  const buyTicket = async (comp: ICompetition, count: number): Promise<void> => {
    if (!address) {
      throw new Error("Not Authenticated")
    }
    const contract: ethers.Contract = getContract()
    const tokenAddress = await contract.token()
    const token: ethers.Contract = getToken(tokenAddress)
    if(!user.approved) {
      const tx = await token.approve(contract.address, UINT256_MAX)
      await tx.wait()
      setUser(user=>{
        return {...user, approved:true}
      })
    }
    const tx = await contract.buy(comp.id, count)
    await tx.wait()
    comp.countSold = (comp.countSold??0) + count
    getBalance()
  }

  const payForMonth = async (months:number): Promise<void> => {
    if (!address) {
      throw new Error("Not Authenticated")
    }
    const contract: ethers.Contract = getContract()
    const tx = await contract.payFeePerMonth(months)
    await tx.wait()
    getBalance()
    getMember()
  }

  const payForYear = async (years:number): Promise<void> => {
    if (!address) {
      throw new Error("Not Authenticated")
    }
    const contract: ethers.Contract = getContract()
    const tx = await contract.payFeePerYear(years)
    await tx.wait()
    getBalance()
    getMember()
  }

  const getAllowance = async (): Promise<boolean> => {
    if (!address) {
      throw new Error("Not Authenticated")
    }
    const contract: ethers.Contract = getContract()
    const tokenAddress = await contract.token()
    const token: ethers.Contract = getToken(tokenAddress)
    const approved:BigNumber = await token.allowance(address, contract.address)
    if(approved.eq(0))
      return false
    return true
  }

  const getOwnerAddress = async (): Promise<string> => {
    const competition: ethers.Contract = getContract()
    return await competition.owner()
  }

  /**
   * Collects competitions for id
   * @param {number} id competition id
   * @returns {Promise<object>} competition 
   */
  const getCompetition = async (): Promise<object> => {
    const competition: ethers.Contract = getContract()
    return await competition.getCompetitions()
  }

  const getMember = async (account?:string) => {
    const competition: ethers.Contract = getContract()
    competition.members(account??address).then((member:any)=>{
      const timeUntil = new Date(member.timeUntil*1000)
      const isMember = timeUntil>new Date()
      if(isMember)
        setUser(user=>{
          return {
            ...user,
            isMember, 
            balance:member.balance, 
            creditPlus:member.creditPlus,
            creditMinus:member.creditMinus,
            joinTime:new Date(member.timeStart*1000),
            untilTime:timeUntil,
            paidTime:new Date(member.timeLastPaid*1000)
          }
        })
      else
        setUser(user=>{
          return {
            ...user, 
            isMember:false,
            balance: undefined, 
            creditPlus:undefined,
            creditMinus:undefined,
            joinTime:undefined,
            untilTime:undefined,
            paidTime:undefined
          }
        })
    })
  }

  const getBalance = async () => {
    provider?.getBalance(String(address)).then(balance=>setUser(user=>{
      return {...user, balance}
    }))
    const contract: ethers.Contract = getContract()
    const tokenAddress = await contract.token()
    const token: ethers.Contract = getToken(tokenAddress)
    token.balanceOf(address).then((balance:any)=>setUser(user=>{
      return {...user, balanceToken:BigNumber.from(balance)}
    }))
    contract.creditBalance(address).then((balance:any)=>setUser(user=>{
      return {...user, creditBalance:balance}
    }))
  }

  const getConfig = async () => {
    const contract: ethers.Contract = getContract()
    contract.feePerMonth().then((fee:any)=>setFeePerMonth(fee))
    contract.feePerYear().then((fee:any)=>setFeePerYear(fee))
    contract.creditsPerMonth().then((credits:any)=>setCreditsPerMonth(credits))
  }

  /**
   * After authentication, update number of tokens to claim + claim status
   */
  const syncStatus = async (): Promise<void> => {
    // Toggle loading
    setDataLoading(true)
    
    // Force authentication
    if (address) {
      const rows = await getCompetition()
      const res = await axios.get('/api/competition')
      competitions.splice(0)
      for(const row of Object.values(rows)) {
        const id = row.id.toNumber()
        const rowData = res.data.data[id]??{}
        competitions.push({
          id: id,
          title: rowData.title,
          description: rowData.description,
          logoImage: rowData.logo_url,
          winnerImage: rowData.winner_url,
          images: JSON.parse(rowData.images),
          forGuest: row.priceForGuest.gt(-1),
          forMember: row.priceForMember.gt(-1),
          priceForGuest: row.priceForGuest.gt(-1)?Number(formatFixed(row.priceForGuest,18)):0,
          priceForMember: row.priceForMember.gt(-1)?Number(formatFixed(row.priceForMember,18)):0,
          status: row.status,
          timeEnd: row.timeEnd.gt(0)?new Date(row.timeEnd.toNumber()*1000):undefined,
          timeStart: row.timeEnd.gt(0)?new Date(row.timeStart.toNumber()*1000):undefined,
          countTotal: row.countTotal,
          countSold: row.countSold,
          winner: row.winner?{
            id: row.winner,
            firstName: rowData.winner_first_name,
            lastName: rowData.winner_last_name,
            nickName: rowData.winner_first_name || rowData.winner_last_name?`${rowData.winner_first_name} ${rowData.winner_last_name}`:`0x${row.winner.substring(2, 12)}...${row.winner.slice(-10)}`,
            email: rowData.winner_email,
            phone1: rowData.winner_phone1,
            phone2: rowData.winner_phone2,
            address: rowData.winner_address
          }:{}
        } as ICompetition)
      }
      competitions.sort((c1: ICompetition, c2:ICompetition)=>{
        if(c1.timeUpdated && c2.timeUpdated)
          return c1.timeUpdated > c2.timeUpdated? -1: 1
        return 0
      })
    }
    // Toggle loading
    setDataLoading(false)
  }

  // On load:
  useEffect(() => {
    if(address) {
      getBalance()
      getAllowance().then(approved=>setUser(user=>{
        return {...user, approved}
      }))
      getOwnerAddress().then(owner=>setUser(user=>{
        return {...user, isOwner: owner.toLowerCase()===address?.toLowerCase()}
      }))
      getMember(address)
      axios.get(`/api/account/${address}`).then(res=>{
        setUser(user=>{
          return {
            ...user, 
            id:address,
            firstName:res.data.first_name,
            lastName:res.data.last_name,
            nickName:res.data?`${res.data.first_name} ${res.data.last_name}`:`0x${address.substring(2, 6)}...${address.slice(-4)}`,
            email:res.data.email,
            avatar: res.data?.avatar_url?.startsWith('https://')?res.data.avatar_url:'/avatar.png'
          }
        })
      })
    }
    // getConfig()
    syncStatus()
  }, [address])

  return {
    dataLoading,
    competitions,
    user,
    feePerMonth,
    feePerYear,
    creditsPerMonth,
    createNewCompetition,
    updateCompetition,
    startCompetition,
    finishCompetition,
    buyTicket,
    setCompetitions,
    setUser,
    payForMonth,
    payForYear
  }
}

// Create unstated-next container
export const token = createContainer(useToken)
