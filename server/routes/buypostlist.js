const express = require('express');
const router = express.Router();
const buypostlistController = require('../controllers/buypostlistController');


router.get('/', buypostlistController.buypostlist);

module.exports = router;