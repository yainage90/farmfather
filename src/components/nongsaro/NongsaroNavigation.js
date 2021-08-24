import { Button, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const BoardNavigation = ({ categories }) => {
  return (
    <Space className="navigation" style={navigationStyle}>
      {categories.map((category, index) => {
        const selectedStyle = window.location.pathname.endsWith(
          category.categoryCode
        )
          ? { color: "#00c060" }
          : {};

        return (
          <Link key={index} to={`/nongsaro/${category.categoryCode}`}>
            <Button
              key={index}
              style={{
                ...buttonStyle,
                ...selectedStyle,
              }}
            >
              {category.categoryNm}
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
  fontSize: "1rem",
  margin: "4px 0 4px 0",
  background: "#ffffff00",
  border: "0px solid",
};

export default BoardNavigation;
