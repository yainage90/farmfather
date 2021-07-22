import axios from "axios";
import React, { useState, useEffect } from "react";

import SearchBox from "../../components/SearchBox";
import CourseCard from "../../components/CourseCard";
import SideMenu from "../../components/SideMenu";

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
        <SearchBox
          size="large"
          placeholder="찾고 싶은 강좌를 입력해주세요"
          style={{
            width: "50%",
            maxWidth: "600px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          onSearch={(keyword) => {
            alert(keyword);
          }}
        />
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
  width: "70%",
  maxWidth: "100%",
  minWidth: "300px",
  height: "100%",
  minHeight: "600px",
  overflow: "auto",
  background: "#fff",
};

const sideMenuStyle = {
  display: "flex",
  width: "256px",
  background: "#fff",
  borderWidth: "0",
  flexDirection: "column",
  boxShadow: "3px 3px 10px 3px grey",
  height: "auto",
  borderRadius: "10px",
  fontFamily: "notosans_regular",
  position: "fixed",
  left: "2%",
  marginTop: "50px",
  zIndex: 1,
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
