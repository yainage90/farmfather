import axios from "axios";
import React, { useState, useEffect } from "react";

import SearchBox from "../components/SearchBox";
import Course from "../components/Course";
import SideMenu from "../components/SideMenu";

import { AutoComplete, Layout, Space } from "antd";
import BannerSwiper from "../components/BannerSwiper";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/yaincoding/farmfather-fake-api/master/Course.json"
      )
      .then((res) => {
        const docs = res.data.docs;
        setCourses(docs);
      });
  }, [courses]);

  return (
    <div style={layoutStyle}>
      <SideMenu mode="inline" style={sideMenuStyle} />
      <Layout style={contentStyle}>
        <SearchBox style={{}} />
        <Space style={coursesStyle}>
          {courses && courses.map((course) => <Course data={course} />)}
        </Space>
      </Layout>
    </div>
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
};

const sideMenuStyle = {
  width: "256px",
  marginTop: "150px",
  background: "#eeeeee",
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
