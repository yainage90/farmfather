import React, { useState, useEffect, useContext } from "react";

import { Layout } from "antd";

import EditStatusBar from "../../../components/instruct/edit/EditStatusBar";
import CourseInfo from "./stages/CourseInfo";
import { Route, Switch } from "react-router-dom";

import CourseDetail from "./stages/CourseDetail";
import CourseChapters from "./stages/CourseChapters";

import { useParams } from "react-router";
import axios from "axios";
import { CourseContext } from "../../../context/course/CourseContextProvider";
import CourseThumbnail from "./stages/CourseThumbnail";

const EditCourse = () => {
  const [current, setCurrent] = useState(0);
  const { contextDispatch } = useContext(CourseContext);

  const { id } = useParams();

  if (window.location.pathname.endsWith("course_info") && current != 0) {
    setCurrent(0);
  } else if (
    window.location.pathname.endsWith("course_thumbnail") &&
    current != 1
  ) {
    setCurrent(1);
  } else if (
    window.location.pathname.endsWith("course_detail") &&
    current != 2
  ) {
    setCurrent(2);
  } else if (
    window.location.pathname.endsWith("course_content") &&
    current != 3
  ) {
    setCurrent(3);
  }

  useEffect(() => {
    const getCourse = async () => {
      await axios({
        url: `/api/course/${id}`,
        method: "get",
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      })
        .then((res) => {
          console.log("patched data", res.data);
          contextDispatch({
            type: "COURSE",
            value: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getCourse();
  }, []);

  return (
    <Layout className="edit-container" style={createContainerStyle}>
      <EditStatusBar action="강의수정" current={current} />
      <Switch>
        <Route
          path="/instruct/edit/:id/course_info"
          render={() => <CourseInfo />}
        />
        <Route
          path="/instruct/edit/:id/course_thumbnail"
          render={() => <CourseThumbnail />}
          exact
        />
        <Route
          path="/instruct/edit/:id/course_detail"
          render={() => <CourseDetail />}
          exact
        />
        <Route
          path="/instruct/edit/:id/course_content"
          render={() => <CourseChapters />}
          exact
        />
      </Switch>
    </Layout>
  );
};

const createContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#e0e0e0",
};

export default EditCourse;
