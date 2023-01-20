'use strict';
const os = require('os');
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const interfaces = os.networkInterfaces();
    let address;

    Object.keys(interfaces).forEach((interfaceName) => {
      interfaces[interfaceName].forEach((interface) => {
        if (interface.family === 'IPv4' && !interface.internal) {
          address = interface.address;
        }
      });
    });

    reply.code(200).send(`이서버의 IP는:${address}`);
  });
};
