const express = require('express');
const router = express.Router();
const buypostDetailController = require('../controllers/buypostDetailController');

router.get('/:TradeID', buypostDetailController.buypostDetail);

module.exports = router;