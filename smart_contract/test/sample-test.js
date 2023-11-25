// Importing Chai library's 'expect' for assertion and ethers library from Hardhat
const { expect } = require("chai");
const { ethers } = require("hardhat");

// Test suite for the "Greeter" smart contract
describe("Greeter", function () {
  // Test case: It should return the new greeting once it's changed
  it("Should return the new greeting once it's changed", async function () {
    // Get the contract factory for the "Greeter" smart contract
    const Greeter = await ethers.getContractFactory("Greeter");
    
    // Deploy the "Greeter" smart contract with the initial greeting "Hello, world!"
    const greeter = await Greeter.deploy("Hello, world!");
    
    // Wait for the deployment to be confirmed
    await greeter.deployed();

    // Assert that the initial greeting is "Hello, world!"
    expect(await greeter.greet()).to.equal("Hello, world!");

    // Change the greeting to "Hola, mundo!" and get the transaction object
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    // Assert that the greeting has been successfully changed to "Hola, mundo!"
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
