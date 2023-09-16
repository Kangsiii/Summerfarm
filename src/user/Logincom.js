import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { Button, Checkbox, Form, Input } from "antd";
import './css/Login.css';

function Logincom() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const Movesignup = () => {
    navigate("/sign");
  }

  return (
    <div >
      <Form 
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 , marginTop: '25%' }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleLogin}
      >
        <Form.Item
          label="Username"
          name="Username"
          rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
        >
          <Input.Password />
        </Form.Item>

        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
          <Button type="default" htmlType="submit" style={{ marginTop:'px', marginRight:'10px',backgroundColor: 'lightgreen', borderColor: 'lightgreen'}}>
            로그인
          </Button>
          
          
          <Button 
            type="default"
            onClick={Movesignup}
            style={{ marginTop:'5px', backgroundColor: 'lightgreen', borderColor: 'lightgreen' }}
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  ); 
}

export default Logincom;
