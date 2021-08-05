import React, { useContext, useState, useEffect } from "react";

import { Layout, Input, Button } from "antd";

import { useParams } from "react-router-dom";
import axios from "axios";

import { Form } from "antd";
import { CourseContext } from "../../../../context/course/CourseContextProvider";

const CourseDetail = () => {
  const { id } = useParams();
  const form = Form.useForm;

  const { course, contextDispatch } = useContext(CourseContext);

  const onFinish = ({ detail }) => {
    const update = async () => {
      await axios({
        url: "/api/course/update",
        method: "put",
        data: {
          id,
          detail,
        },
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      }).then((res) => {
        contextDispatch({
          type: "DETAIL",
          value: res.data.detail,
        });
        alert("저장되었습니다");
        window.location.href = `/instruct/edit/${id}/course_content`;
      });
    };
    update();
  };

  return (
    <Layout
      className="create-content-container"
      style={createContentContainerStyle}
    >
      <p style={titleStyle}>상세소개</p>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{
          width: "80%",
        }}
      >
        <Form.Item
          name="detail"
          style={{
            width: "100%",
          }}
        >
          <Input.TextArea rows={20} defaultValue={course && course.detail} />
        </Form.Item>
        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button type="primary" htmlType="submit" style={submitBtnStyle}>
              저장 후 다음으로
            </Button>
          </div>
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

const titleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  margin: "0 0",
  marginBottom: "30px",
};

const submitBtnStyle = {
  width: "100%",
  maxWidth: "276px",
  marginTop: "50px",
  height: "auto",
  minHeight: "3.4rem",
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  background: "#30d090",
  borderWidth: 0,
};

export default CourseDetail;
