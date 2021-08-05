import React, { useState, useContext } from "react";

import { Layout, Upload, message, Button } from "antd";

import { useParams } from "react-router-dom";
import { CourseContext } from "../../../../context/course/CourseContextProvider";

import {
  LoadingOutlined,
  PlusOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import axios from "axios";

import "../../../../fonts/font.css";

const CourseThumbnail = () => {
  const { id } = useParams();

  const { course, contextDispatch } = useContext(CourseContext);

  const [loading, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("JPG 혹은 PNG 형식의 이미지만 업로드 할 수 있습니다");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("용량은 2MB를 초과할 수 없습니다");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => setLoading(false));
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Layout
      className="edit-content-container"
      style={editContentContainerStyle}
    >
      <div>
        <p
          style={{
            fontFamily: "notosans_bold",
            fontSize: "2rem",
            color: "#707070",
          }}
        >
          수업의 대표 이미지를 설정해주세요
        </p>
      </div>
      <div>
        <Upload
          name="thumbnailImage"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action={async (file) => {
            const form = new FormData();
            form.append("thumbnailImage", file);
            await axios({
              url: `/api/course/${id}/thumbnail`,
              method: "post",
              data: form,
              headers: {
                jwt: window.sessionStorage.getItem("jwt"),
              },
            }).then((res) => {
              const thumbnailUrl = res.data;
              alert(thumbnailUrl);
            });
          }}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          headers={{
            jwt: window.sessionStorage.getItem("jwt"),
          }}
        >
          {course.thumbnail ? (
            <img
              src={course.thumbnail}
              alt="avatar"
              style={{ width: "100%" }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <Button
          type="primary"
          size="large"
          style={buttonStyle}
          onClick={() => {
            window.location.href = `/instruct/edit/${id}/course_info`;
          }}
        >
          <LeftOutlined />
          이전
        </Button>
        <Button
          type="primary"
          size="large"
          style={buttonStyle}
          onClick={() => {
            window.location.href = `/instruct/edit/${id}/course_detail`;
          }}
        >
          다음
          <RightOutlined />
        </Button>
      </div>
    </Layout>
  );
};

const editContentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1080px",
  justifyContent: "center",
  alignItems: "center",
  background: "#fff",
  margin: "1rem 0 1rem 0",
  padding: "2rem 2rem 2rem 2rem",
};

const buttonStyle = {
  width: "100%",
  maxWidth: "244px",
  marginTop: "50px",
  height: "auto",
  minHeight: "3.4rem",
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  background: "#30d090",
  borderWidth: 0,
};

export default CourseThumbnail;
