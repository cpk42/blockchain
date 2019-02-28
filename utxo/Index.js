const User = require('./User')
const BlockChain = require('./Blockchain');
const Block = require('./Block');
const sha = require('sha256');

const chain = new BlockChain();

chain.addBlock();
chain.addWhitelist('curt')
chain.addWhitelist('wubbz')

chain.deposit('curt', 100);
chain.createTransaction('curt', 'wubbz', 50);

chain.display()
