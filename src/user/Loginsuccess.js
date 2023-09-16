import React from "react";
import { useNavigate } from "react-router-dom";

function Loginsuccess() {
  const navigate = useNavigate();

  // 로그아웃 기능: 로컬 스토리지에서 userType와 username 삭제
  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("username");
    // 로그아웃 후 다른 작업 수행 또는 페이지 리디렉션 등을 할 수 있음
    window.location.reload();
  };

  // 로컬 스토리지에서 username 값을 가져옴
  const username = localStorage.getItem("username");

  // 마이페이지로 이동하는 함수
  const goToMypage = () => {
    navigate("/mypage");
  };

  return (
    <div>
      <h2>{username}님 환영합니다</h2>
      <button onClick={handleLogout}>로그아웃</button>
      <button onClick={goToMypage}>마이페이지로 가기</button>
    </div>
  );
}

export default Loginsuccess;