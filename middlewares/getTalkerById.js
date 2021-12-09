const { read } = require('../helpers/readAndContents');

const PATH_FILE = './talker.json';
const STATUS_OK = 200;
const JSON_RES = { message: 'Pessoa palestrante não encontrada' };
const ERROR_STATUS = 404;

const getTalkerById = async (require, response) => {
  const data = await read(PATH_FILE);

  const getTalker = data.find((talker) => talker.id === Number(require.params.id));

  return getTalker ? response
  .status(STATUS_OK).json(getTalker) : response.status(ERROR_STATUS).json(JSON_RES);
};

module.exports = getTalkerById;
