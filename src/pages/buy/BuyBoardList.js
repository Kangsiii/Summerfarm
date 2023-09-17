import React, { useState, useEffect } from 'react';
import BuySearchBar from './BuySearchBar';

function BuyBoardList() {
  // 게시물 목록을 저장할 상태
  const [posts, setPosts] = useState([]);

  // useEffect를 사용하여 컴포넌트가 렌더링될 때 데이터를 불러옴
  useEffect(() => {
    // 여기에 데이터를 불러오는 API 요청을 추가
    // 데이터를 받아온 후 setPosts를 사용하여 상태 업데이트
  }, []);

  return (
    <div>
      <h2>게시물 목록</h2>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BuySearchBar />
    </div>
  );
}

export default BuyBoardList;
