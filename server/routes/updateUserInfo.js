const express = require('express');
const router = express.Router();
const updateUserInfoController = require('../controllers/updateUserInfoController');


router.post('/', updateUserInfoController.updateUserInfo);

module.exports = router;