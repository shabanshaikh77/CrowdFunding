require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: 'Sepolia',
  networks: {
    localhost: {
      url: "http://127.0.0.1:5173/",
    },
    Sepolia : {
      url: "https://sepolia.infura.io/v3/",
      accounts: process.env.PRIVATE_KEY
    },
    hardhat: {
    }
  },
  etherscan: {
    apiKey: process.env.EtherScan_API,
  },
  
};
