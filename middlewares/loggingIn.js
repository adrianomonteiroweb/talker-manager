const crypto = require('crypto');

const STATUS_OK = 200;
const RANDOM_BYTES = 8;

const loggingIn = (_require, response) => {
  // Para o uso da crypto.dandomBytes https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/
  // Para o uso de toString('hex) https://www.ti-enxame.com/pt/node.js/como-converter-string-em-hex-nodejs/835314410/
  const token = crypto.randomBytes(RANDOM_BYTES).toString('hex');
  return response.status(STATUS_OK).json({ token });
};

module.exports = loggingIn;
