import React from "react";

import { Layout, Steps } from "antd";

import "../../fonts/font.css";

const { Step } = Steps;

const { Header } = Layout;

const CreateStatusBar = ({ action, current }) => {
  const steps = ["수업 정보", "상세 설명", "수업 컨텐츠", "완료"];

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
          current={2}
          onChange={null}
          className="site-navigation-steps"
          style={stepsStyle}
        >
          {steps.map((step, index) => (
            <Step
              status={
                index < current
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
                  }}
                >
                  {step}
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
  background: "#40c080",
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

export default CreateStatusBar;
