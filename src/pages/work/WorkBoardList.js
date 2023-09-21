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
  })
  
    return (
    <div>WorkBoardList</div>
  )
}

export default WorkBoardList