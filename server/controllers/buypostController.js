const db = require('../db.js');

exports.buypost = (req, res) => {
  const { AuthorID, Title, ProduceID, ProduceInfo, PostingTime } = req.body;
  
  // PostingTime 값을 MySQL 형식으로 변환
  const postingTime = new Date(PostingTime).toISOString().slice(0, 19).replace('T', ' ');

  console.log(AuthorID, Title, ProduceID, ProduceInfo,postingTime);

  // 필수 필드 (Title, AuthorID, ProduceID, ProduceInfo)가 비어있는지 확인
  if (!Title || !AuthorID || !ProduceID || !ProduceInfo) {
    return res.status(400).json({ error: '모든 필수 입력 항목을 채워주세요.' });
  }

  // 데이터베이스에 직거래 게시글 정보를 삽입
  const sql = `
    INSERT INTO directtrade ( Title, AuthorID,  ProduceID, ProduceInfo, PostingTime)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [ Title, AuthorID, ProduceID, ProduceInfo, postingTime], // 수정된 부분
    (err, result) => {
      if (err) {
        console.error('DB 저장 실패:', err);
        return res.status(500).json({ error: '데이터 저장 중 오류가 발생했습니다.' });
      }

      // 클라이언트로 DirectTradePostID를 응답
      return res.status(200).json({ message: '게시물이 성공적으로 작성되었습니다.' });
    }
  );
};
