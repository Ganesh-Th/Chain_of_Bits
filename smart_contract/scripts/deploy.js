// Main asynchronous function to deploy the smart contract
const main = async () => {
  // Get the contract factory for the "Transactions" smart contract
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");

  // Deploy the smart contract
  const transactionsContract = await transactionsFactory.deploy();

  // Wait for the deployment to be confirmed
  await transactionsContract.deployed();

  // Log the address of the deployed smart contract to the console
  console.log("Transactions address: ", transactionsContract.address);
};

// Helper function to run the main function and handle errors
const runMain = async () => {
  try {
    // Call the main function
    await main();
    // Exit the process with a success code
    process.exit(0);
  } catch (error) {
    // Log and handle any errors that occur
    console.error(error);
    // Exit the process with an error code
    process.exit(1);
  }
};

// Run the main function
runMain();