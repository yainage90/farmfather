import { Button } from "antd";
import React from "react";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "../../../fonts/font.css";

const Lecture = ({ lecture, remove, onEditLectureClicked }) => {
  return (
    <div className="lecture-container" style={lectureContainerStyle}>
      <p style={lectureTitleStyle}>{lecture.title}</p>
      <div
        classname="lecture-header-container"
        style={lectureHeaderContainerStyle}
      >
        <Button
          type="text"
          icon={<EditOutlined />}
          style={buttonStyle}
          onClick={() => {
            onEditLectureClicked(lecture);
          }}
        >
          수정
        </Button>
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          style={buttonStyle}
          onClick={() => {
            remove(lecture.id);
          }}
        >
          삭제
        </Button>
      </div>
    </div>
  );
};

const lectureContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  border: "1px dashed #000",
  padding: "8px",
  margin: "0 0 10px 0",
};

const lectureHeaderContainerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "auto",
};

const lectureTitleStyle = {
  fontFamily: "notosans_medium",
  fontSize: "20px",
  margin: "0 0",
};

const buttonStyle = {
  fontFamily: "notosans_light",
  fontSize: "15px",
};

export default Lecture;
