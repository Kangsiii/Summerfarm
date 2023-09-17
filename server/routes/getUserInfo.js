const express = require('express');
const router = express.Router();
const getUserInfoController = require('../controllers/getUserInfoController');


router.get('/', getUserInfoController.getuserInfo);

module.exports = router;