const express = require('express');
const router = express.Router();
const workpostdetailController = require('../controllers/workpostdetailController');

router.get('/:JobID', workpostdetailController.workpostdetail);

module.exports = router;