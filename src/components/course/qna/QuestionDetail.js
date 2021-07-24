import React from "react";

import { PageHeader, Descriptions, Divider, Card, Button } from "antd";

import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import "../../../fonts/font.css";
import Avatar from "antd/lib/avatar/avatar";

const QuestionDetail = ({ qna, onBackClicked }) => {
  return (
    <div style={layoutStyle}>
      <div
        style={{
          display: "inline-flex",
          zIndex: 2,
          position: "fixed",
          top: "40%",
          left: "5%",
        }}
      >
        <Button
          style={{
            borderWidth: "2px",
            borderRadius: "1rem",
            borderColor: "#d0d0d0",
            fontSize: "1.4rem",
            height: "auto",
            width: "auto",
            padding: "0.6rem 1.2rem",
            background: "#f8f8f8",
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
      <div style={contentLayoutStyle}>
        <div className="question" style={questionLayoutSytle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
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
        </div>
        <div className="answer" style={answerLayoutStyle}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
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
        </div>
      </div>
    </div>
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff",
  marginTop: "50px",
  width: "100%",
};

const replyCardStyle = {
  borderRadius: "1rem",
  margin: "10px 0 10px 0",
};

export default QuestionDetail;
