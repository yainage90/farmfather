import React from "react";

import { Layout, Form, Button, Input } from "antd";
import { v4 } from "uuid";

const CreateCourse = () => {
  const [form] = Form.useForm();

  const onSubmit = ({ title }) => {
    const id = v4();
    alert(`id: ${id}, title: ${title}`);
    window.location.href = `/instruct/edit/${id}/course_info`;
  };

  return (
    <Layout
      className="create-content-container"
      style={createContentContainerStyle}
    >
      <Form form={form} layout="vertical" style={formStyle} onFinish={onSubmit}>
        <Form.Item
          name="title"
          label={<p style={formItemStyle}>수업 제목</p>}
          required
        >
          <Input size="large" style={inputStyle} />
        </Form.Item>
        <br />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={submitBtnStyle}
          >
            저장 후 다음으로 이동
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

const createContentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1080px",
  alignItems: "flex-start",
  background: "#fff",
  margin: "1rem 0 1rem 0",
  padding: "2rem 2rem 2rem 2rem",
};

const formStyle = {
  width: "100%",
};

const formItemStyle = {
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  margin: "0 0",
};

const inputStyle = {
  fontFamily: "notosans_medium",
  fontSize: "1.1rem",
  width: "100%",
  maxWidth: "576px",
  background: "#f0f0f0",
};

const submitBtnStyle = {
  width: "100%",
  maxWidth: "576px",
  marginTop: "50px",
  height: "auto",
  minHeight: "3.4rem",
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  background: "#30d090",
  borderWidth: 0,
};

export default CreateCourse;
