import React from 'react';
import { Form, Input, Button } from 'antd';

function Signup() {
  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <Form
          name="signup"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 8 }}
        >
          <Form.Item
            label="이름"
            name="name"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="닉네임"
            name="nickname"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="이메일"
            name="email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="비밀번호 확인"
            name="passwordCheck"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
            <Button type="primary" htmlType="submit">
              가입
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
