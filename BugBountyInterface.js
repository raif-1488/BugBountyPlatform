import Web3 from 'web3';
import BugBounty from './contracts/BugBounty.json';

const CONTRACT_ADDRESS = "0x0BAb053B40c292c4D0027d610cF2509f11D3aFc8";
const ABI = BugBounty.abi;


let web3;
let contract;

//Initialize web3 and contract

export const initializeWeb3 = async () => {
  //connect to MetaMask
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
      return true;
    } catch (error) {
      console.error("User denied account access:",error);
      return false;
    
    }
  
  } else {
    console.error("Please install MetaMask!");
    return false;
    
  }
  
};

//Function to post a new bounty
export const postBounty = async (title, reward) => {
  const accounts = await web3.eth.getAccounts();
  try {
    await contract.methods
      .postBounty(title, reward)
      .send({ from: accounts[0] });
    console.log("Bounty posted successfully!");
  
  } catch (error) {
    
    console.error("Error posting bounty:", error);
  }
};
  
// Function to submit a bug report
export const submitReport = async (bountyId, bugDescription) => {
  const accounts = await web3.eth.getAccounts();
  try {
    await contract.methods
      .submitReport(bountyId, bugDescription)
      .send({ from: accounts[0] });
    console.log("Bug report submitted successfully!");
  } catch (error) {
    console.error("Error submitting report:", error);
  }
};


//Function to release the reward
export const releaseReward = async (bountyId ) => {
  const accounts = await web3.eth.getAccounts();
  try {
    await contract.methods
      .releaseReward(bountyId)
      .send({ from: accounts[0] });
    console.log("Reward released successfully!");
  
  } catch (error) {
    console.error("Error releasing reward:", error);
  }

}; 
  

