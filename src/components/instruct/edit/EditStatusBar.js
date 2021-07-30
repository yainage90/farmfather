import React from "react";

import { Layout, Steps } from "antd";

import "../../../fonts/font.css";
import { Link } from "react-router-dom";

const { Step } = Steps;

const { Header } = Layout;

const EditStatusBar = ({ action, current }) => {
  const asteps = [
    {
      stage: 0,
      title: "수업 정보",
      url: "/instruct/edit/course_info",
    },
    {
      stage: 1,
      title: "상세 설명",
      url: "/instruct/edit/course_detail",
    },
    {
      stage: 2,
      title: "수업 컨텐츠",
      url: "/instruct/edit/course_content",
    },
    {
      stage: 3,
      title: "완료",
      url: "/instruct/edit/complete",
    },
  ];

  return (
    <Header className="header" style={headerStyle}>
      <p
        style={{
          fontFamily: "notosans_bold",
          fontSize: "1.6rem",
          margin: "0 0",
          color: "#000",
        }}
      >
        {action}
      </p>
      <div className="status-bar" style={stepsContainerStyle}>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={null}
          className="site-navigation-steps"
          style={stepsStyle}
        >
          {asteps.map((step, index) => (
            <Step
              key={index}
              status={
                step.stage < current
                  ? "finish"
                  : index > current
                  ? "wait"
                  : "process"
              }
              title={
                <p
                  style={{
                    margin: "0 0",
                    fontFamily: "notosans_medium",
                    fontSize: "1rem",
                    color: "#000",
                  }}
                >
                  {step.title}
                </p>
              }
            />
          ))}
        </Steps>
      </div>
    </Header>
  );
};

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "100%",
  height: "4rem",
  background: "#20e580",
  position: "sticky",
  top: 0,
  width: "100%",
};

const stepsContainerStyle = {
  display: "inline-block",
  margin: "0 0 0 10%",
  width: "70%",
};

const stepsStyle = {
  boxShadow: "0px -1px 0 0 #e8e8e8 inset",
};

export default EditStatusBar;
