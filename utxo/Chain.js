const Block = require('./Block');
const sha = require('sha256');

class Chain {
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.map = [];
    this.publicKeys = [];
  }
  addBlock(balance) {
    var publicKey = this.getKey();
    this.map[publicKey] = new Block(balance, publicKey, this.difiiculty);
    this.publicKeys.push(publicKey);
  }
  getKey() {
    return sha((Math.random() * 10000).toString());
  }
  transaction(amount, publicKey, privateKey) {
    if (!map.publicKey)
      console.log('Invalid public key');
    if (map[publicKey].balance < amount)
      console.log('Not enough funds');
    if (map[publicKey].privateKey == privateKey)

  }
  display() {
    console.log(this);
  }
}

const chain = new Chain(1);

chain.addBlock(100);
chain.addBlock(100);

console.log(chain.map[chain.publicKeys[0]]);
