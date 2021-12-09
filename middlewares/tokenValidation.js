const ERROR_STATUS_TOKEN = 401;
const NOT_FOUND_MESSAGE = { message: 'Token não encontrado' };
const INVALID_TOKEN_MESAGE = { message: 'Token inválido' };

const tokenValidation = (require, response, next) => {
  // regex utilizado: https://stackoverflow.com/questions/11890260/regex-for-16-characters-followed-by-colon
  const regex = /^.{16}/;
  const { authorization } = require.headers;

  if (!authorization) return response.status(ERROR_STATUS_TOKEN).json(NOT_FOUND_MESSAGE);
  if (!regex.test(authorization)) {
    return response.status(ERROR_STATUS_TOKEN).json(INVALID_TOKEN_MESAGE);
  }

  next();
};

module.exports = tokenValidation;
