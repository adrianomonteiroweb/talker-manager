const ERROR_STATUS = 400;

const INVALID_DATE = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
const INVALID_RATE = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
const NOT_FOUND_TALK = {
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
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

module.exports = { talkVerify, fieldTalkVerify };
