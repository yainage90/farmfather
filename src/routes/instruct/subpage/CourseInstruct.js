import { Table, Tag, Space, Image, Button } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";

import "../../../fonts/font.css";

const CourseInstruct = ({ courses }) => {
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
                alert(`${id} 수정 페이지로 이동`);
              }}
            >
              수정
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                alert(`${id} 삭제 요청`);
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
  width: "100%",
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

export default CourseInstruct;
