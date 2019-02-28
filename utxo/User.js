class User {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.privateKeys = [];
  }
  getKey() {
    return sha((Math.random() * 10000).toString());
  }
}

module.exports = User;
