const express = require('express');
const router = express.Router();
const workpostDetailController = require('../controllers/workpostDetailController');

router.get('/:JobID', workpostDetailController.workpostDetail);

module.exports = router;