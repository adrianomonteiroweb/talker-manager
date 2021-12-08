const router = require('express').Router();

const { getAllTalkers } = require('../middlewares/getAllTalkers');

router.get('/', getAllTalkers);

module.exports = router;
