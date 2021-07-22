import Layout from "antd/lib/layout/layout";
import React from "react";

import { PageHeader, Descriptions, Divider, Card, Button, Space } from "antd";

import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import "../../../fonts/font.css";
import Avatar from "antd/lib/avatar/avatar";

const QuestionDetail = ({ qna, onBackClicked }) => {
  return (
    <Layout style={layoutStyle}>
      <div
        style={{
          display: "inline-flex",
          left: "2%",
          top: "40%",
          position: "fixed",
          zIndex: 2,
        }}
      >
        <Button
          style={{
            borderWidth: "2px",
            borderRadius: "1rem",
            borderColor: "#ddd",
            fontSize: "18px",
            height: "auto",
            width: "auto",
            padding: "10px 20px",
          }}
          onClick={onBackClicked}
        >
          <ArrowLeftOutlined />
          <p
            style={{
              marginLeft: "5px",
              display: "inline-block",
              fontFamily: "notosans_bold",
              margin: "0 0",
            }}
          >
            목록
          </p>
        </Button>
      </div>
      <Layout style={contentLayoutStyle}>
        <Layout className="question" style={questionLayoutSytle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
            }}
          >
            <PageHeader
              className="site-page-header"
              title={
                <p
                  style={{
                    fontFamily: "notosans_bold",
                    fontSize: "30px",
                  }}
                >
                  {qna.title}
                </p>
              }
              style={{
                background: "#fff",
              }}
            >
              <Descriptions
                size="small"
                column={3}
                style={{
                  fontFamily: "notosans_medium",
                }}
              >
                <Descriptions.Item label="작성자">
                  {qna.writer}
                </Descriptions.Item>
                <Descriptions.Item label="작성일">2021-05-01</Descriptions.Item>
              </Descriptions>
            </PageHeader>
            <Divider />
            <p
              style={{
                marginLeft: "1rem",
              }}
            >
              {qna.question}
            </p>
          </div>
        </Layout>
        <Layout className="answer" style={answerLayoutStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
            }}
          >
            <Divider>
              <p
                style={{
                  fontFamily: "notosans_bold",
                  fontSize: "14px",
                  margin: "0 0",
                  color: "#909090",
                }}
              >
                답변
              </p>
            </Divider>
            {qna.answers.map((answer, index) => (
              <ReplyCard answer={answer} />
            ))}
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};

const ReplyCard = ({ answer }) => {
  return (
    <Card
      style={replyCardStyle}
      bodyStyle={{
        background: "#f4f4f4",
        fontFamily: "notosans_regular",
        fontSize: "16px",
      }}
      title={
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
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
              padding: "0 0",
              fontFamily: "notosans_bold",
              fontSize: "18px",
            }}
          >
            {answer.replier}
          </p>
        </div>
      }
    >
      <p>{answer.comment}</p>
    </Card>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  background: "#fff",
};

const contentLayoutStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff",
};

const questionLayoutSytle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff",
};

const answerLayoutStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff",
  marginTop: "50px",
};

const replyCardStyle = {
  width: "100%",
  borderRadius: "1rem",
  margin: "10px 0 10px 0",
};

export default QuestionDetail;
