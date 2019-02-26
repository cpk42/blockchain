const sha = require('sha256');

class Block {
  constructor(balance, publicKey, difficulty) {
    this.balance = balance;
    this.publicKey = publicKey;
    this.privateKey = this.getKey();
  }
  getKey() {
    return sha((Math.random() * 1000).toString());
  }
  transaction() {
    
  }
}

module.exports = Block;
