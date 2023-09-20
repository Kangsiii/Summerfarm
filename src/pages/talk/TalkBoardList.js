// import { response } from 'express';
import { Container } from 'postcss';
import React, { useEffect, useState } from 'react'



function TalkBoardList() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
//   const [filteredPosts, setFilteredPosts] = useState([]); //검색 결과를 저장

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  //데이터 불러옴
  useEffect(() => {
    fetch('http://localhost:3003/api/talkboardlist')
    .then((response) => response.json())
    .then((data) => {
        setPosts(data);
        // setFilteredPosts(data);
    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.',error);
    });
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost({...post,TradeID: post.TradeID}); // TradeID를 설정
  };

  return (
    <div className="talk-board-list-container">
        {!selectedPost && (
            <>
            <h2>게시물 목록</h2>

            <table className="talk-board-table">
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
            </>
        )}

    </div>
  );   
}

export default TalkBoardList;