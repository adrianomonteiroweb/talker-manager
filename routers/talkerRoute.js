const router = require('express').Router();

const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkerById = require('../middlewares/getTalkerById');
const tokenValidation = require('../middlewares/tokenValidation');
const {
  nameVerify,
  ageVerify,
  talkVerify,
  fieldTalkVerify,
  insertTalk,
} = require('../middlewares/insertTalker');

router.get('/', getAllTalkers);

router.get('/:id', getTalkerById);

router.post(
  '/',
  tokenValidation,
  nameVerify,
  ageVerify,
  fieldTalkVerify,
  talkVerify,
  insertTalk,
);

module.exports = router;
