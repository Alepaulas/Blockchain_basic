# README
## Blockchain_basic
## Funcionalidades
- **Criação de transações e blocos**;
- **Mineração de blocos com PoW**;
- **Controle de saldos**;
- **Recompensas e taxas de transação**;
- **Propagação de blocos e resolução de conflitos**;
- **Verificação da integridade da blockchain**;

## Pré-requisitos
- **Node.js**: [Download aqui](https://nodejs.org/).

## Configuração Inicial
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/Blockchain_basic.git
2. Instale as dependências:
    npm install

## Estrutura do Projeto
- **block.js**: Estrutura e métodos para cálculo do hash e a mineração com PoW com campos para recompensas e taxas.
- **transaction.js**: Estrutura das transações, incluindo remetente, destinatário, valor e taxa de transação.
- **blockchain.js**: Estrutura da blockchain, com funções de gerenciamento de saldos, validação das transações, adição de blocos e resolução de conflitos.
- **main.js**: Arquivo principal para simulação da blockchain, onde a execução ocorre, criando transações, mineração e propagação de blocos e resolução de conflitos .

## Executando a Aplicação
Para iniciar a aplicação, utilize o comando:
   ```bash
   node main.js
```

## Funcionalidades
- Criação de transações e blocos: Transações podem ser agrupadas em blocos e adicionadas à blockchain.
- Verificação da integridade da blockchain: O sistema verifica se a cadeia é válida, garantindo a integridade dos dados.

## Exemplo

**```**javascript

const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

console.log("Iniciando Blockchain...");
const blockchain = new Blockchain();

console.log("Adicionando saldos iniciais...");
blockchain1.balances["0x0001"] = 50; // Saldo inicial
blockchain1.balances["0x0002"] = 20;

console.log("Criando transações...");
blockchain.createTransaction(new Transaction("0x0001", "0x0002", 10,0.5));
blockchain.createTransaction(new Transaction("0x0002", "0x0001", 15,0.2));

console.log("Minerando bloco...");
blockchain.addBlock("0xMINERADOR1");

console.log("Estado final dos saldos:");
console.log(blockchain1.balances);

**##** Saída Esperada

```
Iniciando Blockchain... 
Adicionando saldos iniciais... 
Criando transações... 
Minerando bloco... 

Bloco minerado: 0000abcd1234...

Estado final dos saldos: { "0x0001": 39.5, // Saldo reduzido por transações + taxas "0x0002": 30, // Recebeu 10 na transação "0x0003": 15, // Recebeu 15 na transação "0xMINERADOR1": 50.7 // Recompensa + taxas somadas }
```