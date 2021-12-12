const ERROR_STATUS = 400;

const NOT_FOUND_NAME = { message: 'O campo "name" é obrigatório' };
const INVALID_NAME = { message: 'O "name" deve ter pelo menos 3 caracteres' };

const nameVerify = (request, response, next) => {
  const { name } = request.body;

  if (!name) return response.status(ERROR_STATUS).json(NOT_FOUND_NAME);

  if (name.length < 3) return response.status(ERROR_STATUS).json(INVALID_NAME);

  next();
};

module.exports = nameVerify;
