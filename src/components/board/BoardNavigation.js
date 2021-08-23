import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const BoardNavigation = ({ navs }) => {
  return (
    <Space className="navigation" style={navigationStyle}>
      {navs.map((nav, index) => {
        const selectedStyle = window.location.pathname.startsWith(nav.to)
          ? { color: "#00c060" }
          : {};

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
  alignItems: "center",
  fontFamily: "notosans_bold",
  position: "sticky",
  minWidth: "180px",
  boxShadow: "3px 3px 10px 3px grey",
  padding: "10px 0 10px 0",
  background: "#e7e7e7",
};

const buttonStyle = {
  color: "#333333",
  fontSize: "1.3rem",
  margin: "10px 0 10px 0",
};

export default BoardNavigation;
