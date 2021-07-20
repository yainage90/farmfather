import React from "react";

import { Space, Card, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "../../fonts/font.css";
import Avatar from "antd/lib/avatar/avatar";

const QuestionCard = ({ qna }) => {
  return (
    <Card
      title={<p style={titleStyle}>{qna.title}</p>}
      style={cardStyle}
      bodyStyle={cardBodyStyle}
      qna={qna}
    >
      <div
        className="cardbody"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              fontFamily: "notosans_light",
              fontSize: "1rem",
            }}
          >
            {qna.question}
          </p>
          <Badge count={5}>
            <div
              style={{
                display: "inline-block",
                width: "4rem",
                height: "4rem",
                borderWidth: "2px",
                borderColor: "#000",
                textAlign: "center",
                lineHeight: "4rem",
                borderRadius: "1rem",
                background: "#f0f0f0",
              }}
            >
              <p
                style={{
                  fontFamily: "notosans_bold",
                  fontSize: "1.2rem",
                  color: "#000",
                }}
              >
                답변
              </p>
            </div>
          </Badge>
        </div>
        <Space>
          <Avatar
            style={{
              backgroundColor: "#87d068",
              marginRight: "10px",
            }}
            icon={<UserOutlined />}
          />
          <p
            style={{
              margin: "0 0",
              fontFamily: "notosans_bold",
              fontSize: "1rem",
            }}
          >
            {qna.writer}
          </p>
        </Space>
      </div>
    </Card>
  );
};

const cardStyle = {
  width: "100%",
  maxWidth: "100%",
  marginBottom: "20px",
  borderRadius: "20px",
};

const titleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "1.2rem",
  margin: "0 0",
};

const cardBodyStyle = {
  background: "#f7f7f7",
  height: "10rem",
  borderRadius: "0 0 20px 20px",
};

export default QuestionCard;
