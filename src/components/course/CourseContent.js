import { Layout, Tabs, Space, List, Menu, Empty, Button, Anchor } from "antd";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import "../../fonts/font.css";
import CourseWidget from "./CourseWidget";
import SearchBox from "../SearchBox";
import QuestionCard from "./QuestionCard";
import Contents from "./Contents";

import TextEditor from "../TextEditor";

const { SubMenu } = Menu;

const { TabPane } = Tabs;

const CourseContent = ({ data }) => {
  const { detail, price, learns, contents, qnas } = data;

  return (
    <Layout className="tabsLayout" style={tabsLayoutStyle}>
      <CourseWidget price={price} />
      <Tabs
        defaultActiveKey="1"
        onChange={null}
        tabBarGutter={50}
        tabBarStyle={{
          background: "#eee",
          paddingLeft: "20%",
        }}
      >
        <TabPane tab={<p style={tabTitleStyle}>강의 소개</p>} key="1">
          <Layout className="courseInfoLayout" style={courseInfoLayoutStyle}>
            {renderDetail(detail)}
            {renderLearns(learns)}
            {contents && <Contents contents={contents} />}
          </Layout>
        </TabPane>
        <TabPane tab={<p style={tabTitleStyle}>강의 컨텐츠</p>} key="2">
          <Layout className="courseInfoLayout" style={courseInfoLayoutStyle}>
            {contents && <Contents contents={contents} />}
          </Layout>
        </TabPane>
        <TabPane tab={<p style={tabTitleStyle}>{"질문과 답변"}</p>} key="3">
          <Layout className="courseInfoLayout" style={courseInfoLayoutStyle}>
            <QnAs qnas={qnas} />
          </Layout>
        </TabPane>
        <TabPane tab={<p style={tabTitleStyle}>{"후기"}</p>} key="4">
          content of Tab Pane 4
        </TabPane>
      </Tabs>
    </Layout>
  );
};

const renderDetail = (detail) => {
  const style = {
    width: "60%",
    maxWidth: "100%",
    minWidth: "364px",
    fontFamily: "notosans_medium",
    fontSize: "1.2rem",
    marginTop: "50px",
  };

  return (
    <div style={style}>
      <p>{detail}</p>
    </div>
  );
};

const renderLearns = (learns) => {
  return (
    <div
      className="listContainer"
      style={{
        width: "60%",
        maxWidth: "100%",
        minWidth: "364px",
        marginTop: "50px",
      }}
    >
      <List
        className="learnList"
        size="small"
        header={
          <p
            style={{
              fontFamily: "notosans_bold",
              fontSize: "20px",
            }}
          >
            배우는 내용
          </p>
        }
        bordered
        dataSource={learns}
        style={{
          borderRadius: "10px",
        }}
        renderItem={(item) => (
          <List.Item>
            {
              <Space>
                <CheckOutlined
                  style={{
                    color: "#0f0",
                  }}
                />
                {
                  <p
                    style={{
                      margin: "0 0",
                      fontFamily: "notosans_light",
                      fontSize: "16px",
                    }}
                  >
                    {item}
                  </p>
                }
              </Space>
            }
          </List.Item>
        )}
      />
    </div>
  );
};

const QnAs = ({ qnas }) => {
  const [currentView, setCurrentView] = useState("list");

  const listView = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60%",
        maxWidth: "100%",
        marginTop: "50px",
      }}
    >
      <SearchBox
        placeholder="질문을 검색하세요"
        size="large"
        onSearch={(keyword) => {
          alert(keyword);
        }}
        style={{
          width: "70%",
          maxWidth: "100%",
          marginBottom: "50px",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button
          type="primary"
          size="large"
          icon={<EditOutlined />}
          style={{
            fontFamily: "notosans_medium",
            background: "#4f4f4f",
            borderWidth: 0,
          }}
          onClick={() => {
            setCurrentView("write");
          }}
        >
          질문하기
        </Button>
      </div>
      {(qnas &&
        qnas.map((qna, index) => <QuestionCard key={index} qna={qna} />)) || (
        <Empty
          description={
            <p
              style={{
                fontFamily: "notosans_light",
                fontSize: "16px",
              }}
            >
              질문이 없습니다
            </p>
          }
        />
      )}
    </div>
  );

  const onOkClicked = () => {
    alert("글 작성 완료");
    setCurrentView("list");
  };

  const onCancelClicked = () => {
    setCurrentView("list");
  };

  const writeView = (
    <div>
      <TextEditor onOkClicked={onOkClicked} onCancelClicked={onCancelClicked} />
    </div>
  );

  if (currentView === "list") {
    return listView;
  } else if (currentView === "write") {
    return writeView;
  }
};

const Reviews = () => {};

const tabsLayoutStyle = {
  display: "inline-block",
  background: "#fff",
};

const tabTitleStyle = {
  margin: "0 0",
  fontFamily: "notosans_medium",
};

const courseInfoLayoutStyle = {
  display: "inline-flex",
  alignItems: "center",
  background: "#fff",
  width: "60%",
};

export default CourseContent;
