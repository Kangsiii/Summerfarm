const db = require('../db.js');

exports.buypostDetail = (req, res) => {
  const TradeID  = req.params.TradeID; 
  

  // 게시글 상세 정보를 가져오는 쿼리
  const sql = `
    SELECT
      directtrade.TradeID,
      directtrade.Title,
      directtrade.AuthorID,
      directtrade.PostingTime,
      directtrade.ProduceID,
      farmproduce.ProduceName,
      farmproduce.ProduceDescription,
      farmproduce.Category,
      farmproduce.Price,
      farmproduce.HarvestSeason,
      farmproduce.ProducerName,
      farmproduce.PhotoURL,
      directtrade.ProduceInfo
    FROM
      directtrade
    JOIN
      farmproduce
    ON
      directtrade.ProduceID = farmproduce.ProduceID
    WHERE
      directtrade.TradeID = ?
  `;

  db.query(sql, [TradeID], (err, result) => {
    if (err) {
      console.error('데이터 조회 실패:', err);
      return res.status(500).json({ error: '데이터 조회 중 오류가 발생했습니다.' });
    }

    // 조회 결과를 클라이언트로 응답
    if (result.length === 0) {
      return res.status(404).json({ error: '해당 게시글을 찾을 수 없습니다.' });
    }

    const postDetail = result[0]; // 첫 번째 행의 데이터를 사용

    return res.status(200).json(postDetail);
  });
};
