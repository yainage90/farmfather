import React from "react";
import { Layout, Menu, Button, Space } from "antd";
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

const AppHeader = () => {
  return (
    <Header className="header" style={headerStyle}>
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        className="ant-menu"
        defaultSelectedKeys={["1"]}
        style={menuStyle}
      >
        {navs.map((nav, index) => (
          <Link to={nav.link}>
            <Menu.Item key={index} style={fontStyle}>
              {nav.title}
            </Menu.Item>
          </Link>
        ))}
      </Menu>
      <div className="headerBtns" style={{ ...headerBtnsStyle, ...fontStyle }}>
        <Link to="/login">
          <Button type="primary" className="btn" style={btnStyle}>
            로그인
          </Button>
        </Link>
        <Link to="/register">
          <Button type="primary" className="btn" style={btnStyle}>
            회원가입
          </Button>
        </Link>
      </div>
    </Header>
  );
};

const fontStyle = {
  fontSize: "larger",
  fontFamily: "nanum_gothic_extra_bold",
  color: "#444444",
};

const menuStyle = {
  minWidth: "500px",
  justifyContent: "center",
  borderWidth: "0",
};

const headerStyle = {
  background: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "90px",
  position: "fixed",
  zIndex: 1,
  width: "100%",
  boxShadow: "0px 1px 5px 1px grey",
};

const headerBtnsStyle = {
  display: "inline-flex",
  width: "170px",
  height: "70px",
  justifyContent: "space-between",
  alignItems: "center",
  marginRight: "20px",
};

const btnStyle = {
  background: "#009900",
  borderColor: "#009900",
};

export default AppHeader;
