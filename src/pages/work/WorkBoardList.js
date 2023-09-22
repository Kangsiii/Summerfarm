import React, { useEffect, useState } from 'react';

function WorkBoardList() {
  const [posts, setsPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  useEffect(() => {
    fetch('http://localhost:3003/api/workpostlist')
    .then((response) => response.json())
    .then((data) => {
        setsPosts(data);
        setFilteredPosts(data);
    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.',error);
    });
  },[]);
  
  const handlePostClick = (post) => {
    setSelectedPost({ ...post,JobID: post.JobID});
  };

  // const handleSearch = (SearchWork) => {
  //   const filtered = posts.filter((posts) =>
  //   post.title.toLowerCase().includes(SearchWork.toLowerCase()));
  //   setFilteredPosts(filtered); 
  // };

  
    return (
    <div className="">
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
              {filteredPosts.map((post) => (
                <tr key={post.id} onClick={() => handlePostClick(post)}>
                  <td>{post.Title}</td>
                  <td>{post.Username}</td>
                  <td>{formatDate(post.PostingTime)}</td>
                </tr>
              ))}
            </tbody>
          </table>

    </div>
  )
}

export default WorkBoardList;