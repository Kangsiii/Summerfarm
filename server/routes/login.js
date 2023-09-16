const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// 회원가입 엔드포인트
router.post('/', loginController.login);

module.exports = router;