// Function to shorten an Ethereum address for display purposes
// Example: shortenAddress("0xCF8e569A97C423952DdFf902375C7C76549A6A90") returns "0xCF8e5...765A6A90"
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
