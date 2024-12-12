const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

function main() {
  console.log("Iniciando Blockchain...");
  const blockchain1 = new Blockchain();
  const blockchain2 = new Blockchain();
  blockchain1.balances["0x0001"] = 50;
  blockchain1.balances["0x0002"] = 20;

  console.log("\nCriando transações...");
  try{
    blockchain1.createTransaction(new Transaction("0x0001", "0x0002", 10,0.5));
    blockchain1.createTransaction(new Transaction("0x0002", "0x0003", 15,0.2));
    blockchain1.createTransaction(new Transaction("0x0001", "0x0003", 40,0.1));
  } catch (error) {
    console.error("Erro ao criar transação:", error.message);
  }  
  console.log("\nMinerando bloco no nó 1...");
  blockchain1.addBlock("0xMINERADOR1");

  console.log("\nEstado do saldo após mineração:");
  console.log(blockchain1.balances);

  console.log("\nPropagando a cadeia para o nó 2...");
  blockchain2.resolveConflicts(blockchain1.chain);

  console.log("\nValidando a blockchain no nó 2...");
  console.log(`Blockchain é válida no nó 2? ${blockchain2.isChainValid()}`);
  
  console.log("\nExibindo detalhes da cadeia no nó 1:");

  blockchain1.chain.forEach((block, index) => {
    console.log(`\nBloco ${index + 1}`);
    console.log(`Hash: ${block.hash}`);
    console.log(`Hash Anterior: ${block.previousHash}`);
    console.log(`Timestamp: ${block.timestamp}`);
    console.log(`Nonce: ${block.nonce}`);
    console.log(`Recompensa + Taxas: ${block.minerReward}`);
    block.transactions.forEach((transaction, tIndex) => {
      console.log(`Transação ${tIndex + 1}:`);
      console.log(`  Enviador: ${transaction.sender}`);
      console.log(`  Recebedor: ${transaction.receiver}`);
      console.log(`  Quantidade: ${transaction.amount}`);
      console.log(`  Taxa: ${transaction.fee}`);
    });
  });
  console.log("\nEstado final dos saldos no nó 1:");
  console.log(
    Object.fromEntries(
      Object.entries(blockchain1.balances).map(([key, value]) => [key, value.toFixed(2)])
    )
  );
}

main();