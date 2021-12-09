const NOT_FOUND_PASSWORD_MESSAGE = { message: 'O campo "password" é obrigatório' };
const INVALID_PASSWORD_MESSAGE = { message: 'O "password" deve ter pelo menos 6 caracteres' };
const ERROR_STATUS = 400;

const passwordValidation = (request, response, next) => {
  const regex = /^.{6}/;
  const { password } = request.body;

  if (!password) return response.status(ERROR_STATUS).json(NOT_FOUND_PASSWORD_MESSAGE);
  if (!regex.test(password)) return response.status(ERROR_STATUS).json(INVALID_PASSWORD_MESSAGE);

  next();
};

module.exports = passwordValidation;
