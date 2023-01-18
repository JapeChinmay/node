const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello form the server side', name: 'chinmay jape' });
});
app.post('/', (req, res) => {
  res.status(200).json({ message: 'this is post one' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
