const db = require('../db.js');

const producerregister = (req, res) => {
  const { UserID, ProduceName, ProduceDescription, Category, Price, HarvestSeason, ProducerName, PhotoURL } = req.body;
  
  // 필수 필드 (ProduceName, ProduceDescription)가 비어있는지 확인
  if (!ProduceName || !ProduceDescription) {
    return res.status(400).json({ error: '농산물 이름과 설명은 필수 입력 항목입니다.' });
  }

  // 데이터베이스에 농산물 정보를 삽입
  const sql = `
    INSERT INTO FarmProduce (UserID, ProduceName, ProduceDescription, Category, Price, HarvestSeason, ProducerName, PhotoURL)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [UserID, ProduceName, ProduceDescription, Category, Price, HarvestSeason, ProducerName, PhotoURL],
    (err, result) => {
      if (err) {
        console.error('DB 저장 실패:', err);
        return res.status(500).json({ error: '데이터 저장 중 오류가 발생했습니다.' });
      }
      const ProduceID = result.insertId;
      console.log(ProduceID);

      console.log('DB 저장 성공');
      return res.status(200).json({ message: '농산물 정보가 성공적으로 저장되었습니다.', ProduceID });
    }
  );
};

module.exports = {
  producerregister,
};
