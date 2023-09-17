import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";

// 모달 내부에서 주소 검색을 담당하는 컴포넌트11
const AddressSearchModal = ({ onComplete }) => {
  const handleComplete = (data) => {
    onComplete(data.address); // 선택한 주소를 완료 콜백으로 전달
  };

  return <DaumPostcode onComplete={handleComplete} />;
};

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UserType: "",
    Username: "",
    Password: "",
    Birthdate: "",
    PhoneNumber: "",
    Experience: "",
    DesiredLocation1: "",
    DesiredLocation2: "",
    DesiredLocation3: "",
    DesiredCrops1: "",
    DesiredCrops2: "",
    DesiredCrops3: "",
    DesiredSalary: "",
    FarmLocation: "",
    CultivatedCrops: "",
  });

  const [selectedUserType, setSelectedUserType] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
    setFormData({ ...formData, UserType: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버로 회원가입 데이터 전송
      const response = await axios.post(
        "http://localhost:3003/api/register",
        formData
      ); // 서버 URL을 올바르게 설정하세요.
      console.log(response.data); // 서버 응답 처리

      // 회원가입 성공 후 리다이렉션 또는 다른 작업 수행
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error); // 오류 처리
    }
  };

  //주소찾기 api
  const [isDaumPostOpen, setIsDaumPostOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(""); // 선택한 주소 상태 추가

  const handleSearchClick = () => {
    setIsDaumPostOpen(true);
  };

  const handleAddressComplete = (address) => {
    setSelectedAddress(address); // 선택한 주소를 상태로 업데이트
    setIsDaumPostOpen(false); // 모달 닫기
    setFormData({ ...formData, FarmLocation: address }); // 폼 데이터 업데이트
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <Form
          name="signup"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 8 }}
          onSubmit={handleSubmit}
        >
          <Form.Item label="직업 유형">
            <Radio.Group onChange={handleUserTypeChange}>
              <Radio.Button value="Farmer">농장주</Radio.Button>
              <Radio.Button value="JobSeeker">구직자</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="이름" name="Username">
            <Input name="Username" onChange={handleFormChange} />
          </Form.Item>          

          <Form.Item
            label="이메일"
            name="Email" //"Email" 로 변경
          >
            <Input name="Email" onChange={handleFormChange} />
          </Form.Item>

          <Form.Item label="비밀번호" name="Password">
            <Input.Password name="Password" onChange={handleFormChange} />
          </Form.Item>
          <Form.Item label="생년월일" name="Birthdate">
            <Input name="Birthdate" onChange={handleFormChange} />
          </Form.Item>
          <Form.Item label="전화번호" name="PhoneNumber">
            <Input name="PhoneNumber" onChange={handleFormChange} />
          </Form.Item>

          {selectedUserType === "Farmer" && (
            <>
              <Form.Item label="농장 위치" name="FarmLocation">
                <Input
                  value={selectedAddress} // 선택한 주소 표시
                  placeholder="농장 위치를 입력하세요"
                  readOnly
                  name="FarmLocation"
                  onChange={handleFormChange}
                />
                <Button type="primary" onClick={handleSearchClick}>
                  검색
                </Button>
              </Form.Item>
              {isDaumPostOpen && (
                <Modal isOpen={isDaumPostOpen}>
                  <AddressSearchModal onComplete={handleAddressComplete} />
                </Modal>
              )}

              <Form.Item label="재배 작물" name="CultivatedCrops">
                <Input name="CultivatedCrops" onChange={handleFormChange} />
              </Form.Item>
            </>
          )}

          {selectedUserType === "JobSeeker" && (
            <>
              <Form.Item label="직업 경력" name="Experience">
                <Input name="Experience" onChange={handleFormChange} />
              </Form.Item>
              <Form.Item label="희망 지역1" name="DesiredLocation1">
                <Input name="DesiredLocation1" onChange={handleFormChange} />
              </Form.Item>
              <Form.Item label="희망 지역2" name="DesiredLocation2">
                <Input name="DesiredLocation2" onChange={handleFormChange} />
              </Form.Item>
              <Form.Item label="희망 지역3" name="DesiredLocation3">
                <Input name="DesiredLocation3" onChange={handleFormChange} />
              </Form.Item>
              <Form.Item label="희망 작물1" name="DesiredCrops1">
                <Input name="DesiredCrops1" onChange={handleFormChange} />
              </Form.Item>
              <Form.Item label="희망 작물2" name="DesiredCrops2">
                <Input name="DesiredCrops2" onChange={handleFormChange} />
              </Form.Item>
              <Form.Item label="희망 작물3" name="DesiredCrops3">
                <Input name="DesiredCrops3" onChange={handleFormChange} />
              </Form.Item>
              <Form.Item label="희망 급여" name="DesiredSalary">
                <Input name="DesiredSalary" onChange={handleFormChange} />
              </Form.Item>
            </>
          )}

          <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              가입
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
