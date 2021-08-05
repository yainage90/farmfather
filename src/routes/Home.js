import axios from "axios";
import React, { useState, useEffect } from "react";

import SearchBox from "../components/SearchBox";
import CourseCard from "../components/CourseCard";

import { Layout, Space } from "antd";
import BannerSwiper from "../components/BannerSwiper";
import { Link } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const getCourses = async () => {
      axios({
        url: "/api/course/all",
        method: "get",
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      })
        .then((res) => {
          setCourses(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCourses();
  }, []);

  return (
    <Layout style={layoutStyle}>
      <BannerSwiper />
      <SearchBox
        size="large"
        placeholder="찾고 싶은 강좌를 입력해주세요"
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
