AI Model Marketplace 
A decentralized marketplace for AI models built on Ethereum using smart contracts. Users can list, purchase, rate AI models, and creators can withdraw earnings. Powered by Truffle for smart contract development and Web3.js for Ethereum interaction.

Features
List AI Models: Add AI models with a name, description, and price.
Purchase Models: Securely buy models with AITU Tokens.
Rate Models: Leave ratings (1 to 5 stars) after purchase.
View Model Details: Explore name, description, price.


## Key Features

- **ERC-20 Compliance:** Implements standard token functions such as `transfer`, `balanceOf`, and `approve`.
- **Initial Token Supply:** Mints 7700 tokens to the deployer's address upon contract deployment.
- **Advanced Transaction Tracking:**
  - Access block timestamps in a readable format for the latest transactions.
  - Retrieve sender and receiver addresses for specific transactions.

## Prerequisites

Ensure the following dependencies are installed before starting:

- [Node.js](https://nodejs.org/) v16 or higher
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/)
- [Sepolia testnet ETH](https://cloud.google.com/application/web3/faucet/ethereum/sepolia/)
- [QuickNode](https://www.quicknode.com/)

## Installation

Setup
1. Clone the repository
2. Install dependencies
- Navigate to the project directory and run the following command to install the required packages:

npm install
3. Set up the Smart Contract
- Deploy the smart contract to the Ethereum network (use a test network like Sepolia for testing).
- Make sure the contract ABI and address are updated in the front-end code (app.js).
4. Start the Backend Server
- Run the backend server to handle model uploads and serve API requests:
node server.js
- This will start the server on http://localhost:3000.

### `scripts/deploy.js`
The deployment script utilizes Hardhat to deploy the contract on the Sepolia testnet.
- Loads environment variables from `.env`
- Uses `hre.ethers.getSigners()` to retrieve deployer details
- Deploys `AITU2329` contract
- Outputs contract address upon successful deployment



![](output.jpg)

### Key Details:
- **Deployer Address:** Shown in the output log.
- **Transaction Hash:** Contains the transaction ID of the deployment.
- **Contract Address:** Displays the address of the deployed smart contract.
- **Gas Used:** Indicates the amount of gas consumed during deployment.
- **Block Confirmation:** Shows the block number where the contract was deployed.
- **Deployment Success Message:** Confirms successful deployment.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENCE) file for details.
