import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'; 

const Searchbar = () => {
  const handleSearch = (value) => {
    
    console.log('검색어:', value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        placeholder="검색어를 입력하세요"
        size="large"
        style={{ width: '300px', marginRight: '10px',background:'#eee' }}
      />
      <Button
        type="primary" 
        size="large" 
        icon={<SearchOutlined />} 
        style={{ background: '#eee', color: 'black' }}
        onClick={() => handleSearch('입력한 검색어')} 
      >        
      </Button>
    </div>
  );
}

export default Searchbar;