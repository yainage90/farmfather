import axios from "axios";
import React, { useState, useEffect } from "react";

import SearchBox from "../components/SearchBox";
import CourseCard from "../components/CourseCard";

import { Layout, Space } from "antd";
import BannerSwiper from "../components/BannerSwiper";

const Home = () => {
  const [courses, setCourses] = useState(null);

  const getCourses = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/yaincoding/farmfather-fake-api/master/Course.json"
      )
      .then((res) => {
        const docs = res.data.docs;
        setCourses(docs);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Layout style={layoutStyle}>
      <BannerSwiper />
      <SearchBox />
      <Space style={coursesStyle}>
        {courses &&
          courses.map((course, index) => (
            <CourseCard key={index} data={course} />
          ))}
      </Space>
    </Layout>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "1920px",
  minWidth: "800px",
  background: "#fff",
  overflow: "auto",
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
  width: "90%",
};

export default Home;
