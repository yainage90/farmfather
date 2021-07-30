import React, { useRef, useEffect } from "react";
import { Form, Input, Button } from "antd";

import "../../../fonts/font.css";

import { CloseOutlined } from "@ant-design/icons";
import { v4 } from "uuid";

const ChapterCreatePopup = ({
  createChapter,
  closeChaterCreatePopup,
  chapter = {},
}) => {
  const [form] = Form.useForm();

  const popupRef = useRef(null);
  const inputRef = useRef(null);

  const onSubmit = (values) => {
    const { title } = values;
    const id = chapter.id || v4();
    createChapter({ id, title });
    closeChaterCreatePopup();
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
    <div
      className="container"
      style={{
        ...containerStyle,
      }}
    >
      <div className="popup" style={popupStyle} ref={popupRef}>
        <div className="popupHeader" style={popupHeaderStyle}>
          <CloseOutlined
            style={{
              fontSize: "20px",
              color: "#777777",
            }}
            onClick={closeChaterCreatePopup}
          />
        </div>
        <Form
          form={form}
          name="chapter"
          onFinish={onSubmit}
          style={formStyle}
          size="large"
        >
          <Form.Item
            name="title"
            label={
              <p
                style={{
                  margin: "0 0",
                  padding: "0 0",
                  fontFamily: "notosans_medium",
                  fontSize: "18px",
                }}
              >
                챕터 제목
              </p>
            }
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <Input
              ref={inputRef}
              style={inputStyle}
              defaultValue={chapter.title}
            />
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
                  closeChaterCreatePopup();
                  form.resetFields();
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
  alignItems: "center",
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

const inputStyle = {
  height: "50px",
  borderRadius: "10px",
  background: "#f7f7f7",
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

export default ChapterCreatePopup;
