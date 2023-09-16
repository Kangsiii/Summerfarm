const db = require('../db.js');

exports.getuserInfo = (req, res) => {
  const userID = req.query.userID; // 쿼리 매개변수로부터 UserID 값을 가져옵니다.
  console.log({ userID });

    db.query(
        'SELECT UserID, UserType, Username, Password, Birthdate, PhoneNumber FROM users WHERE UserID = ?',
        [userID], // UserID 값을 배열로 전달합니다.
        (err, result) => {
            if (err) {
                console.error('사용자 정보 조회 오류:', err);
                return res.status(500).json({ message: '사용자 정보 조회 오류' });
            }

            if (result.length === 0) {
                return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
            }

            // 사용자 정보 조회 성공
            const userData = result[0]; // 첫 번째 사용자 정보를 가져옴
            const { Username, Password, Birthdate, PhoneNumber } = userData;

            res.status(200).json({ Username, Password, Birthdate, PhoneNumber });
        }
    );
};
