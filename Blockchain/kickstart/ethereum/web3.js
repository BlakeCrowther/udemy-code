import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/35b44da6d7fc435b8a736b5c734ecf8c'
  );
  web3 = new Web3(provider);
}

export default web3;
