import React, { useState, useEffect, useContext } from "react";

import { Layout, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Chapter from "../../../../components/instruct/edit/Chapter";
import ChapterCreatePopup from "../../../../components/instruct/edit/ChapterCreatePopup";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CourseContext } from "../../../../context/course/CourseContextProvider";

const CourseChapters = () => {
  const { id } = useParams();

  const { course, contextDispatch } = useContext(CourseContext);

  const [chapters, setChapters] = useState(course.chapters || []);
  const [chapterToEdit, setChapterToEdit] = useState(null);

  const onSubmit = async () => {
    await axios({
      url: `/api/course/update`,
      method: "put",
      data: {
        id,
        chapters,
      },
      headers: {
        jwt: window.sessionStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        contextDispatch({
          type: "COURSE",
          value: res.data,
        });
        console.log(res.data);
        alert("저장되었습니다");
        window.location.href = `/instruct`;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createChapter = (chapter) => {
    const indexToRemove = chapters.findIndex((chap) => chap.id === chapter.id);

    let newChapters;
    if (indexToRemove === -1) {
      chapter.lectures = [];
      newChapters = [...chapters, chapter];
    } else {
      const updatedChapter = {
        ...chapters[indexToRemove],
        title: chapter.title,
      };
      newChapters = [
        ...chapters.slice(0, indexToRemove),
        updatedChapter,
        ...chapters.slice(indexToRemove + 1),
      ];
    }

    setChapters(newChapters);
  };

  const removeChapter = (index) => {
    console.log(index);

    const newChapters = [
      ...chapters.slice(0, index),
      ...chapters.slice(index + 1),
    ];

    setChapters(newChapters);
  };

  if (!chapters || chapters.length < 1) {
    createChapter({
      id: v4(),
      title: "챕터를 생성하고 강의를 추가할 수 있습니다",
    });
  }

  const closeChapterCteatePopup = () => {
    setChapterToEdit(null);
  };

  return (
    <Layout
      className="create-content-container"
      style={createContentContainerStyle}
    >
      {chapterToEdit && (
        <ChapterCreatePopup
          createChapter={createChapter}
          closeChaterCreatePopup={closeChapterCteatePopup}
          chapter={chapterToEdit}
        />
      )}
      <div className="control-bar" style={controlBarStyle}>
        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => {
            setChapterToEdit({});
          }}
          style={chapterAddButtonStyle}
        >
          챕터 추가
        </Button>
      </div>
      {chapters.map((chapter, index) => (
        <Chapter
          chapter={chapter}
          index={index}
          onChapterEditClicked={() => {
            setChapterToEdit(chapter);
          }}
          removeChapter={removeChapter}
        />
      ))}

      <Button
        type="primary"
        size="large"
        style={submitBtnStyle}
        onClick={onSubmit}
      >
        완료
      </Button>
    </Layout>
  );
};

const createContentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1080px",
  alignItems: "center",
  background: "#fff",
  margin: "1rem 0 1rem 0",
  padding: "2rem 2rem 2rem 2rem",
};

const controlBarStyle = {
  display: "flex",
  flexDirection: "row",
  width: "90%",
  justifyContent: "flex-end",
};

const chapterAddButtonStyle = {
  fontFamily: "notosans_medium",
  fontSize: "20px",
  color: "#fff",
  height: "auto",
  borderRadius: "10px",
  borderWidth: 0,
};

const submitBtnStyle = {
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

export default CourseChapters;
