const Block = require('./Block');
const sha = require('sha256');

// Chain class holds blocks

class BlockChain {
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.blocks = [];
    this.publicKeys = [];
    this.keys = [];
  }
  addBlock(balance) {
    var publicKey = this.getKey();
    this.blocks[publicKey] = new Block(balance, publicKey, this.difiiculty);
    this.publicKeys[publicKey] = publicKey;
    this.keys.push(publicKey);
  }
  getKey() {
    return sha((Math.random() * 10000).toString());
  }
  checkKey(publicKey) {

  }
  transaction(amount, publicKey, privateKey) {
    if (typeof this.publicKeys[publicKey] === 'undefined')
      console.log('Invalid publicKey');
    else if (this.blocks[publicKey].balance < amount)
      console.log('Not enough funds');
    else if (this.blocks[publicKey].privateKey == privateKey){
      this.blocks[publicKey].balance -= amount;
      console.log(`${amount}$ deducted from ${publicKey}`);
    }
    else
      console.log('Invalid privateKey');
  }
  display() {
    console.log(this);
  }
}

const chain = new BlockChain(1);

chain.addBlock(100);
chain.addBlock(50);
chain.addBlock(1000);


console.log('Ex00: Valid Transaction\n');
chain.transaction(100, chain.keys[0], chain.blocks[chain.keys[0]].privateKey);

console.log('\nEx01: Invalid Transaction\n');
chain.transaction(100, chain.keys[0], 23456789);
console.log(' ');
chain.transaction(100, chain.keys[234234], 23456789);
console.log(' ');
chain.transaction(500, chain.keys[2], chain.blocks[chain.keys[2]].privateKey);
chain.transaction(1000, chain.keys[2], chain.blocks[chain.keys[2]].privateKey);
