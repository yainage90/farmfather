import React, { useState, useEffect } from "react";

import { Table, Tag, Space, Image, Button } from "antd";
import Layout from "antd/lib/layout/layout";
import axios from "axios";

import "../../../fonts/font.css";

const MyCourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      await axios({
        url: "/api/course/my",
        method: "get",
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      })
        .then((res) => {
          console.log(res.data);
          setCourses(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCourses();
  }, []);

  const columns = [
    {
      title: <p style={tableColumnsTitleStyle}>썸네일</p>,
      dataIndex: "thumbnail",
      render: (src) => <Image width="5rem" height="5rem" src={src} />,
    },
    {
      title: <p style={tableColumnsTitleStyle}>강의명</p>,
      dataIndex: "title",
      render: (text) => <p style={tableDataFontStyle}>{text}</p>,
    },
    {
      title: <p style={tableColumnsTitleStyle}>평점</p>,
      dataIndex: "starAvg",
      render: (starAvg) => <p style={tableDataFontStyle}>{starAvg}</p>,
    },
    {
      title: <p style={tableColumnsTitleStyle}>상태</p>,
      dataIndex: "status",
      render: (status) => {
        const msg = status === "ready" ? "수강 가능" : "준비중";
        const color = status === "ready" ? "green" : "red";

        return <Tag color={color}>{msg}</Tag>;
      },
    },
    {
      title: <p style={tableColumnsTitleStyle}>관리</p>,
      dataIndex: "target",
      render: (id) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                window.location.href = `/instruct/edit/${id}/course_info`;
              }}
            >
              수정
            </Button>
            <Button
              type="primary"
              danger
              onClick={async () => {
                axios({
                  url: `/api/course/${id}`,
                  method: "delete",
                  headers: {
                    jwt: window.sessionStorage.getItem("jwt"),
                  },
                })
                  .then((res) => {
                    alert("삭제되었습니다");
                    window.location.reload();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              삭제
            </Button>
          </Space>
        );
      },
    },
  ];

  const data = courses.map((course, index) => ({
    key: index,
    thumbnail: course.thumbnail,
    title: course.title,
    starAvg: course.starAvg,
    status: course.status,
    target: course.id,
  }));

  return (
    <Layout class="content-container" style={contentContainerStyle}>
      <Table
        columns={columns}
        pagination={{ position: "bottomCenter" }}
        dataSource={data}
        style={{
          fontFamily: "notosans_medium",
        }}
        size="small"
      />
    </Layout>
  );
};

const contentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "70%",
  alignItems: "center",
  paddingTop: "5%",
};

const tableColumnsTitleStyle = {
  margin: "0 0",
  fontFamily: "notosans_bold",
  fontSize: "1.1rem",
};

const tableDataFontStyle = {
  margin: "0 0",
  fontFamily: "notosans_medium",
  fontSize: "1.1rem",
};

export default MyCourseList;
