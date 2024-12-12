const crypto = require('crypto');

class Block {
  constructor(timestamp, transactions, previousHash = '', difficulty = 2) {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.difficulty = difficulty;
    this.minerReward = minerReward;
    this.totalFees = totalFees;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const data = this.previousHash + this.timestamp + JSON.stringify(this.transactions)+ this.nonce+this.minerReward+this.totalFees;
    return crypto.createHash('sha256').update(data).digest('hex');

}


mineBlock() {
   while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
   }
   console.log(`Bloco minerado: ${this.hash}`);
 }
}

module.exports = Block;
