import React, { useState, useEffect } from "react";

import { Layout, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Chapter from "../../../../components/instruct/edit/Chapter";
import ChapterCreatePopup from "../../../../components/instruct/edit/ChapterCreatePopup";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseChapters = () => {
  const { id } = useParams();

  const [chapters, setChapters] = useState([]);
  const [chapterToEdit, setChapterToEdit] = useState(null);

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
            setChapters(doc.chapters);
          }
        });
    };
    getData();
  }, []);

  const onSubmit = (values) => {
    alert(values);
    window.location.href = `/instruct/edit/${id}/complete`;
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

  if (chapters.length < 1) {
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
        htmlType="submit"
        size="large"
        style={submitBtnStyle}
        onClick={onSubmit}
      >
        저장 후 다음으로 이동
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
