const express = require('express');
const app = express();
const port = 8080;
const os = require('os');

app.get('/', (req, res) => {
  res.json({ data: 'hello world' });
});

app.listen(port, () => {
  console.log(`listening port:${port} `);
});
