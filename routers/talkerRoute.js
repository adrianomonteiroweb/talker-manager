const router = require('express').Router();

// get /
const getAllTalkers = require('../middlewares/getAllTalkers');
// get /:id
const getTalkerById = require('../middlewares/getTalkerById');
// post / , put /:id e delete /:id
const tokenValidation = require('../middlewares/tokenValidation');
// post / e put /:id
const nameVerify = require('../middlewares/nameVerify');
const ageVerify = require('../middlewares/ageVerify');
const { talkVerify, fieldTalkVerify } = require('../middlewares/talkVerify');
// post /
const insertTalk = require('../middlewares/insertTalker');
// put /:id
const updateTalker = require('../middlewares/updateTalker');
// delete /:id
const deleteTalker = require('../middlewares/deleteTalker');

router.get(
  '/',
  getAllTalkers,
);

router.get(
  '/:id',
  getTalkerById,
);

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

router.delete(
  '/:id',
  tokenValidation,
  deleteTalker,
);

module.exports = router;
