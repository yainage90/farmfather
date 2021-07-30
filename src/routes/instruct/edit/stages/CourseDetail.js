import React, { useState, useEffect } from "react";

import { Layout } from "antd";

import TextEditor from "../../../../components/TextEditor";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState("");

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/yaincoding/farmfather-fake-api/master/Course.json"
        )
        .then((res) => {
          const docs = res.data.docs;
          const doc = docs.find((doc) => doc.id === id);
          if (doc) {
            setDetail(doc.detail);
          }
        });
    };
    getData();
  }, []);

  const textEditorProps = {
    okButtonTitle: "확인",
    cancelButtonTitle: "취소",
    submitUrl: "/api/",
    okPostProcess: () => {
      window.location.href = `/instruct/edit/${id}/course_content`;
    },
    cancelPostProcess: () => {
      window.location.href = `/instruct/edit/${id}/course_info`;
    },
  };

  return (
    <Layout
      className="create-content-container"
      style={createContentContainerStyle}
    >
      <p style={titleStyle}>상세소개</p>
      <TextEditor {...textEditorProps} detail={detail} />
    </Layout>
  );
};

const createContentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1080px",
  alignItems: "flex-start",
  background: "#fff",
  margin: "1rem 0 1rem 0",
  padding: "2rem 2rem 2rem 2rem",
};

const titleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  margin: "0 0",
  marginBottom: "30px",
};

export default CourseDetail;
