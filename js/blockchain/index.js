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
      amount
    })

    return this.currentTransactions.length - 1;
  }

  static hash(block) {
    return shaHash.update(JSON.stringify(block),'utf8').digest('hex');
  }

  static lastBlock() {
    return this.chain[this.chain.length - 1];
  }
}

module.exports = Blockchain;
