import React from 'react';
// import { Menu } from 'antd';
// import { Link } from 'react-router-dom';
import './css/RightSidebar.css'; // Navbar 스타일 파일
import Button from '@mui/material/Button';
import { MenuItem, MenuList, Paper, Stack } from '@mui/material';

const RightSidebar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Paper className="right-sidebar">
        <MenuList>
          <MenuItem>공지사항</MenuItem>
          <MenuItem>최근 본 게시글</MenuItem>
          <MenuItem>고객센터</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}


export default RightSidebar;
