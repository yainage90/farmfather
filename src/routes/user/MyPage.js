import React, { useState, useContext } from "react";

import { Layout, Card, Space, Divider, Button, Avatar, Upload } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import TextEditor from "../../components/TextEditor";
import NickNameEditPopup from "../../components/user/NickNameEditPopup";
import PasswordEditPopup from "../../components/user/PasswordEditPopup";
import IntroduceEditPopup from "../../components/user/IntroduceEditPopup";

import { UserContext } from "../../context/auth/UserContextProvider";

const MyPage = () => {
  const { user, contextDispatch } = useContext(UserContext);

  const [nickNameEdit, setNickNameEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [introduceEdit, setIntroduceEdit] = useState(false);

  const closeNickNamePopup = () => {
    setNickNameEdit(false);
  };

  const closePasswordPoup = () => {
    setPasswordEdit(false);
  };

  const closeIntroduceEdit = () => {
    setIntroduceEdit(false);
  };

  const uploadProps = {
    name: "file",
    action: "https://",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
      } else if (info.file.status === "error") {
      }
    },
  };

  return (
    <Layout className="mypage-container" style={containerStyle}>
      <div>
        <Card
          title={
            <p
              style={{
                fontFamily: "notosans_black",
                fontSize: "1.4rem",
              }}
            >
              내 정보
            </p>
          }
          //extra={<a href="#">More</a>}
          style={cardStyle}
        >
          <Space style={infoContainerStyle}>
            {nickNameEdit && <NickNameEditPopup close={closeNickNamePopup} />}
            {passwordEdit && <PasswordEditPopup close={closePasswordPoup} />}
            {introduceEdit && <IntroduceEditPopup close={closeIntroduceEdit} />}
            <Space>
              <p style={labelStyle}>프로필 사진</p>
              <Avatar
                src={user.image}
                shape="circle"
                icon={<UserOutlined />}
                size={60}
                alt="profile"
              />
            </Space>
            <Upload {...uploadProps} showUploadList={false}>
              <Button
                type="ghost"
                size="large"
                style={editButtonStyle}
                onClick={() => {}}
              >
                사진 변경
              </Button>
            </Upload>
          </Space>
          <Divider />
          <Space style={infoContainerStyle}>
            <Space>
              <p style={labelStyle}>닉네임</p>
              <p style={textStyle}>{user.nickName}</p>
            </Space>
            <Button
              type="ghost"
              size="large"
              style={editButtonStyle}
              onClick={() => {
                setNickNameEdit(true);
              }}
            >
              닉네임 변경
            </Button>
          </Space>
          <Divider />
          <Space style={infoContainerStyle}>
            <Space>
              <p style={labelStyle}>비밀번호</p>
              <p style={textStyle}>********</p>
            </Space>
            <Button
              type="ghost"
              size="large"
              style={editButtonStyle}
              onClick={() => {
                setPasswordEdit(true);
              }}
            >
              비밀번호 변경
            </Button>
          </Space>
          <Divider />
          <div>
            <Space
              style={{
                ...infoContainerStyle,
                marginBottom: "10px",
              }}
            >
              <p style={labelStyle}>소개</p>
              <Button
                type="ghost"
                size="large"
                style={editButtonStyle}
                onClick={() => {
                  setIntroduceEdit(true);
                }}
              >
                소개 변경
              </Button>
            </Space>
            <p
              style={{
                background: "#fff",
                ...textStyle,
              }}
            >
              {user.introduce}
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1080px",
  alignItems: "center",
  background: "#fff",
  margin: "1rem 0 1rem 0",
  padding: "2rem 2rem 2rem 2rem",
};

const cardStyle = {
  width: "50vw",
  minWidth: "568px",
  background: "#f8f8f8",
  borderRadius: "10px",
};

const infoContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const labelStyle = {
  fontFamily: "notosans_medium",
  fontSize: "1rem",
  minWidth: "150px",
  margin: 0,
  color: "#808080",
};

const textStyle = {
  fontFamily: "notosans_light",
  fontSize: "1rem",
  margin: 0,
};

const inputStyle = {
  fontFamily: "notosans_medium",
  fontSize: "1.1rem",
  width: "100%",
  maxWidth: "576px",
  background: "#f0f0f0",
};

const buttonStyle = {
  width: "100%",
  maxWidth: "576px",
  marginTop: "50px",
  height: "auto",
  minHeight: "3.4rem",
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  background: "#30d090",
  borderWidth: 0,
};

const editButtonStyle = {
  background: "#fff",
  fontFamily: "notosans_medium",
  fontSize: "16px",
};

export default MyPage;
