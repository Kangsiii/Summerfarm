import React, { useState } from 'react';

function BuySearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);

  const handleSearch = () => {
    // 검색어 상태를 부모 컴포넌트로 전달
    onSearch(searchTerm);
    setShowBackButton(true); // 검색을 했을 때 뒤로가기 버튼 보이기
  };

  const handleReloadPage = () => {
    window.location.reload(); // 현재 페이지를 새로 고침
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      {showBackButton && (
        <button onClick={handleReloadPage}>뒤로가기</button>
      )}
    </div>
  );
}

export default BuySearchBar;
