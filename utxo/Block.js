const Transaction = require('./Transaction');
const sha = require('sha256');

class Block {
  constructor(whitelist) {
    this.receipts = []
    this.transactionLimit = 10;
    this.transactions = [];
  }
  getKey() {
    return sha((Math.random() * 10000).toString());
  }
  transaction(transaction) {
    var key = this.getKey();
    console.log(`Here is your receipt`);
    this.transactions[key] = transaction;
    this.receipts.push(key)

  }
};

module.exports = Block;
