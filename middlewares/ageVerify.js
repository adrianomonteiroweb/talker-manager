const NOT_FOUND_AGE = { message: 'O campo "age" é obrigatório' };
const INVALID_AGE = { message: 'A pessoa palestrante deve ser maior de idade' };

const ERROR_STATUS = 400;

const ageVerify = (request, response, next) => {
  const { age } = request.body;

  if (!age) return response.status(ERROR_STATUS).json(NOT_FOUND_AGE);

  if (age < 18) return response.status(ERROR_STATUS).json(INVALID_AGE);

  next();
};

module.exports = ageVerify;
