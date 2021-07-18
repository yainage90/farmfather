import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CourseContent from "../components/course/CourseContent";
import CoursePageHeader from "../components/course/CoursePageHeader";

import { Layout } from "antd";

const Course = () => {
  const [course, setCourse] = useState(Object.create({}));

  const { courseId } = useParams();
  const getCourseInfo = async () => {
    await axios.get(`/api/course/${courseId}`).then((res) => {
      setCourse(res.data);
    });
  };
  useEffect(() => {
    getCourseInfo();
  }, []);

  return (
    <Layout className="container" style={containerStyle}>
      <CoursePageHeader data={course} />
      <CourseContent data={course} />
    </Layout>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  width: "100%",
  height: "100%",
};

export default Course;
