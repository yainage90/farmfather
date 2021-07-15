import React, { useState } from "react";
import { Form, Input, Button, Space } from "antd";

import "../fonts/font.css";

import logo from "../farmfather_logo.png";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const LoginPopup = () => {
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(true);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Space id="container" style={containerStyle}>
      <Space id="popup" style={popupStyle}>
        <div className="logo">
          <img src={logo} />
        </div>
        <Form
          {...formItemLayout}
          form={form}
          name="login"
          onFinish={onFinish}
          style={formStyle}
          size="large"
        >
          <Form.Item name="email" label="이메일" style={formItemStyle}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="비밀번호" style={formItemStyle}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={buttonStyle}
              onClick={onFinish}
            >
              로그인
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Space>
  );
};

const containerStyle = {
  display: "flex",
  position: "fixed",
  zIndex: 2,
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(10px)",
};

const popupStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "500px",
  borderRadius: "20px",
  boxShadow: "5px 5px 20px 5px grey",
  background: "#ffffff",
};

const formStyle = {
  marginTop: "50px",
  width: "400px",
  fontFamily: "nanum_gothic_bold",
  marginRight: "100px",
};

const formItemStyle = {};

const buttonStyle = {
  width: "240px",
  height: "50px",
  fontFamily: "nanum_gothic_bold",
  marginTop: "20px",
};

export default LoginPopup;
