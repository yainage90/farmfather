import axios from "axios";
import React, { useState, useEffect } from "react";

import SearchBox from "../components/SearchBox";
import CourseCard from "../components/CourseCard";
import SideMenu from "../components/SideMenu";

import { Layout, Space } from "antd";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  const getCourses = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/yaincoding/farmfather-fake-api/master/Course.json"
      )
      .then((res) => {
        const docs = res.data.docs;
        setCourses(docs);
        console.log(docs);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Layout className="container" style={layoutStyle}>
      <SideMenu className="sideMenu" mode="inline" style={sideMenuStyle} />
      <Layout style={contentStyle}>
        <SearchBox style={{}} />
        <Space style={coursesStyle}>
          {courses &&
            courses.map((course, index) => (
              <Link key={index} to={`/course/${course.id}`}>
                <CourseCard key={index} data={course} />
              </Link>
            ))}
        </Space>
      </Layout>
    </Layout>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minWidth: "800px",
  maxWidth: "1920px",
  height: "100%",
  minHeight: "600px",
  overflow: "auto",
  background: "#fff",
};

const sideMenuStyle = {
  width: "256px",
  height: "500px",
  marginTop: "150px",
  background: "#fff",
  borderWidth: "0",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  maxWidth: "1920px",
  minWidth: "800px",
  width: "100%",
  background: "white",
  padding: "50px",
};

const coursesStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "flex-start",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flex: 1,
  overflow: "auto",
};

export default Courses;
