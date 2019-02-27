const sha = require('sha256');

class Block {
  constructor() {
    this.transactionLimit = 10;
  }
  getKey() {
    return sha((Math.random() * 1000).toString());
  }
  transaction() {

  }
}

module.exports = Block;
