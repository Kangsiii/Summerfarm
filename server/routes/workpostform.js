const express = require('express');
const router = express.Router();
const workpostformController = require('../controllers/workpostformController');


router.post('/', workpostformController.workpostform);

module.exports = router;