const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// 회원가입 엔드포인트
router.post('/', registerController.register);

module.exports = router;