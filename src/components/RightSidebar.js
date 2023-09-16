import React from 'react';
// import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './css/RightSidebar.css'; // Navbar 스타일 파일

const RightSidebar = () => {
  return (
    <div className="right-sidebar">      
      <Link to={"/Announcement"}>
        <button>공지사항</button>
      </Link>
      
      <button>최근 본 게시물</button>
    </div>
  );
}

export default RightSidebar;
