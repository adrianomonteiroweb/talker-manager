const { bodyFunc, read } = require('../helpers/readAndBody');

const PATH_FILE = './talker.json';

const STATUS_OK = 201;

const insertTalk = async (request, response) => {
  const { name, age, talk } = request.body;

  const data = await read(PATH_FILE);

  const addedObject = {
    name,
    age: Number(age),
    id: data.length + 1,
    talk,
  };

  await bodyFunc(PATH_FILE, addedObject);

  return response.status(STATUS_OK).json(addedObject);
};

module.exports = insertTalk;
