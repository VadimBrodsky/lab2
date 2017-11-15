const Blockchain = require('./blockchain');

describe('Blockchain', () => {
  let jsCoin;

  describe('constructor', () => {
    beforeAll(() => {
      jsCoin = new Blockchain();
    });

    it('should store the state of the chain', () => {
      expect(jsCoin.chain).toBeDefined();
    });

    it('should store the set of current transactions', () => {
      expect(jsCoin.currentTransactions).toEqual([]);
    });

    it('should have the genesis block', () => {
      expect(jsCoin.chain.length).toEqual(1);
    });
  });

  describe('newBlock', () => {
    beforeEach(() => {
      jsCoin = new Blockchain();
    });

    it('should add a new block to the chain', () => {
      jsCoin.newBlock({ previousHash: '1', proof: '101' });

      expect(jsCoin.chain.length).toEqual(2);
      expect(jsCoin.lastBlock().proof).toEqual('101');
      expect(jsCoin.lastBlock().previousHash).toEqual('1');
    });

    it('should create the previousHash from the chain if undefined', () => {
      jsCoin.newBlock({ proof: '101' });

      expect(jsCoin.chain.length).toEqual(2);
      expect(jsCoin.lastBlock().proof).toEqual('101');
      expect(jsCoin.lastBlock().previousHash).toBeDefined();
    });
  });

  describe('newTransaction', () => {
    beforeEach(() => {
      jsCoin = new Blockchain();
    });

    it('should add the transaction into currentTransactions', () => {
      jsCoin.newTransaction({
        sender: 'Buffet',
        recipient: 'Gates',
        amount: 100,
      });
      expect(jsCoin.currentTransactions.length).toEqual(1);
    });

    it('shoud return return the transaction index', () => {
      const transactionIndex = jsCoin.newTransaction({
        sender: 'Buffet',
        recipient: 'Gates',
        amount: 100,
      });
      expect(transactionIndex).toEqual(0);

    });
  })
});
