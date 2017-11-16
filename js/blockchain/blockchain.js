const crypto = require('crypto');
const URL = require('url');

class Blockchain {
  constructor() {
    this.chain = [];
    this.currentTransactions = [];
    this.nodes = new Set();

    // create the genesis block
    this.newBlock({ previousHash: 1, proof: 100 });
  }

  newBlock({ previousHash, proof }) {
    const block = {
      index: this.chain.length,
      timestamp: new Date(),
      transactions: this.currentTransactions,
      proof,
      previousHash: previousHash || Blockchain.hash(this.chain[this.chain.length - 1]),
    };

    this.currentTransactions = [];
    this.chain.push(block);

    return block;
  }

  newTransaction({ sender, recipient, amount }) {
    this.currentTransactions.push({
      amount,
      recipient,
      sender,
    });

    return this.currentTransactions.length - 1;
  }

  lastBlock() {
    return this.chain[this.chain.length - 1];
  }

  // find a number p such that hash pp contains leading 4 zeroes
  // where p is the previous proof of work
  proofOfWork(lastProof) {
    let proof = 0;
    while (!Blockchain.validProof(lastProof, proof)) {
      proof += 1;
    }
    return proof;
  }

  registerNode(address) {
    this.nodes.add(new URL(address).host);
  }

  validChain(chain) {
    return chain.every((block, index, chain) => {
      if (index === 0) { return true; }

      const lastBlock = chain[index - 1];

      console.log('last block', lastBlock);
      console.log('current block', block);
      console.log('\n--------------\n');

      if (block.previousHash !== Blockchain.hash(block)) {
        return false;
      }

      if (!Blockchain.validProof(lastBlock.proof, block.proof)) {
        return false;
      }

      return true;
    });
  }

  resolveConflicts() {
  }

  static hash(block) {
    const shaHash = crypto.createHash('sha256');
    return shaHash.update(JSON.stringify(block),'utf8').digest('hex');
  }

  // does has contain 4 leading zeroes?
  static validProof(lastProof, proof) {
    const shaHash = crypto.createHash('sha256');
    const guess = `${lastProof}${proof}`;
    const guessHash = shaHash.update(guess, 'utf8').digest('hex');
    return guessHash.substring(0, 4) === '0000';
  }
}

module.exports = Blockchain;
