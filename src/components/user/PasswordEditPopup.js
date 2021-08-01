import React, { useRef, useEffect, useContext } from "react";
import { Form, Input, Button } from "antd";

import "../../fonts/font.css";

import { CloseOutlined } from "@ant-design/icons";

const PasswordEditPopup = ({ close }) => {
  const [form] = Form.useForm();

  const popupRef = useRef(null);
  const inputRef = useRef(null);

  const onSubmit = (values) => {
    const { currentPassword, newPassword1, newPassword2 } = values;
    //...
    close();
  };

  const handleClickOutside = ({ target }) => {
    if (popupRef.current && !popupRef.current.contains(target)) {
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
    <div className="container" style={containerStyle}>
      <div className="popup" style={popupStyle} ref={popupRef}>
        <div className="popupHeader" style={popupHeaderStyle}>
          <CloseOutlined
            style={{
              fontSize: "20px",
              color: "#777777",
            }}
            onClick={close}
          />
        </div>
        <Form
          form={form}
          name="nickName"
          onFinish={onSubmit}
          style={formStyle}
          size="large"
        >
          <Form.Item
            name="currentPassword"
            label={<p style={labelStyle}>현재 비밀번호</p>}
            style={formItemStyle}
          >
            <Input ref={inputRef} style={inputStyle} />
          </Form.Item>
          <Form.Item
            name="newPassword1"
            label={<p style={labelStyle}>새로운 비밀번호</p>}
            style={formItemStyle}
            rules={[
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
          >
            <Input ref={inputRef} style={inputStyle} />
          </Form.Item>
          <Form.Item
            name="newPassword2"
            label={<p style={labelStyle}>새로운 비밀번호 확인</p>}
            style={formItemStyle}
            dependencies={["newPassword1"]}
            hasFeedback
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword1") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("비밀번호가 서로 일치하지 않습니다.")
                  );
                },
              }),
            ]}
          >
            <Input ref={inputRef} style={inputStyle} />
          </Form.Item>

          <div
            style={{
              display: "flex",
            }}
          >
            <Form.Item>
              <Button
                type="ghost"
                size="large"
                style={buttonStyle}
                onClick={() => {
                  close();
                }}
              >
                취소
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={buttonStyle}
              >
                확인
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  width: "70%",
  height: "70%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "fixed",
  zIndex: 4,
};

const popupStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  borderRadius: "20px",
  boxShadow: "5px 5px 20px 5px grey",
  background: "#fff",
  width: "100%",
  maxWidth: "768px",
};

const popupHeaderStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "flex-end",
  paddingRight: "20px",
  paddingTop: "20px",
  marginBottom: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  fontFamily: "notosans_bold",
  width: "100%",
  padding: "0 20px 0 20px",
};

const formItemStyle = {
  display: "flex",
  width: "100%",
};

const inputStyle = {
  height: "50px",
  borderRadius: "10px",
  background: "#f7f7f7",
  maxWidth: "450px",
};

const buttonStyle = {
  display: "inline-block",
  width: "10rem",
  height: "3.4rem",
  fontFamily: "notosans_bold",
  fontSize: "18px",
  borderRadius: "10px",
  margin: "0 0 0 20px",
};

const labelStyle = {
  margin: "0 0",
  padding: "0 0",
  fontFamily: "notosans_medium",
  fontSize: "18px",
  minWidth: "160px",
};

export default PasswordEditPopup;
