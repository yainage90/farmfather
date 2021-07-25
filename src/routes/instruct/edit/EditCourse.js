import React, { useState } from "react";

import { Layout, Form } from "antd";

import CreateStatusBar from "../../../components/instruct/CreateStatusBar";
import CourseInfo from "./CourseInfo";

const EditCourse = ({ course = {} }) => {
  const action = course ? "강의 수정" : "강의 생성";

  const { title, learns } = course;

  const [current, setCurrent] = useState(0);

  return (
    <Layout className="create-container" style={createContainerStyle}>
      <CreateStatusBar action={action} current={current} />
      <CourseInfo title={title} learns={learns} />
    </Layout>
  );
};

const createContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#e0e0e0",
};

export default EditCourse;
