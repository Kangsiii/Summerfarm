import { response } from 'express';
import React, { useEffect, useState } from 'react';

function WorkBoardList() {
  const [posts, setsPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  
  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  useEffect(() => {
    fetch('http://localhost:3003/api/workboardlist')
    .then((response) => response.json())
    .then((data) => {
        setPosts(data);
        setFilterdPosts(data);
    })
    .catch((error) => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.',error);
    });
  },[]);
  
  const handlePostClick = (post) => {
    setSelectedPost({ ...post,JobID})
  }



    return (
    <div>WorkBoardList</div>
  )
}

export default WorkBoardList