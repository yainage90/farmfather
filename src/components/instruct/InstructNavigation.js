import React, { useState } from "react";

import { Button, Space } from "antd";

import "../../fonts/font.css";
import { Link } from "react-router-dom";

import "../../fonts/font.css";

const navs = [
  {
    title: "수업 관리",
    to: "/instruct/course",
  },
  {
    title: "질문 관리",
    to: "/instruct/qna",
  },
  {
    title: "리뷰 관리",
    to: "/instruct/review",
  },
];

const InstructionNavigation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Space className="navigation" style={navigationStyle}>
      {navs.map((nav, index) => {
        const selectedStyle = index === selected ? { color: "#00c060" } : {};

        return (
          <Link to={nav.to}>
            <Button
              type="link"
              style={{
                ...buttonStyle,
                ...selectedStyle,
              }}
              onClick={() => {
                setSelected(index);
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
