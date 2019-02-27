class Transaction {
  constructor() {

  }
  getKey() {
    return sha((Math.random() * 10000).toString());
  }
}

module.exports = Transaction;
