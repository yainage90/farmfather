import React, { useRef, useEffect } from "react";
import { Form, Input, Button, Space } from "antd";

import "../fonts/font.css";

import logo from "../farmfather_logo.png";

import { CloseOutlined, LockOutlined } from "@ant-design/icons";

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

const LoginPopup = ({ display, closeLoginPopup }) => {
  const [form] = Form.useForm();

  const popupRef = useRef(null);
  const inputRef = useRef(null);

  const onSubmit = (values) => {
    console.log(values);
  };

  const handleClickOutside = ({ target }) => {
    if (display !== "none" && !popupRef.current.contains(target)) {
      closeLoginPopup();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <Space
      className="container"
      style={{
        ...containerStyle,
        display,
      }}
    >
      <div className="popup" style={popupStyle} ref={popupRef}>
        <div className="popupHeader" style={popupHeaderStyle}>
          <CloseOutlined
            style={{
              fontSize: "20px",
              color: "#777777",
            }}
            onClick={closeLoginPopup}
          />
        </div>
        <div className="logoContainer" style={logoContainerStyle}>
          <img src={logo} alt="logo" />
        </div>
        <Form
          {...formItemLayout}
          form={form}
          name="login"
          onFinish={onSubmit}
          style={formStyle}
          size="large"
        >
          <Form.Item name="email" label="이메일" style={formItemStyle}>
            <Input ref={inputRef} style={inputStyle} />
          </Form.Item>
          <Form.Item name="password" label="비밀번호" style={formItemStyle}>
            <Input
              type="password"
              prefix={<LockOutlined />}
              style={inputStyle}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={buttonStyle}
            >
              로그인
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Space>
  );
};

const containerStyle = {
  display: "flex",
  position: "fixed",
  zIndex: 4,
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(3px)",
};

const popupHeaderStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingRight: "20px",
  paddingTop: "20px",
};

const logoContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const popupStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  minHeight: "400px",
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

const inputStyle = {
  height: "50px",
  borderRadius: "10px",
};

const formItemStyle = {};

const buttonStyle = {
  width: "240px",
  height: "50px",
  fontFamily: "nanum_gothic_bold",
  marginTop: "20px",
  borderRadius: "10px",
};

export default LoginPopup;
