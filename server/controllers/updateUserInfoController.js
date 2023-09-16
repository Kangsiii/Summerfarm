const db = require('../db.js');

exports.updateUserInfo = (req, res) => {
  const { userID, Username, Password, Birthdate, PhoneNumber } = req.body;

  db.query(
    'UPDATE users SET Username = ?, Password = ?, Birthdate = ?, PhoneNumber = ? WHERE UserID = ?',
    [Username, Password, Birthdate, PhoneNumber, userID],
    (err, result) => {
      if (err) {
        console.error('사용자 정보 업데이트 오류:', err);
        return res.status(500).json({ message: '사용자 정보 업데이트 오류' });
      }

      // 업데이트가 성공하면 응답을 반환합니다.
      res.status(200).json({ message: '사용자 정보가 업데이트되었습니다.' });
    }
  );
};