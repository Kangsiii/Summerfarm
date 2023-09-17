const express = require('express');
const router = express.Router();
const producerregisterController = require('../controllers/producerregisterController');


router.post('/', producerregisterController.producerregister);

module.exports = router;