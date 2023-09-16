const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost', // MySQL 호스트 주소
  user: 'root',      // MySQL 사용자 이름
  password: '1234', // MySQL 비밀번호
  database: 'Summerfarm', // 사용할 데이터베이스 이름
});

db.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err);
  } else {
    console.log('데이터베이스 연결 성공');
  }
});

module.exports = db;