const express = require('express');
const app = express();
const port = 8080;
const os = require('os');

app.get('/', (req, res) => {
  const interfaces = os.networkInterfaces();
  let address;

  Object.keys(interfaces).forEach((interfaceName) => {
    interfaces[interfaceName].forEach((interface) => {
      if (interface.family === 'IPv4' && !interface.internal) {
        address = interface.address;
      }
    });
  });

  res.status(200).send(`이 서버의 IP주소는:${address}입니다`);
});

app.listen(port, () => {
  console.log(`listening port:${port} `);
});
