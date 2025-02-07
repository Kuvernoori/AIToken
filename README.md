# BT3 Project - Blockchain-Based Financial System

This repository contains the BT3 project, which focuses on blockchain-based financial solutions utilizing ERC-20 token functionalities. The project demonstrates smart contract implementation on the Sepolia testnet and includes additional utilities for tracking and managing transaction details.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contracts](#contracts)
- [Scripts](#scripts)
- [Tests](#tests)
- [Deployment Output](#deployment-output)
- [Examples](#examples)
- [License](#license)

## Project Overview

The BT3 project involves the creation of an ERC-20-compliant token with enhanced features for monitoring transactions on the blockchain. This project serves as a demonstration for token deployment, smart contract functions, and blockchain integration using development tools like Hardhat and MetaMask.

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

1. Clone the repository:

   ```sh
   git clone https://github.com/Kuvernoori/BT3.git
   cd BT3
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   
    Create a `.env` file in the root directory and add the following:
    ```
      url: process.env.QUICKNODE_URL,
      accounts: [process.env.PRIVATE_KEY],
    ```

## Usage

### Compile the Contract

```sh
npx hardhat compile
```

### Deploy the Contract to Sepolia

```sh
npx hardhat run scripts/deploy.js --network sepolia
```


### Interact with the Contract

Start the Hardhat console and attach to the deployed contract:

```sh
npx hardhat console --network sepolia
```

```javascript
const contractAddress = "0xYourContractAddress";
const AITU2329 = await ethers.getContractFactory("AITU2329");
const token = await AITU2329.attach(contractAddress);
```

#### Example Interactions

- **Get the latest transaction timestamp:**
  ```javascript
  const timestamp = await token.getLatestTransactionTimestamp();
  console.log("Latest Transaction Timestamp:", timestamp);
  ```

- **Retrieve transaction sender:**
  ```javascript
  const sender = await token.getTransactionSender();
  console.log("Transaction Sender:", sender);
  ```

- **Retrieve transaction receiver:**
  ```javascript
  const receiver = await token.getTransactionReceiver("0xReceiverAddress");
  console.log("Transaction Receiver:", receiver);
  ```
  

## Contracts

### AITU2329.sol
This is the main ERC-20 smart contract implementing additional transaction tracking features.
- Functions include:
  - `getLatestTransactionTimestamp()`
  - `getTransactionSender()`
  - `getTransactionReceiver()`

### AITU2329modif.sol
Modified version of `AITU2329.sol` with added functionality for transaction event emissions and initial supply customization.

## Scripts

### `scripts/deploy.js`
The deployment script utilizes Hardhat to deploy the contract on the Sepolia testnet.
- Loads environment variables from `.env`
- Uses `hre.ethers.getSigners()` to retrieve deployer details
- Deploys `AITU2329` contract
- Outputs contract address upon successful deployment

## Tests

### `test/AITU2329.js`
Unit tests for the `AITU2329` contract, including:
- Checking initial supply
- Validating event emissions (`TransactionDetails`)
- Retrieving latest transaction timestamp
- Getting sender and receiver details

### `test/AITU2329modif.js`
Modified tests for `AITU2329modif` contract with additional initial supply verification.

## Deployment Output

The output from the deployment script is shown in `output.jpg`:

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
