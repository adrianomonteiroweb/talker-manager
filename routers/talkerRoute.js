const router = require('express').Router();

const getAllTalkers = require('../middlewares/getAllTalkers');

router.get('/talker', getAllTalkers);

module.exports = router;
