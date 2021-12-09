const NOT_FOUND_EMAIL_MESSAGE = { message: 'O campo "email" é obrigatório' };
const INVALID_EMAIL_MESSAGE = { message: 'O "email" deve ter o formato "email@email.com"' };
const ERROR_STATUS = 400;

const emailValidation = (request, response, next) => {
  // para o regex https://medium.com/@hellolasantha/email-validation-with-regex-eslint-fix-39fc803614c4
  const regex = /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i;
  const { email } = request.body;

  if (!email) return response.status(ERROR_STATUS).json(NOT_FOUND_EMAIL_MESSAGE);
  if (!regex.test(email)) return response.status(ERROR_STATUS).json(INVALID_EMAIL_MESSAGE);

  next();
};

module.exports = emailValidation;
