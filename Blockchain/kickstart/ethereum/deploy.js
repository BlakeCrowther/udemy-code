const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'recycle small void soda sorry humble wage chest trust crunch life axis',
  'https://rinkeby.infura.io/v3/35b44da6d7fc435b8a736b5c734ecf8c'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to ', result.options.address);
};

deploy();
