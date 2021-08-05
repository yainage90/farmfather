import React, { useState } from "react";

import { Menu, Space } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

import { PlayCircleOutlined } from "@ant-design/icons";

const Chapters = ({ chapters, style }) => {
  const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div style={style}>
      <p
        style={{
          fontSize: "20px",
          fontFamily: "notosans_bold",
        }}
      >
        강의 컨텐츠
      </p>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: "100%" }}
      >
        {chapters.map((chapter, index) => (
          <SubMenu
            key={`chapter_${index}`}
            title={chapter.title}
            style={{
              background: "#d0d0d0",
              border: "1px solid #e9ecef",
              fontFamily: "notosans_regular",
              fontSize: "16px",
            }}
          >
            {chapter.lectures.map((lecture, idx) => (
              <Menu.Item
                key={`${index}_${idx}`}
                style={{
                  fontSize: "14px",
                }}
                onClick={() => {
                  window.open(`/video/${lecture.videoUrl}`);
                }}
              >
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Space>
                    <PlayCircleOutlined />
                    {lecture.title}
                  </Space>
                  <p
                    style={{
                      margin: "0 0",
                    }}
                  >
                    13:01
                  </p>
                </Space>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
};

export default Chapters;
