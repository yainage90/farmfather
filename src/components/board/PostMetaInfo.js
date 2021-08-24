import { Avatar, Button } from "antd";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../../context/auth/UserContextProvider";

const PostMetaInfo = ({ writerId, updated }) => {
  const [writer, setWriter] = useState({});

  const { user } = useContext(UserContext);

  const { id } = useParams();

  const deletePost = async () => {
    await axios({
      url: `/api/post/${id}`,
      method: "delete",
      headers: {
        jwt: window.sessionStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        alert("삭제되었습니다.");
        window.location.href = "/community/qna";
      })
      .then((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const getUser = async () => {
      await axios({
        method: "get",
        url: `/api/user/${writerId}`,
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      })
        .then((res) => {
          console.log(res.data);
          setWriter(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getUser();
  }, []);

  return (
    <div style={layoutStyle}>
      <div style={contentStyle}>
        <Avatar style={avatarStyle} src={writer.profile} size="large" />
        <p style={nickNameStyle}>{writer.nickName}</p>
      </div>
      <p style={updatedStyle}>{updated}</p>
      {user.id === writerId && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="text"
            style={{
              ...btnStyle,
              color: "#4499ff",
            }}
            onClick={() => {
              window.location.href = `/community/edit/${id}`;
            }}
            size="small"
          >
            수정
          </Button>
          <Button
            type="text"
            style={{
              ...btnStyle,
              color: "#ff4444",
            }}
            size="small"
            onClick={() => {
              if (window.confirm("삭제하시겠습니까?")) {
                deletePost();
              }
            }}
          >
            삭제
          </Button>
        </div>
      )}
    </div>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
};

const contentStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

const avatarStyle = {
  backgroundColor: "#87d068",
  margin: "0 15px 0 0",
};

const nickNameStyle = {
  margin: "0 0",
  fontFamily: "notosans_bold",
  fontSize: "1.2rem",
};

const updatedStyle = {
  fontFamily: "notosans_regular",
  fontSize: "0.8rem",
  marginTop: "10px",
};

const btnStyle = {
  fontFamily: "notosans_medium",
  fontSize: "14px",
  marginLeft: "0.5rem",
};

export default PostMetaInfo;
