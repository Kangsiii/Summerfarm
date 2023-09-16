const express = require('express');
const router = express.Router();
const getUserInfoController = require('../controllers/getUserInfoController');

// 회원가입 엔드포인트
router.get('/', getUserInfoController.getuserInfo);

module.exports = router;