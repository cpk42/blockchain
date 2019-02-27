const Block = require('./Block');
const sha = require('sha256');

// Chain class holds blocks

class BlockChain {
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.blocks = [];
    this.latestBlock = undefined;
    this.whitelist = [];
  }
  addBlock() {
    this.blocks[publicKey] = new Block(balance, this.difficulty);
  }
  display() {
    console.log(this);
  }
}

const chain = new BlockChain(1);

chain.addBlock();
chain.addBlock();
chain.addBlock();


// console.log('Ex00: Valid Transaction\n');
// chain.transaction(100, chain.keys[0], chain.blocks[chain.keys[0]].privateKey);
//
// console.log('\nEx01: Invalid Transaction\n');
// chain.transaction(100, chain.keys[0], 23456789);
// console.log(' ');
// chain.transaction(100, chain.keys[234234], 23456789);
// console.log(' ');
// chain.transaction(500, chain.keys[2], chain.blocks[chain.keys[2]].privateKey);
// chain.transaction(1000, chain.keys[2], chain.blocks[chain.keys[2]].privateKey);
/*

Class hierarchy:

BlockChain {
  Block {
    Transaction {
      User :: User,
      User :: User,
      User :: User,
      User :: User
      }
  Block {
    Transaction {
      User :: User,
      User :: User,
      User :: User,
      User :: User
      }
  Block {
    Transaction {
      User :: User,
      User :: User,
      User :: User,
      User :: User
      }
  }
}
*/
