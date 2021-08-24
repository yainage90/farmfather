import React, { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router";
import { Typography } from "antd";
import PostMetaInfo from "../../../components/board/PostMetaInfo";

const { Title } = Typography;

const Post = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const getPost = async (id) => {
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
  };

  useEffect(() => {
    getPost(id);
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
        {data.writerId && (
          <PostMetaInfo writerId={data.writerId} updated={data.updated} />
        )}
      </div>
      <hr align="left" width="100%" color="#e0e0e0" />
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
  width: "60%",
  paddingTop: "10%",
  marginLeft: "50px",
};

export default Post;
