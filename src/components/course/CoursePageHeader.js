import React, { useState, useEffect } from "react";

import {
  PageHeader,
  Statistic,
  Descriptions,
  Image,
  Rate,
  Avatar,
  Tag,
} from "antd";

import { UserOutlined } from "@ant-design/icons";

import "../../fonts/font.css";
import axios from "axios";

const RenderContent = (
  column = 1,
  { title, starAvg, mentorId, price, thumbnail }
) => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const getMentor = async () => {
      await axios({
        url: `/api/user/${mentorId}`,
        method: "get",
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      }).then((res) => {
        console.log(res.data);
        setMentor(res.data);
      });
    };

    getMentor();
  }, [mentorId]);

  return (
    <div className="headerContainer" style={headerContainerStyle}>
      <div style={imageContainerStyle}>
        <Image width="300px" height="300px" src={thumbnail} />
      </div>
      <Descriptions
        size="default"
        column={column}
        style={contentContainerStyle}
      >
        <Descriptions.Item>
          <p style={titleStyle}>{title}</p>
        </Descriptions.Item>
        <Descriptions.Item>
          <Rate disabled allowHalf value={starAvg} />
        </Descriptions.Item>
        <Descriptions.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Avatar
              style={{
                backgroundColor: "#87d068",
                marginRight: "10px",
              }}
              icon={<UserOutlined />}
            />
            <p style={mentorStyle}>{mentor && mentor.nickName}</p>
          </div>
        </Descriptions.Item>
      </Descriptions>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <Tag
          color="success"
          style={{
            fontFamily: "notosans_medium",
            fontSize: "18px",
            padding: "10px",
          }}
        >
          수강 가능
        </Tag>
        <Statistic
          title={
            <p
              style={{
                fontFamily: "notosans_bold",
                color: "#fff",
                margin: "0 0",
              }}
            >
              가격
            </p>
          }
          value={`${new Intl.NumberFormat().format(price)}원`}
          valueStyle={statisticValueStyle}
        />
      </div>
    </div>
  );
};

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

const CoursePageHeader = ({ data }) => {
  return (
    <div className="headerContainer" style={headerContainerStyle}>
      <PageHeader className="site-page-header-responsive" style={headerStyle}>
        <Content extra={null}>{RenderContent(1, data)}</Content>
      </PageHeader>
    </div>
  );
};

const headerContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "#000033",
  paddingLeft: "20px",
};

const imageContainerStyle = {
  marginRight: "80px",
};

const contentContainerStyle = {
  width: "auto",
};

const headerStyle = {};

const titleStyle = {
  margin: "0 0",
  padding: "0 0",
  fontFamily: "notosans_black",
  fontSize: "35px",
  color: "#fff",
};

const mentorStyle = {
  margin: "0 0",
  padding: "0 0",
  fontFamily: "notosans_bold",
  fontSize: "20px",
  color: "#fff",
};

const statisticValueStyle = {
  width: "max-content",
  fontFamily: "notosans_light",
  color: "#fff",
};

export default CoursePageHeader;
