import React, { useEffect, useState } from 'react';
import BuySearchBar from './BuySearchBar';
import './css/BuyBoardList.css'; // CSS 파일을 import
import BuyPostDetail from './BuyPostDetail';

function BuyBoardList() {
  // 게시물 목록을 저장할 상태
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  // useEffect를 사용하여 컴포넌트가 렌더링될 때 데이터를 불러옴
  useEffect(() => {
    // 백엔드 API에서 게시물 목록을 가져오는 요청을 보냅니다.
    fetch('http://localhost:3003/api/buypostlist')
      .then((response) => response.json())
      .then((data) => {
        // 받아온 데이터를 상태에 저장
        setPosts(data);
      })
      .catch((error) => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
      });
  }, []);

  // 게시글 클릭 시 해당 게시글을 selectedPost에 설정
  const handlePostClick = (post) => {
    // 클릭한 게시글에서 TradeID를 추출하여 selectedPost에 저장
    setSelectedPost({ ...post, TradeID: post.TradeID }); // TradeID를 설정
  };

  return (
    <div className="buy-board-list-container">
      {!selectedPost && (
        <>
          <h2>게시물 목록</h2>
          <table className="buy-board-table">
            <thead>
              <tr>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} onClick={() => handlePostClick(post)}>
                  <td>{post.Title}</td>
                  <td>{post.Username}</td>
                  <td>{formatDate(post.PostingTime)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <BuySearchBar />
        </>
      )}
      {selectedPost && <BuyPostDetail post={selectedPost} />}
    </div>
  );
}

export default BuyBoardList;
