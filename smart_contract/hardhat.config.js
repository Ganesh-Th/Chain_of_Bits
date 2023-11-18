require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/yt3zfbVmdHW6WMmRrovFUJICbrAPuXiO',
      accounts: ['00a0cd612819bc0a9c0ee752871e2e42de4aa6a457991ca571ef4c950105a8f8'],
    },
  },
};