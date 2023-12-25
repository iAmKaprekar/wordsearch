const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/assets')));

app.use('/', express.static(path.resolve(__dirname, '../build')));
// app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

app.get('/', (req, res) => {
  return res.status(200).sendFile('../client/index.html');
})

app.listen(PORT, () => {
  console.log(`Wordsearch server listening on port ${PORT}...`)
});