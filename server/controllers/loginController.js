const db = require('../db.js');

exports.login = (req, res) => {
  const { Username, Password } = req.body;

  db.query(
    'SELECT UserID, UserType, Username FROM users WHERE Username = ? AND Password = ?',
    [Username, Password],
    (err, result) => {
      if (err) {
        console.error('로그인 오류:', err);
        return res.status(500).json({ message: '로그인 오류' });
      }

      // 조회된 사용자 정보가 없을 경우 로그인 실패
      if (result.length === 0) {
        return res.status(401).json({ message: '로그인 실패' });
      }

      // 로그인 성공
      const user = result[0]; // 첫 번째 사용자 정보를 가져옴
      const userType = user.UserType; // user_Id 값을 가져옴
      const username = user.Username; // username 값을 가져옴
      const userID = user.UserID
      console.log({ userType, username, userID });

      // 여기에서 userId 값을 사용하여 추가 작업을 수행할 수 있습니다.

      // 클라이언트로 응답을 보낼 때 userId와 username을 포함하여 보냅니다.
      res.status(200).json({ message: '로그인 성공', userType, username, userID });
    }
  );
};