import React from "react";

import { Layout, Form, Button, Input } from "antd";

import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import EditStatusBar from "../../../components/instruct/edit/EditStatusBar";

const CreateCourse = () => {
  const [form] = Form.useForm();

  const onSubmit = async ({ title }) => {
    await axios({
      url: "/api/course/save",
      method: "post",
      data: {
        title,
      },
      headers: {
        jwt: window.sessionStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res.data);
        const { id } = res.data;
        window.location.href = `/instruct/edit/${id}/course_info`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout
      className="create-content-container"
      style={createContentContainerStyle}
    >
      <EditStatusBar action="강의생성" status={-1} />
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
            icon={<EditOutlined />}
          >
            생성하기
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
  alignItems: "center",
  background: "#fff",
  margin: "0 0 1rem 0",
};

const formStyle = {
  maxWidth: "684px",
  width: "100%",
};

const formItemStyle = {
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  margin: "2rem 0",
};

const inputStyle = {
  fontFamily: "notosans_medium",
  fontSize: "1.1rem",
  width: "100%",
  minHeight: "3.4rem",
  background: "#f0f0f0",
};

const submitBtnStyle = {
  width: "100%",
  marginTop: "50px",
  height: "auto",
  minHeight: "3.4rem",
  fontFamily: "notosans_bold",
  fontSize: "auto",
  background: "#30d090",
  borderWidth: 0,
};

export default CreateCourse;
