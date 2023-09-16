import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

function MyInformation() {
  const [formData, setFormData] = useState({
    Username: '',   
    Password: '',
    Birthdate: '',
    PhoneNumber: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSubmit = () => {
    // 서버로 데이터를 보내는 API 요청
    axios.post('http://localhost:3003/api/updateUserInfo', {
      userID: localStorage.getItem('userID'), // UserID를 함께 보내도록 수정
      ...formData, // 기존의 formData도 함께 보냅니다.
    })
      .then((response) => {
        // 수정이 성공하면 처리
        console.log('정보가 업데이트되었습니다.');
        setIsEditing(false); // 수정 완료 후 폼 숨기기
      })
      .catch((error) => {
        // 에러 처리
        console.error('정보 업데이트에 실패했습니다.', error);
      });
  };
  

  // 페이지가 로드될 때 로컬 스토리지에서 userID를 가져옵니다.
  useEffect(() => {
    const userID = localStorage.getItem('userID');
    console.log({ userID });
    if (userID) {
      // userID를 서버로 보내서 사용자 정보를 가져오는 API 요청
      axios.get(`http://localhost:3003/api/getUserInfo?userID=${userID}`)
        .then((response) => {
          const userData = response.data;
          setFormData({
            Username: userData.Username,
            Password: userData.Password,
            Birthdate: userData.Birthdate,
            PhoneNumber: userData.PhoneNumber,
          });
        })
        .catch((error) => {
          console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
        });
    }
  }, []);
  

  return (
    <div>
      <h2>내 정보 수정</h2>
      {isEditing ? (
        <Form onFinish={handleSubmit}>
          {/* 수정 폼 입력란 */}
          <Form.Item label="이름" name="Username">
            <Input name="Username" value={formData.Username} onChange={handleFormChange} />
          </Form.Item>  
          <Form.Item label="비밀번호" name="Password">
            <Input.Password name="Password" onChange={handleFormChange} />
          </Form.Item>
          <Form.Item label="생년월일" name="Birthdate">
            <Input name="Birthdate" value={formData.Birthdate} onChange={handleFormChange} />
          </Form.Item>
          <Form.Item label="전화번호" name="PhoneNumber">
            <Input name="PhoneNumber" value={formData.PhoneNumber} onChange={handleFormChange} />
          </Form.Item>          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              저장
            </Button>
            <Button type="default" onClick={handleCancelClick}>
              취소
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div>
          {/* 사용자 정보 표시 부분 */}
          <p>이름: {formData.Username}</p>          
          <p>생년월일: {formData.Birthdate}</p>
          <p>전화번호: {formData.PhoneNumber}</p>
          <Button type="primary" onClick={handleEditClick}>
            수정하기
          </Button>
        </div>
      )}
    </div>
  );
}

export default MyInformation;
