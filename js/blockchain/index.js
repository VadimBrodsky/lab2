const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const jsCoin = new Blockchain();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/mine', (req, res) => {
  const lastBlock = jsCoin.lastBlock();
  const lastProof = lastBlock.proof;
  proof = jsCoin.proofOfWork(lastProof);

  jsCoin.newTransaction({
    sender: 0,
    recipient: 'node identifier',
    amount: 1,
  })

  const block = jsCoin.newBlock(proof);

  res.status(200).json({
    message: 'New Block Mined',
    index: block.index,
    transactions: block.transactions,
    proof: block.proof,
    previousHash: block.previousHash,
  });
});

app.post('/transaction/new', (req, res) => {
  const { sender, recipient, amount } = req.body;

  if ([sender, recipient, amount].some(e => e === undefined)) {
    res.status(400).send('Missing values');
    return;
  }

  const index = jsCoin.newTransaction({ sender,recipient, amount });
  res.status(200).json({message: `Transaction will be added to Block ${index}`});
});

app.get('/chain', (req, res) => {
  res.status(200).json({
    chain: jsCoin.chain,
    length: jsCoin.chain.length,
  })
});

app.listen(3000, () => {
  console.log('Blockchain app is listening on port 3000');
});
