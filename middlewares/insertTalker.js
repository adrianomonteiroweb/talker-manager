const { bodyFunc, read } = require('../helpers/readAndBody');

const PATH_FILE = './talker.json';

const STATUS_OK = 201;
const ERROR_STATUS = 400;

const NOT_FOUND_NAME = { message: 'O campo "name" é obrigatório' };
const INVALID_NAME = { message: 'O "name" deve ter pelo menos 3 caracteres' };

const NOT_FOUND_AGE = { message: 'O campo "age" é obrigatório' };
const INVALID_AGE = { message: 'A pessoa palestrante deve ser maior de idade' };

const INVALID_DATE = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
const INVALID_RATE = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
const NOT_FOUND_TALK = {
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
};

const nameVerify = (request, response, next) => {
  const { name } = request.body;

  if (name.length === 0) return response.status(ERROR_STATUS).json(NOT_FOUND_NAME);

  if (name.length < 3) return response.status(ERROR_STATUS).json(INVALID_NAME);

  next();
};

const ageVerify = (request, response, next) => {
  const { age } = request.body;

  if (age.length === 0) return response.status(ERROR_STATUS).json(NOT_FOUND_AGE);

  if (age < 18) return response.status(ERROR_STATUS).json(INVALID_AGE);

  next();
};

const talkVerify = (request, response, next) => {
  const { talk } = request.body;

  const regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

  if (!regex.test(talk.watchedAt)) return response.status(ERROR_STATUS).json(INVALID_DATE);

  if (talk.rate < 0 || talk.rate > 5) return response.status(ERROR_STATUS).json(INVALID_RATE);

  next();
};

const fieldTalkVerify = (request, response, next) => {
  const { talk } = request.body;

  if (!talk || !talk.watchedAt || talk.rate === undefined) {
    return response.status(ERROR_STATUS).json(NOT_FOUND_TALK);
  }

  next();
};

const insertTalk = async (request, response) => {
  const { name, age, talk } = request.body;

  const data = await read(PATH_FILE);

  const addedObject = {
    id: data.length + 1,
    name,
    age: Number(age),
    talk,
  };

  await bodyFunc(PATH_FILE, addedObject);

  return response.status(STATUS_OK).json(addedObject);
};

module.exports = {
  nameVerify,
  ageVerify,
  fieldTalkVerify,
  talkVerify,
  insertTalk,
};
