import React, { useState, useEffect } from "react";

import { Layout } from "antd";

import TextEditor from "../../../../components/TextEditor";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "antd/lib/form/Form";

const CourseDetail = () => {
  const { id } = useParams();
  const form = Form.useForm;

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
    submitUrl: "/api/",
    okButtonTitle: `다음`,
    cancelButtonTitle: `이전`,
    goOkTarget: () => {
      window.location.href = `/instruct/edit/${id}/course_content`;
    },
    goCancelTarget: () => {
      window.location.href = `/instruct/edit/${id}/course_info`;
    },

    buttonsContainerStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    submitBtnStyle: {
      minWidth: "140px",
      marginTop: "50px",
      height: "auto",
      minHeight: "3.4rem",
      fontFamily: "notosans_bold",
      fontSize: "1.4rem",
      background: "#30d090",
      borderWidth: 0,
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
