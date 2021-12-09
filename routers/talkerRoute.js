const router = require('express').Router();

const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkerById = require('../middlewares/getTalkerById');

router.get('/talker', getAllTalkers);

router.get('/talker/:id', getTalkerById);

module.exports = router;
