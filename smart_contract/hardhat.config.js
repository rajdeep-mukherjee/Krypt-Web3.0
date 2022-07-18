require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/EjGtTCrvck7NmnD0o6pqVlEPgnOoldCN',
      accounts: ['53aeb497eccf863f1108815891f987938bcc9e46d98a4a0f05f124986efb1de0'],
    },
  },
};