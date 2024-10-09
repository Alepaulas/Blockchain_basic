const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

function main() {
  console.log("Iniciando Blockchain...");
  const blockchain = new Blockchain();

  console.log("Criando transações...");
  blockchain.createTransaction(new Transaction("0x0001", "0x0002", 5));
  blockchain.createTransaction(new Transaction("0x0002", "0x0001", 10));

  console.log("Criando bloco com as transações...");
  blockchain.addBlock();

  console.log(`Blockchain é válida? ${blockchain.isChainValid()}`);
  
  blockchain.chain.forEach((block, index) => {
    console.log(`\nBloco ${index + 1}`);
    console.log(`Hash: ${block.hash}`);
    console.log(`Hash Anterior: ${block.previousHash}`);
    console.log(`Timestamp: ${block.timestamp}`);
    block.transactions.forEach((transaction, tIndex) => {
      console.log(`Transação ${tIndex + 1}:`);
      console.log(`  Enviador: ${transaction.sender}`);
      console.log(`  Recebedor: ${transaction.receiver}`);
      console.log(`  Quantidade: ${transaction.amount}`);
    });
  });
}

main();
