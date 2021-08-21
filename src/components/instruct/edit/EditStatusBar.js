import React from "react";

import { Layout, Steps } from "antd";

import "../../../fonts/font.css";
import { Link, useParams } from "react-router-dom";

const { Step } = Steps;

const { Header } = Layout;

const EditStatusBar = ({ action, current }) => {
  const { id } = useParams();

  const steps = [
    {
      stage: 0,
      title: "수업 정보",
      link: "course_info",
    },
    {
      stage: 1,
      title: "썸네일",
      link: "course_thumbnail",
    },
    {
      stage: 2,
      title: "상세 설명",
      link: "course_detail",
    },
    {
      stage: 3,
      title: "수업 컨텐츠",
      link: "course_content",
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
        {current >= 0 && (
          <Steps
            type="navigation"
            size="small"
            current={current}
            onChange={null}
            className="site-navigation-steps"
            style={stepsStyle}
          >
            {steps.map((step, index) => (
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
                  <Link to={`/instruct/edit/${id}/${step.link}`}>
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
                  </Link>
                }
              />
            ))}
          </Steps>
        )}
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
