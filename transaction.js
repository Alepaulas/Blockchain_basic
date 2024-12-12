class Transaction {
    constructor(sender, receiver, amount, fee = 0) {
      this.sender = sender;
      this.receiver = receiver;
      this.amount = amount;
      this.fee = fee;
    }
  }
  
module.exports = Transaction;