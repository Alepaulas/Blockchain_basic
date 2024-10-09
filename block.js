const crypto = require('crypto');

class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const data = this.previousHash + this.timestamp + JSON.stringify(this.transactions);
    return crypto.createHash('sha256').update(data).digest('hex');
  }
}

module.exports = Block;
