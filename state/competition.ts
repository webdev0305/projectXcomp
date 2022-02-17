import config from "config"; // Airdrop config
import { eth } from "state/eth"; // ETH state provider
import { BigNumber, ethers } from "ethers"; // Ethers
import { useEffect, useState } from "react"; // React
import { createContainer } from "unstated-next"; // State management
import axios from 'axios'

const CompetitionABI = require("abi/CompetitionAbi.json");

interface CompetitionItems{
  title: string
  countSold: number
  countTotal: number
  id: BigNumber
  maxPerPerson: number
  path?: string
  priceForGuest: BigNumber
  priceForMember: BigNumber
  status: number
  timeEnd: BigNumber
  timeStart: BigNumber
  winner: string
  images: string[]
}

function useToken() {
  // Collect global ETH state
  const {
    address,
    provider,
  }: {
    address: string | null;
    provider: ethers.providers.Web3Provider | null;
  } = eth.useContainer();

  // Local state
  const [dataLoading, setDataLoading] = useState<boolean>(true); // Data retrieval status
  const [competitions, setCompetitions] = useState<CompetitionItems[]>([])
  /**
   * Get contract
   * @returns {ethers.Contract} signer-initialized contract
   */
  const getContract = (): ethers.Contract => {
    return new ethers.Contract(
      // Contract address
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "0xfBcE5B4A8460984576d6F0dc0DDC21F0aC7dA7c5",
      CompetitionABI,
      // Get signer from authed provider
      provider?.getSigner()
    );
  };

  const createNewCompetition = async (countTotal:number, priceForGuest:number, priceForMember:number, maxPerPerson:number, prizeToken:string, prizeAmount:number, _path:string): Promise<void> => {
    // If not authenticated throw
    if (!address) {
      throw new Error("Not Authenticated");
    }

    // Collect competition contract
    const contract: ethers.Contract = getContract();
    // Try to creat new competition and refresh sync status
    try {
      const tx = await contract.create(countTotal, priceForGuest, priceForMember, maxPerPerson, prizeToken, prizeAmount, _path);
      const receipt = await tx.wait();
      await syncStatus();
    } catch (e) {
      console.error(`Error when creating competitions: ${e}`);
    }
  };

  const updateCompetition = async (id:number, countTotal:number, priceForGuest:number, priceForMember:number, maxPerPerson:number, prizeToken:string, prizeAmount:number, _path:string): Promise<void> => {
    // If not authenticated throw
    if (!address) {
      throw new Error("Not Authenticated");
    }

    // Collect competition contract
    const contract: ethers.Contract = getContract();
    // Try to update competition and refresh sync status
    try {
      const tx = await contract.update(id, countTotal, priceForGuest, priceForMember, maxPerPerson, prizeToken, prizeAmount, _path);
      const receipt = await tx.wait();
      await syncStatus();
    } catch (e) {
      console.error(`Error when updating competitions: ${e}`);
    }
  };

  /**
   * Collects competitions for id
   * @param {number} id competition id
   * @returns {Promise<object>} competition 
   */
  const getCompetition = async (): Promise<object> => {
    // Collect competition contract
    const competition: ethers.Contract = getContract();
    // Return claimed status
    return await competition.getCompetitions();
  };

  /**
   * After authentication, update number of tokens to claim + claim status
   */
  const syncStatus = async (): Promise<void> => {
    // Toggle loading
    setDataLoading(true);
    
    // Force authentication
    if (address) {
      const rows = await getCompetition()
      competitions.splice(0)
      for(const row of Object.values(rows)) {
        const rowData = await axios.get(row.path);
        console.log(rowData)
        competitions.push({
          title: rowData.data.title,
          countSold: row.countSold,
          countTotal: row.countTotal,
          id: row.id,
          maxPerPerson: row.maxPerPerson,
          path: row.path,
          priceForGuest: row.priceForGuest,
          priceForMember: row.priceForMember,
          status: row.status,
          timeEnd: row.timeEnd,
          timeStart: row.timeStart,
          winner: row.winner,
          images: rowData.data.images
        } as CompetitionItems)
      }
    }
    // Toggle loading
    setDataLoading(false);
  };

  // On load:
  useEffect(() => {
    syncStatus();
  }, [address]);

  return {
    dataLoading,
    competitions,
    createNewCompetition,
    updateCompetition
  };
}

// Create unstated-next container
export const competition = createContainer(useToken);
