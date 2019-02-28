const Transaction = require('./Transaction');
const Block = require('./Block');
const User = require('./User');

// BlockChain class holds blocks
class BlockChain {
  constructor() {
    this.blocks = [];
    this.latestBlock = undefined;
    this.whitelist = [];
  }
  addBlock() {
    this.blocks.push(new Block());
    this.latestBlock = this.blocks[this.blocks.length - 1];
  }
  display() {
    console.log(this);
  }
  addWhitelist(user) {
    if (this.checkWhitelist(user)) {
      console.log(`User ${user} already whitelisted\n`);
      return false;
    }
    else {
      console.log(`Whitelisting ${user}\n`);
      this.whitelist[user] = new User(user);
    }
  }
  checkWhitelist(user) {
    if (typeof this.whitelist[user] === 'undefined') {
      // console.log(`[ ERROR ] ... User ${user} is not whitelisted.\n`)
      return false;
    }
    else {
      // console.log(`User ${user} is whitelisted.\n`);
      return true;
    }
  }
  createTransaction(a, b, amount) {
    if (this.checkWhitelist(a) && this.checkWhitelist(b)) {
      if (amount < 0) {
        console.log(`Amount: $${amount} too low to send\n`);
        return false
      }
      if (a.balance < amount) {
        console.log(`Sender balance: $${a.balance} too low to send amount: $${amount}\n`);
      }
      else {
        this.latestBlock.transaction(new Transaction(a, b, amount));
      }
    }
    else {
      console.log(`Sender or Receiver not whitelisted\n`);
      return false;
    }
  }
  deposit(user, amount) {
    if  (amount <= 0)
      console.log(`Amount: $${amount} too low to send\n`);
    else if (this.checkWhitelist(user)) {
      console.log(`Depositing $${amount} into ${user}`);
      this.whitelist[user].balance += amount;
    }
    else
      console.log(`User ${user} is not whitelisted\n`);
  }
};

module.exports = BlockChain;
