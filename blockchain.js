const Block = require('./block');
const Transaction = require('./transaction');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.balances = {};
    this.difficulty = 2;
    this.minerReward = 50;
  }

  createGenesisBlock() {
    return new Block(Date.now(), [], '0', this.difficulty,0 , 0);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  createTransaction(transaction) {
    if ((this.balances[transaction.sender] || 0) < transaction.amount + transaction.fee) {throw new Error('Saldo insuficiente para fazer a transação.');
    }
    this.pendingTransactions.push(transaction);
  }

  addBlock(minerAddress) {
    const totalFees = this.pendingTransactions.reduce((sum, tx) => sum+tx.fee, 0);

    const newBlock = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash, this.difficulty, this.minerReward, totalFees);
    newBlock.mineBlock();
    this.chain.push(newBlock);
    this.updateBalances(newBlock, minerAddress);
    this.pendingTransactions = [];
  }
  updateBalances(block, minerAddress) {
    block.transactions.forEach(tx => {
      this.balances[tx.sender] = (this.balances[tx.sender] || 0) - (tx.amount + tx.fee);
      this.balances[tx.receiver] = (this.balances[tx.receiver] || 0) + tx.amount;
    });
    const totalFees = block.transactions.reduce((sum, tx) => sum + tx.fee, 0);
    this.balances[minerAddress] = (this.balances[minerAddress] || 0) + block.minerReward + totalFees;
  }
  resolveConflicts(newChain) {
    if (newChain.length > this.chain.length) {
      this.chain = newChain;
    }
  }
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;