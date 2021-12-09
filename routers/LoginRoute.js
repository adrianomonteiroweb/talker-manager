const router = require('express').Router();

const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const loggingIn = require('../middlewares/loggingIn');

router.post('/', emailValidation, passwordValidation, loggingIn);

module.exports = router;
