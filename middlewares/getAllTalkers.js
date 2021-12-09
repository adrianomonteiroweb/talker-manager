const { read } = require('../helpers/readAndContents');

const PATH = './talker.json';
const STATUS = 200;

const getAllTalkers = async (_request, response) => {
  const data = await read(PATH) || [];

  return response.status(STATUS).json(data);
};

module.exports = getAllTalkers;
