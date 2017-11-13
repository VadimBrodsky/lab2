const express = require('express');
const Blockchain = require('./blockchain');

const jsCoin = new Blockchain();
const app = express();

app.get('/mine', (req, res) => {
  res.status(200).send('We will mine a new block');
});

app.post('/transaction/new', (req, res) => {
  res.status(200).send('We will add a new trasnaction');
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
