import React, { useState } from 'react';
import BuyBoardList from './buy/BuyBoardList';
import ProduceForm from './buy/ProduceForm';

function BuyFarm() {
  // 현재 화면 상태를 관리하는 상태 변수
  const [currentScreen, setCurrentScreen] = useState('board');

  // 화면 전환 함수
  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div>
      <h1>직거래Farm</h1>
      {/* 현재 화면 상태에 따라 컴포넌트 렌더링 */}
      {currentScreen === 'board' ? <BuyBoardList /> : null}
      {currentScreen === 'form' ? <ProduceForm /> : null}
      {/* 글쓰기 버튼 - 현재 화면이 글 목록일 때만 렌더링 */}
      {currentScreen === 'board' && (
        <button onClick={() => handleScreenChange('form')}>글쓰기</button>
      )}
    </div>
  );
}

export default BuyFarm;