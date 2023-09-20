const db = require('../db.js');

exports.workpostlist = (req, res) => {
  // 데이터베이스에서 직거래 게시물 목록을 조회하는 쿼리
  const sql = 'SELECT JobID, Title, AuthorID, PostingTime FROM jobs';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('게시물 목록 조회 실패:', err);
      return res.status(500).json({ error: '게시물 목록 조회 중 오류가 발생했습니다.' });
    }

    // 게시물 목록 조회 결과를 클라이언트로 응답
    const posts = results;

    // 이제 각 게시물의 작성자 Username 값을 조회하는 쿼리
    const authorIDList = posts.map((post) => post.AuthorID).join(',');

    const sql2 = `SELECT UserID, Username FROM users WHERE UserID IN (${authorIDList})`;

    db.query(sql2, (err, userResults) => {
      if (err) {
        console.error('게시물 작성자 조회 실패:', err);
        return res.status(500).json({ error: '게시물 작성자 조회 중 오류가 발생했습니다.' });
      }

      // 게시물 목록에 작성자 Username 추가
      const postsWithUsername = posts.map((post) => {
        const authorUser = userResults.find((user) => user.UserID === post.AuthorID);
        return {
          ...post,
          Username: authorUser ? authorUser.Username : 'Unknown',
        };
      });

      // 최종 결과를 클라이언트로 응답
      return res.status(200).json(postsWithUsername.map((post) => ({ ...post, JobID: post.JobID })));
    });
  });
};
