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
const updateTalker = require('../middlewares/updateTalker');

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

router.put(
  '/:id',
  tokenValidation,
  nameVerify,
  ageVerify,
  fieldTalkVerify,
  talkVerify,
  updateTalker,
);

module.exports = router;
