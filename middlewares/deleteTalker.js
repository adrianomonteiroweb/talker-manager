const { updateBody, read } = require('../helpers/readAndBody');

const STATUS_OK = 200;
const STATUS_MESSAGE_OK = { message: 'Pessoa palestrante deletada com sucesso' };

const PATH_FILE = './talker.json';

const deleteTalker = async (request, response) => {
  const { id } = request.params;

  const data = await read(PATH_FILE, 'utf8');
  
  data.splice(data.findIndex((talk) => talk.id === Number(id)), 1);

  await updateBody(PATH_FILE, data);

  response.status(STATUS_OK).json(STATUS_MESSAGE_OK);
};

module.exports = deleteTalker;
