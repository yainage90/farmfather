import React from "react";
import { Layout, Space, Menu, Button } from "antd";
import { Link } from "react-router-dom";

import logo from "../farmfather_logo.png";

import "../fonts/font.css";

const { Header } = Layout;

const navs = [
  {
    title: "강의",
    link: "/courses",
  },
  {
    title: "강의관리",
    link: "/courseManage",
  },
  {
    title: "마이 페이지",
    link: "/myPage",
  },
  {
    title: "고객센터",
    link: "/center",
  },
];

const AppHeader = ({ showLoginPopup }) => {
  return (
    <Header className="header" style={headerStyle}>
      <Space className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Space>
      <Menu
        theme="light"
        mode="horizontal"
        className="ant-menu"
        defaultSelectedKeys={["1"]}
        style={menuStyle}
      >
        {navs.map((nav, index) => (
          <Link key={index} to={nav.link}>
            <Menu.Item key={index} style={menuItemStyle}>
              {nav.title}
            </Menu.Item>
          </Link>
        ))}
      </Menu>
      <Space className="btnContainer" style={btnContainerStyle}>
        <Link>
          <Button
            type="primary"
            style={btnStyle}
            onClick={showLoginPopup}
            size="large"
          >
            로그인
          </Button>
        </Link>
        <Link to="/register">
          <Button type="primary" style={btnStyle} size="large">
            회원가입
          </Button>
        </Link>
      </Space>
    </Header>
  );
};

const headerStyle = {
  background: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "5rem",
  position: "sticky",
  top: 0,
  zIndex: 2,
  width: "100%",
  boxShadow: "0px 3px 4px 1px grey",
};
const menuStyle = {
  minWidth: "500px",
  justifyContent: "center",
  borderWidth: "0",
  fontSize: "20px",
  fontFamily: "notosans_bold",
};
const menuItemStyle = {
  color: "#333333",
};
const btnContainerStyle = {
  display: "inline-flex",
  flexDirection: "row",
  width: "180px",
  height: "70px",
  justifyContent: "space-between",
  alignItems: "space-between",
  marginRight: "20px",
};

const btnStyle = {
  background: "#009900",
  borderColor: "#009900",
  fontFamily: "notosans_bold",
  fontSize: "15px",
};

export default AppHeader;
