# Blockchain_basic
Aplicação básica de Blockchain em Node.js, simulando a criação de transações, inclusão em blocos e verificação de integridade da cadeia.

## Pré-requisitos
- **Node.js**: [Download aqui](https://nodejs.org/).

## Configuração Inicial
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/Blockchain_basic.git
2. Instale as dependências:
    npm install

## Estrutura do Projeto
- **block.js**: Estrutura e métodos para cálculo do hash de cada bloco.
- **transaction.js**: Estrutura das transações, incluindo remetente, destinatário e valor.
- **blockchain.js**: Estrutura da blockchain, com funções de criação e validação da cadeia.
- **main.js**: Arquivo principal para simulação da blockchain, onde a execução ocorre.

## Executando a Aplicação
Para iniciar a aplicação, utilize o comando:
   ```bash
   node main.js

## Funcionalidades
- Criação de transações e blocos: Transações podem ser agrupadas em blocos e adicionadas à blockchain.
- Verificação da integridade da blockchain: O sistema verifica se a cadeia é válida, garantindo a integridade dos dados.

## Exemplo

main.js
const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

console.log("Iniciando Blockchain...");
const blockchain = new Blockchain();

console.log("Criando transações...");
blockchain.createTransaction(new Transaction("0x0001", "0x0002", 5));
blockchain.createTransaction(new Transaction("0x0002", "0x0001", 10));

console.log("Criando bloco com as transações...");
blockchain.addBlock();

console.log(`Blockchain é válida? ${blockchain.isChainValid()}`);

## Saída Esperada
PS C:\Users\USER\Downloads\Blockchain_basic\Blockchain_basic> cd C:\Users\USER\Downloads\Blockchain_basic\Blockchain_basic
>> node main.js
>>
Iniciando Blockchain...
Criando transações...
Criando bloco com as transações...
Blockchain é válida? true

Bloco 1
Hash: 2e07127cb65e3eca00819ded35463ad3fedce0c7c1fe93c8201ffa8b10303bdc
Hash Anterior: 0
Timestamp: 1728477118389

Bloco 2
Hash: 4e7fa2350359103c313a5b177ea7a2ff53953418bf340878040a27c00fe266d5
Hash Anterior: 2e07127cb65e3eca00819ded35463ad3fedce0c7c1fe93c8201ffa8b10303bdc
Timestamp: 1728477118389
Transação 1:
  Enviador: 0x0001
  Recebedor: 0x0002
  Quantidade: 5
Transação 2:
  Enviador: 0x0002
  Recebedor: 0x0001
  Quantidade: 10
PS C:\Users\USER\Downloads\Blockchain_basic\Blockchain_basic>

## Licença
Este projeto está licenciado sob a licença MIT