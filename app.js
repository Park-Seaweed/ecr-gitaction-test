const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
  res.send('Hellow World!!-ecr-test');
});
app.listen(port, () => {
  console.log(`listening ar:${port} `);
});
