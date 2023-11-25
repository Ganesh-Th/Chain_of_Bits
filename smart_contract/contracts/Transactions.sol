// SPDX-License-Identifier: UNLICENSED

// Solidity version declaration
pragma solidity ^0.8.0;

// Importing the Hardhat console library for debugging
import "hardhat/console.sol";

// Main smart contract named 'Transactions'
contract Transactions {
    // State variable to track the total number of transactions
    uint256 transactionCount;

    // Event emitted when a transfer occurs
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    // Struct to represent a transaction
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    // Array to store all transactions
    TransferStruct[] transactions;

    // Function to add a new transaction to the blockchain
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        // Increment the transaction count
        transactionCount += 1;

        // Create a new transaction and add it to the array
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        // Emit the Transfer event
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    // Function to retrieve all transactions
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    // Function to get the total number of transactions
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}