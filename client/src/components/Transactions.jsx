// Importing React library for creating React components and useContext hook for accessing context
import React, { useContext } from "react";

// Importing TransactionContext for accessing transaction data
import { TransactionContext } from "../context/TransactionContext";

// Importing custom hook for fetching GIFs based on a keyword
import useFetch from "../hooks/useFetch";

// Importing dummyData and utility function for shortening Ethereum addresses
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

// Functional component for individual transaction cards
const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  // Using the useFetch hook to fetch a GIF based on a keyword
  const gifUrl = useFetch({ keyword });

  return (
    // Container for a transaction card with styling and hover effect
    <div className="bg-[#1F2937] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://goerli.etherscan.io/tx/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-[#9CA3AF] text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://goerli.etherscan.io/tx/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-[#9CA3AF] text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-[#9CA3AF] text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-[#9CA3AF] text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-[#1F2937] p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#60A5FA] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

// Functional component for the Transactions section
const Transactions = () => {
  // Destructuring transactions and currentAccount from the TransactionContext
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
     // Container for the Transactions section with styling and gradient background
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-[#ffffff] text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-[#9CA3AF] text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporting the Transactions component for use in other parts of the application
export default Transactions;
