import { Layout, Tabs, Space, List, Menu, Empty, Button } from "antd";
import {
  EditOutlined,
  CheckOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

import React, { useState } from "react";

import "../../fonts/font.css";
import CourseWidget from "./CourseWidget";
import SearchBox from "../SearchBox";
import QuestionCard from "./QuestionCard";

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

const Contents = ({ contents }) => {
  const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div
      style={{
        width: "60%",
        maxWidth: "100%",
        marginTop: "50px",
        marginBottom: "100px",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontFamily: "notosans_bold",
        }}
      >
        강의 컨텐츠
      </p>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: "100%" }}
      >
        {contents.map((content, index) => (
          <SubMenu
            key={`chapter_${index}`}
            title={content.chapter}
            style={{
              background: "#d0d0d0",
              border: "1px solid #e9ecef",
              fontFamily: "notosans_regular",
              fontSize: "16px",
            }}
          >
            {content.videos.map((video, idx) => (
              <Menu.Item
                key={`${index}_${idx}`}
                style={{
                  fontSize: "14px",
                }}
              >
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Space>
                    <PlayCircleOutlined />
                    {video.title}
                  </Space>
                  <p
                    style={{
                      margin: "0 0",
                    }}
                  >
                    13:01
                  </p>
                </Space>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
};

const QnAs = ({ qnas }) => {
  const [write, setWrite] = useState(false);

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
            setWrite(true);
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

  const writeView = (
    <div>
      <TextEditor />
    </div>
  );

  return (write && writeView) || listView;
};

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
