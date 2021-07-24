import React from "react";

import { Layout } from "antd";

import "../../fonts/font.css";

const { Header } = Layout;

const InstructPageHeader = () => {
  return (
    <Header className="header" style={headerStyle}>
      <p
        style={{
          fontFamily: "notosans_medium",
          fontSize: "1.6rem",
          margin: "0 0",
          color: "#fff",
        }}
      >
        강의관리
      </p>
    </Header>
  );
};

const headerStyle = {
  background: "#181818",
  display: "flex",
  width: "100%",
  justifyContent: "left",
  alignItems: "center",
  height: "4rem",
  position: "sticky",
  top: 0,
  zIndex: 2,
  width: "100%",
  boxShadow: "0px 3px 4px 1px grey",
};

export default InstructPageHeader;
