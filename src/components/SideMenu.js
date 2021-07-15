import React from "react";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const SideMenu = (props) => {
  return (
    <div>
      <Menu
        onClick={() => {
          console.log("click");
        }}
        style={props.style}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={props.mode}
      >
        <Menu.Item key="1">전체</Menu.Item>
        <SubMenu key="sub2" icon={<MailOutlined />} title="농산">
          <Menu.Item key="1">재배기술</Menu.Item>
          <Menu.Item key="2">농약</Menu.Item>
          <Menu.Item key="3">농기계</Menu.Item>
          <Menu.Item key="4">토양학</Menu.Item>
          <Menu.Item key="5">병해충</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<MailOutlined />} title="축산">
          <Menu.Item key="1">소</Menu.Item>
          <Menu.Item key="2">돼지</Menu.Item>
          <Menu.Item key="3">말</Menu.Item>
          <Menu.Item key="4">닭</Menu.Item>
          <Menu.Item key="5">소</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SideMenu;
