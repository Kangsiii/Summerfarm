import React, { useState, useEffect } from 'react';
import BuyBoardList from './buy/BuyBoardList';
import ProduceForm from './buy/ProduceForm';
import BuyPostDetail from './buy/BuyPostDetail'; // BuyPostDetail 컴포넌트를 임포트

function BuyFarm() {
  // 현재 화면 상태를 관리하는 상태 변수
  const [currentScreen, setCurrentScreen] = useState('board');

  // 화면 전환 함수
  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };
  useEffect(() => {
    // 로컬 스토리지에서 userID 가져오기
    const userID = localStorage.getItem('userID');

    // 만약 userID가 없다면 페이지 리디렉트 및 알림 메시지 표시
    if (!userID) {
      window.alert('로그인한 사용자만 볼 수 있습니다.');
      window.location.href = '/'; // 홈 화면으로 리디렉트
    }
  }, []);

  return (
    <div>
      <h1>직거래Farm</h1>
      {/* 현재 화면 상태에 따라 컴포넌트 렌더링 */}
      {currentScreen === 'board' ? <BuyBoardList /> : null}
      {currentScreen === 'form' ? <ProduceForm /> : null}
      {currentScreen === 'detail' ? <BuyPostDetail /> : null} 
      {/* 글쓰기 버튼 - 현재 화면이 글 목록일 때만 렌더링 */}
      {currentScreen === 'board' && (
        <button onClick={() => handleScreenChange('form')}>글쓰기</button>
      )}      
    </div>
  );
}

export default BuyFarm;
