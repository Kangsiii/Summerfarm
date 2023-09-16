import React, { useState, useEffect } from 'react';
import Logincom from './Logincom';
import Loginsuccess from './Loginsuccess';

function LoginBox() {
  // 로컬 스토리지에서 userType 값을 가져옴
  const [userType, setUserType] = useState(localStorage.getItem('userType'));

  // userType 값이 변경될 때마다 컴포넌트를 다시 렌더링
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType !== userType) {
      setUserType(storedUserType);
    }
  }, [userType]);

  return (
    <div>
      {userType ? (
        <Loginsuccess />
      ) : (
        <Logincom />
      )}
    </div>
  );
}

export default LoginBox;
