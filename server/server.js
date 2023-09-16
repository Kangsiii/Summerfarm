const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// CORS 설정
app.use(cors());

// JSON 파싱 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 설정
const registerRouter = require('./routes/register'); // 회원가입 라우터 import
app.use('/api/register', registerRouter); // 라우터 경로 설정
const loginRouter = require('./routes/login'); // 로그인 라우터 import
app.use('/api/login', loginRouter);
const getUserInfoRouter = require('./routes/getUserInfo'); 
app.use('/api/getUserInfo', getUserInfoRouter);
const updateUserInfoRouter = require('./routes/updateUserInfo'); 
app.use('/api/updateUserInfo', updateUserInfoRouter);

// 서버 시작
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});