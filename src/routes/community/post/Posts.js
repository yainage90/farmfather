import React, { useState, useEffect } from "react";

import { Button, Input, Layout, Table, Form } from "antd";
import axios from "axios";

import { Select } from "antd";

import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

const Posts = ({ category }) => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);

  const [form] = Form.useForm();

  const onSearch = async (value) => {
    const { field, query } = value;

    if (!query.trim()) {
      alert("검색어를 입력하세요");
      return;
    }

    const page = 0;
    await axios({
      url: `/api/post/search?category=${category}&field=${field}&query=${query}&page=${page}`,
      method: "get",
      headers: {
        jwt: window.sessionStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getPosts = async () => {
      await axios({
        url: `/api/post/all?category=${category}&page=${page}`,
        method: "get",
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      })
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPosts();
  }, [category]);

  const columns = [
    {
      title: <p style={tableColumnsTitleStyle}>제목</p>,
      dataIndex: "title",
      render: (text) => <p style={tableDataFontStyle}>{text}</p>,
    },
    {
      title: <p style={tableColumnsTitleStyle}>작성자</p>,
      dataIndex: "writer",
      render: (text) => <p style={tableDataFontStyle}>{text}</p>,
    },
    {
      title: <p style={tableColumnsTitleStyle}>작성일</p>,
      dataIndex: "created",
      render: (text) => <p style={tableDataFontStyle}>{text}</p>,
    },
    {
      title: <p style={tableColumnsTitleStyle}>수정일</p>,
      dataIndex: "updated",
      render: (text) => <p style={tableDataFontStyle}>{text}</p>,
    },
  ];

  const data = posts.map((post) => ({
    key: post.id,
    title: post.title,
    writer: post.writerNickName,
    created: post.created,
    updated: post.updated,
  }));

  return (
    <Layout className="content-container" style={contentContainerStyle}>
      <div class="widget-container" style={widgetContainerStyle}>
        <Form form={form} onFinish={onSearch} style={searchContainerStyle}>
          <Form.Item name="field" initialValue="title" style={selectStyle}>
            <Select defaultValue="title" size="large">
              <Option value="title">제목</Option>
              <Option value="content">내용</Option>
              <Option value="writerNickName">작성자</Option>
            </Select>
          </Form.Item>
          <Form.Item name="query" style={searchBoxStyle}>
            <Input.Search
              size="large"
              placeholder="검색어를 입력하세요"
              enterButton={
                <Button type="primary" htmlType="submit">
                  검색
                </Button>
              }
              style={{
                maxWidth: "600px",
              }}
            />
          </Form.Item>
        </Form>
        <Link to="/community/edit">
          <Button
            type="primary"
            size="large"
            style={buttonStyle}
            icon={<EditOutlined />}
          >
            글쓰기
          </Button>
        </Link>
      </div>

      <Table
        rowKey={(record) => record.id}
        columns={columns}
        pagination={{ position: "bottomCenter" }}
        dataSource={data}
        style={{
          fontFamily: "notosans_medium",
          width: "80%",
        }}
        size="small"
        tableLayout="fixed"
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              window.location = `${window.location.pathname}/${record.key}`;
            },
          };
        }}
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

const widgetContainerStyle = {
  display: "flex",
  justifyContent: "space-bewteen",
  width: "80%",
  marginBottom: "2rem",
};

const searchContainerStyle = {
  display: "flex",
  width: "100%",
};

const selectStyle = {
  width: "8rem",
  margin: "0 20px 0 0",
  fontFamily: "notosans_medium",
};

const searchBoxStyle = {
  width: "50%",
  margin: "0 20px 0 0",
  fontFamily: "notosans_medium",
};

const buttonStyle = {
  background: "#808080",
  borderColor: "#808080",
  fontFamily: "notosans_bold",
  fontSize: "15px",
};

const tableColumnsTitleStyle = {
  margin: "0 0",
  fontFamily: "notosans_bold",
  fontSize: "1.1rem",
  color: "#808080",
};

const tableDataFontStyle = {
  margin: "0 0",
  fontFamily: "notosans_regular",
  fontSize: "1rem",
  color: "#000000",
};

export default Posts;
