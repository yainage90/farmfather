import React, { useState } from "react";

import Lecture from "./Lecture";
import LectureCreatePopup from "./LectureCreatePopup";

import "../../../fonts/font.css";
import { Button } from "antd";

import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const Chapter = ({ chapter, index, onChapterEditClicked, removeChapter }) => {
  const [lectures, setLectures] = useState(chapter.lectures);

  const [lectureToEdit, setLectureToEdit] = useState(null);

  const createLecture = (lecture) => {
    const indexToRemove = chapter.lectures.findIndex(
      (lec) => lec.id === lecture.id
    );

    let newLectures;
    if (indexToRemove === -1) {
      newLectures = [...chapter.lectures, lecture];
    } else {
      newLectures = [
        ...chapter.lectures.slice(0, indexToRemove),
        lecture,
        ...chapter.lectures.slice(indexToRemove + 1),
      ];
    }

    chapter.lectures = newLectures;
    setLectures(newLectures);
  };

  const removeLecture = (id) => {
    const indexToRemove = chapter.lectures.findIndex((lec) => lec.id === id);
    chapter.lectures = [
      ...chapter.lectures.slice(0, indexToRemove),
      ...chapter.lectures.slice(indexToRemove + 1),
    ];
    setLectures(chapter.lectures);
  };

  const closeLectureCreatePopup = () => {
    setLectureToEdit(null);
  };

  return (
    <div className="chapter" style={chapterStyle}>
      {lectureToEdit && (
        <LectureCreatePopup
          createLecture={createLecture}
          closeLectureCreatePopup={closeLectureCreatePopup}
          lecture={lectureToEdit}
        />
      )}
      <div className="chapter-header" style={chapterHeaderStyle}>
        <p style={chapterTitleStyle}>{`[Chapter${index + 1}] ${
          chapter.title
        }`}</p>
        <div>
          <Button
            type="text"
            size="middle"
            icon={<EditOutlined />}
            style={{
              fontFamily: "notosans_medium",
              fontSize: "14px",
            }}
            onClick={onChapterEditClicked}
          >
            수정
          </Button>
          {index > 0 && (
            <Button
              type="text"
              size="middle"
              icon={<DeleteOutlined />}
              style={{
                fontFamily: "notosans_medium",
                fontSize: "14px",
              }}
              onClick={() => {
                removeChapter(index);
              }}
              danger
            >
              삭제
            </Button>
          )}
          <Button
            type="default"
            size="large"
            icon={<PlusCircleOutlined />}
            style={{
              fontFamily: "notosans_medium",
              fontSize: "14px",
              background: "#e0e0e0",
              marginLeft: "20px",
            }}
            onClick={() => {
              setLectureToEdit({});
            }}
          >
            수업 추가
          </Button>
        </div>
      </div>
      {lectures.map((lecture, index) => (
        <Lecture
          lecture={lecture}
          remove={removeLecture}
          onEditLectureClicked={() => {
            setLectureToEdit(lecture);
          }}
        />
      ))}
    </div>
  );
};

const chapterStyle = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
  border: "2px solid #00cc00",
  borderRadius: "10px",
  margin: "20px 0 0 0",
  padding: "14px",
};

const chapterHeaderStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const chapterTitleStyle = {
  fontFamily: "notosans_bold",
  fontSize: "22px",
};

export default Chapter;
