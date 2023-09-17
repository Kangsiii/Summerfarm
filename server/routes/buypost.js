const express = require('express');
const router = express.Router();
const buypostController = require('../controllers/buypostController');


router.post('/', buypostController.buypost);

module.exports = router;