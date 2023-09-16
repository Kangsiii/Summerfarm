import { useState } from 'react';
import Applyjob from './applyjob'; 
import Resumessetting from './resumessetting'; 
import Farmsetting from './farmsetting'; 
import Myactivity from './myactivity'; 
import Myinformation from './myinformation';


function MypageNav() {
  const [activeComponent, setActiveComponent] = useState(null);

  const userType = localStorage.getItem('userType');
  const navigateTo = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => navigateTo('myinformation')}>내 정보</a>
          </li>
          {userType === 'JobSeeker' && (
            <>
              <li>
                <a href="#" onClick={() => navigateTo('applyjob')}>지원한 일자리</a>
              </li>
              <li>
                <a href="#" onClick={() => navigateTo('resumessetting')}>이력서 관리</a>
              </li>
            </>
          )}
          {userType === 'Farmer' && (
            <>
              <li>
                <a href="#" onClick={() => navigateTo('farmsetting')}>농장 지원내역</a>
              </li>
            </>
          )}
          <li>
            <a href="#" onClick={() => navigateTo('myactivity')}>내 활동 관리</a>
          </li>
        </ul>
      </nav>
      <div>
        {activeComponent === 'applyjob' && <Applyjob />}
        {activeComponent === 'resumessetting' && <Resumessetting />}
        {activeComponent === 'farmsetting' && <Farmsetting />}
        {activeComponent === 'myactivity' && <Myactivity />}
        {activeComponent === 'myinformation' && <Myinformation />}
      </div>
    </div>
  );
}
export default MypageNav
