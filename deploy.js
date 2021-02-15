const HDWallletProvider  = require ('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface , bytecode} = require('./compile');


const provider = new HDWallletProvider(
  'shock faint ankle round country machine labor control want million brown excuse',
  'https://rinkeby.infura.io/v3/868d06956c2b4ce1b9c762f829f0c3a4'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy form ', accounts[0] );


  const result= await new web3.eth.Contract(JSON.parse(interface)).
      deploy({data: bytecode, arguments: ['Hi there!']})
      .send({gas : '1000000' , from: accounts[0]});
      console.log('Contract deployed to',result.options.address);
};
deploy();
