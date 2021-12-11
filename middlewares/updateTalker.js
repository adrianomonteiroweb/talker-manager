const { read, updateBody } = require('../helpers/readAndBody');

const STATUS_OK = 200;

const PATH_FILE = './talker.json';

const updateTalker = async (request, response) => {
  const { id } = request.params;
  const { name, age, talk } = request.body;

  const updatedBody = {
    name,
    age: Number(age),
    id: Number(id),
    talk,
  };

  const data = await read(PATH_FILE, 'utf8');
  // array.splice(índice, número de elementos, elemento, elemento);
  // https://medium.com/devzera/vamos-esclarecer-a-confus%C3%A3o-dos-m%C3%A9todos-slice-splice-e-split-em-javascript-a0c0e6f5b5b4
  data.splice(data.findIndex((talker) => talker.id === Number(id)), 1, updatedBody);
  await updateBody(PATH_FILE, data);
  
  return response.status(STATUS_OK).json(updatedBody);
};

module.exports = updateTalker;
