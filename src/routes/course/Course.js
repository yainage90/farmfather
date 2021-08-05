import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CourseTab from "../../components/course/CourseTab";
import CoursePageHeader from "../../components/course/CoursePageHeader";

import { Layout } from "antd";

const Course = () => {
  const [course, setCourse] = useState(Object.create({}));

  const { id } = useParams();

  useEffect(() => {
    const getCourseInfo = async () => {
      await axios.get(`/api/course/${id}`).then((res) => {
        console.log(res.data);
        setCourse(res.data);
      });
    };
    getCourseInfo();
  }, []);

  return (
    <Layout className="container" style={containerStyle}>
      <CoursePageHeader data={course} />
      <CourseTab data={course} />
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
