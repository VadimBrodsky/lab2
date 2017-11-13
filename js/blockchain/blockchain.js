const shaHash = require('crypto').createHash('sha256');

class Blockchain {
  constructor() {
    this.chain = [];
    this.currentTransactions = [];

    // create the genesis block
    this.newBlock({ previousHash: 1, proof: 100 });
  }

  newBlock({ previousHash, proof }) {
    const block = {
      index: this.chain.length,
      timestamp: new Date(),
      transactions: this.currentTransactions,
      proof,
      previousHash: previousHash || this.hash(this.chain[self.chain.length - 1]),
    };

    this.currentTransactions = [];
    this.chain.push(block);

    return block;
  }

  newTransaction({ sender, recipient, amount }) {
    this.currentTransactions.push({
      sender,
      recipient,
      amount,
    })

    return this.currentTransactions.length - 1;
  }

  lastBlock() {
    console.log(this.chain);
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

  static hash(block) {
    return shaHash.update(JSON.stringify(block),'utf8').digest('hex');
  }

  // does has contain 4 leading zeroes?
  static validProof(lastProof, proof) {
    const guess = `${lastProof}${proof}`;
    const guessHash = shaHash.update(guess, 'utf8').digest('hex');
    return guessHash.substring(0, 3) === '0000';
  }
}

module.exports = Blockchain;
