import React, {useEffect} from 'react'

function WorkFarm() {
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
    <div>WorkFarm</div>
  )
}

export default WorkFarm