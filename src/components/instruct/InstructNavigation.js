import React, { useState } from "react";

import { Button, Space } from "antd";

import "../../fonts/font.css";
import { Link } from "react-router-dom";

import "../../fonts/font.css";

const InstructionNavigation = ({ navs }) => {
  return (
    <Space className="navigation" style={navigationStyle}>
      {navs.map((nav, index) => {
        const selectedStyle =
          nav.to === window.location.pathname ? { color: "#00c060" } : {};

        return (
          <Link to={nav.to} key={index}>
            <Button
              type="link"
              style={{
                ...buttonStyle,
                ...selectedStyle,
              }}
            >
              {nav.title}
            </Button>
          </Link>
        );
      })}
    </Space>
  );
};

const navigationStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontFamily: "notosans_bold",
};

const buttonStyle = {
  color: "#333333",
  fontSize: "1.3rem",
  margin: "10px 0 10px 0",
};

export default InstructionNavigation;
