import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router";
import { Typography } from "antd";

const { Title } = Typography;

const Post = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(async () => {
    await axios({
      method: "get",
      url: `/api/post/${id}`,
      headers: {
        jwt: window.sessionStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div class="content-container" style={contentContainerStyle}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Title>{data.title}</Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontFamily: "notosans_medium",
              fontSize: "1rem",
            }}
          >
            {data.writerNickName}
          </p>
          <p
            style={{
              fontFamily: "notosans_light",
              fontSize: "0.9rem",
            }}
          >
            {data.updated}
          </p>
        </div>
      </div>
      <hr align="left" width="100%" />
      <br />
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        style={data.contentStyle}
      />
    </div>
  );
};

const contentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "70%",
  paddingTop: "10%",
};

const contentStyle = {
  fontFamily: "notosans_regular",
  fontSize: "1rem",
};

export default Post;
