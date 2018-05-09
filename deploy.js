const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'list of menumonics',
    'https://rinkeby.infura.io/WwH2CLyBUatn6T2zBK5A'
);

const web3 = new Web3(provider);