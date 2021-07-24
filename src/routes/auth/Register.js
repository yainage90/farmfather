import React from "react";
import { Layout, Form, Input, Button, Typography } from "antd";

import "../../fonts/font.css";

const { Title } = Typography;

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

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout style={layoutStyle}>
      <Title level={1} style={titleStyle}>
        회원가입
      </Title>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={formStyle}
        size="large"
      >
        <Form.Item
          name="email"
          label="이메일"
          rules={[
            {
              type: "email",
              message: "이메일 형식이 올바르지 않습니다!",
            },
            {
              required: true,
              message: "이메일을 입력하세요",
            },
          ]}
          hasFeedback
          style={formItemStyle}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="emailConfirm"
          label="이메일 확인"
          rules={[
            {
              type: "email",
              message: "이메일 형식이 올바르지 않습니다!",
            },
            {
              required: true,
              message: "이메일을 입력하세요",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("email") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("이메일이 서로 일치하지 않습니다.")
                );
              },
            }),
          ]}
          hasFeedback
          style={formItemStyle}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요",
            },
            () => ({
              validator(_, value) {
                if (!value || value.length >= 8) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("비밀번호는 8자 이상이어야 합니다.")
                );
              },
            }),
          ]}
          hasFeedback
          style={formItemStyle}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("비밀번호가 서로 일치하지 않습니다.")
                );
              },
            }),
          ]}
          style={formItemStyle}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="닉네임(별명)"
          rules={[
            {
              required: true,
              message: "닉네임(별명)을 입력해주세요",
              whitespace: true,
            },
          ]}
          style={formItemStyle}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={buttonStyle}
            onClick={onFinish}
          >
            가입 완료
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "vertical",
  justifyContent: "flex-start",
  alignItems: "center",
  background: "#fff",
};

const formStyle = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  width: "450px",
  fontFamily: "notosans_bold",
  background: "#fff",
  marginRight: "100px",
};

const formItemStyle = {
  marginTop: "40px",
  marginBottom: "40px",
};

const titleStyle = {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  marginTop: "100px",
  marginBottom: "50px",
  fontFamily: "notosans_thin",
};

const buttonStyle = {
  width: "200px",
  height: "50px",
  position: "relative",
  left: "10%",
  fontFamily: "nanum_gothic_bold",
  marginTop: "20px",
};

export default Register;
