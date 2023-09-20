const express = require('express');
const router = express.Router();
const workpostlistController = require('../controllers/workpostlistController');

router.get('/', workpostlistController.workpostlist);

module.exports = router;