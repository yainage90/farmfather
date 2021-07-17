import React from "react";

import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

import "../fonts/font.css";

const { SubMenu } = Menu;

const SideMenu = ({ mode, style }) => {
  return (
    <div className="container">
      <Menu
        onClick={() => {
          console.log("click");
        }}
        style={{
          ...style,
          ...menuStyle,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
      >
        <Menu.Item key="13">전체</Menu.Item>
        <SubMenu key="sub2" icon={<MailOutlined />} title="농산">
          <Menu.Item key="1">전체</Menu.Item>
          <Menu.Item key="2">재배기술</Menu.Item>
          <Menu.Item key="3">농약</Menu.Item>
          <Menu.Item key="4">농기계</Menu.Item>
          <Menu.Item key="5">토양학</Menu.Item>
          <Menu.Item key="6">병해충</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<MailOutlined />} title="축산">
          <Menu.Item key="7">전체</Menu.Item>
          <Menu.Item key="8">소</Menu.Item>
          <Menu.Item key="9">돼지</Menu.Item>
          <Menu.Item key="10">말</Menu.Item>
          <Menu.Item key="11">닭</Menu.Item>
          <Menu.Item key="12">소</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

const menuStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "20px",
  boxShadow: "3px 3px 10px 3px grey",
  height: "auto",
  borderRadius: "10px",
  fontFamily: "notosans_regular",
};

export default SideMenu;
