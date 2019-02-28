const sha = require('sha256');

class Transaction {
  constructor(a, b, amount) {
    this.send = a;
    this.receive = b;
    this.amount = amount;
  }
  getKey() {
    return sha((Math.random() * 10000).toString());
  }
}

module.exports = Transaction;
