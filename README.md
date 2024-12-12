# Blockchain_basic
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
- Mineração de blocos com PoW : Os blocos são minerados antes de serem adicionados à blockchain, garantindo um hash que atende a um específico.
- Verificação da integridade da blockchain: O sistema verifica se a cadeia é válida, garantindo a integridade dos dados.

## Exemplo

```
javascript

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
```

## Saída Esperada

```
PS C:\Users\USER\Downloads\Blockchain_basic\Blockchain_basic-1> node main.js
Iniciando Blockchain...

Criando transações...

Minerando bloco no nó 1...
Bloco minerado: 00fe0623b011c989cb13d94741cbce7832ee654470338596d593c26217c4dc0c

Estado do saldo após mineração:
{
  '0x0001': -0.6000000000000014,
  '0x0002': 14.8,
  '0x0003': 55,
  '0xMINERADOR1': 50.8
}

Propagando a cadeia para o nó 2...

Validando a blockchain no nó 2...
Blockchain é válida no nó 2? true

Exibindo detalhes da cadeia no nó 1:

Bloco 1
Hash: acd0c29b6d2ad7d0d5c0a39c9a6ae8fc14f162fb35e1562b9bf78c6d8a216b48
Hash Anterior: 0
Timestamp: 1734046633054
Nonce: 0
Recompensa + Taxas: 0

Bloco 2
Hash: 00fe0623b011c989cb13d94741cbce7832ee654470338596d593c26217c4dc0c
Hash Anterior: acd0c29b6d2ad7d0d5c0a39c9a6ae8fc14f162fb35e1562b9bf78c6d8a216b48       
Timestamp: 1734046633055
Nonce: 1
Recompensa + Taxas: 50
Transação 1:
  Enviador: 0x0001
  Recebedor: 0x0002
  Quantidade: 10
  Taxa: 0.5
Transação 2:
  Enviador: 0x0002
  Recebedor: 0x0003
  Quantidade: 15
  Taxa: 0.2
Transação 3:
  Enviador: 0x0001
  Recebedor: 0x0003
  Quantidade: 40
  Taxa: 0.1

Estado final dos saldos no nó 1:
{
  '0x0001': '-0.60',
  '0x0002': '14.80',
  '0x0003': '55.00',
  '0xMINERADOR1': '50.80'
}
PS C:\Users\USER\Downloads\Blockchain_basic\Blockchain_basic-1>
```





