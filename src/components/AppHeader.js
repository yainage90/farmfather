import React, { useContext } from "react";
import { Layout, Space, Menu, Button } from "antd";
import { Link } from "react-router-dom";

import logo from "../farmfather_logo.png";

import "../fonts/font.css";
import { UserContext } from "../context/auth/UserContextProvider";

const { Header } = Layout;

const navs = [
  {
    title: "강의",
    link: "/courses",
    restricted: false,
  },
  {
    title: "강의관리",
    link: "/instruct/list",
    restricted: true,
  },
  {
    title: "마이 페이지",
    link: "/mypage",
    restricted: true,
  },
  {
    title: "커뮤니티",
    link: "/community/qna",
    restricted: true,
  },
];

const AppHeader = ({ showLoginPopup }) => {
  const { user, contextDispatch: userContextDispatch } =
    useContext(UserContext);

  const logout = () => {
    userContextDispatch({
      type: "LOGOUT",
      value: null,
    });
    window.sessionStorage.setItem("user", null);
    window.sessionStorage.setItem("jwt", null);

    window.location.href = "/courses";
  };

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
        {navs
          .filter((nav) => !nav.restricted || user.id)
          .map((nav, index) => (
            <Link key={index} to={nav.link}>
              <Menu.Item key={index} style={menuItemStyle}>
                {nav.title}
              </Menu.Item>
            </Link>
          ))}
      </Menu>
      {!user.id && (
        <Space
          className="logoutedButtonsContainer"
          style={logoutedButtonsContainerStyle}
        >
          <Button
            type="primary"
            style={btnStyle}
            onClick={showLoginPopup}
            size="large"
          >
            로그인
          </Button>
          <Link to="/register">
            <Button type="primary" style={btnStyle} size="large">
              회원가입
            </Button>
          </Link>
        </Space>
      )}
      {user && user.id && (
        <Space
          className="logoutedButtonsContainer"
          style={logoutedButtonsContainerStyle}
        >
          <Button type="primary" style={btnStyle} onClick={logout} size="large">
            로그아웃
          </Button>
        </Space>
      )}
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

const logoutedButtonsContainerStyle = {
  display: "flex",
  flexDirection: "row",
  minWidth: "180px",
  justifyContent: "flex-end",
  marginRight: "20px",
};

const btnStyle = {
  background: "#009900",
  borderColor: "#009900",
  fontFamily: "notosans_bold",
  fontSize: "15px",
  marginRight: "1rem",
};

export default AppHeader;
