const router = require('express').Router();

const getAllTalkers = require('../middlewares/getAllTalkers');
const getTalkerById = require('../middlewares/getTalkerById');

router.get('/', getAllTalkers);

router.get('/:id', getTalkerById);

module.exports = router;
