import React, { useState } from "react";

import { Layout } from "antd";

import EditStatusBar from "../../../components/instruct/edit/EditStatusBar";
import CourseInfo from "./stages/CourseInfo";
import { Route, Switch } from "react-router-dom";

import CourseDetail from "./stages/CourseDetail";
import CourseChapters from "./stages/CourseChapters";
import Complete from "./stages/Complete";

const EditCourse = ({ loadedCourse }) => {
  const action = loadedCourse ? "강의 수정" : "강의 생성";

  const { title, learns, detail, chapters } = loadedCourse || {};

  const [current, setCurrent] = useState(0);

  if (window.location.pathname.endsWith("course_info") && current != 0) {
    setCurrent(0);
  } else if (
    window.location.pathname.endsWith("course_detail") &&
    current != 1
  ) {
    setCurrent(1);
  } else if (
    window.location.pathname.endsWith("course_content") &&
    current != 2
  ) {
    setCurrent(2);
  } else if (window.location.pathname.endsWith("complete") && current != 3) {
    setCurrent(3);
  }

  return (
    <Layout className="edit-container" style={createContainerStyle}>
      <EditStatusBar action={action} current={current} />
      <Switch>
        <Route
          path="/instruct/edit/:id/course_info"
          render={() => <CourseInfo title={title} learns={learns} />}
        />
        <Route
          path="/instruct/edit/:id/course_detail"
          render={() => <CourseDetail detail={detail} />}
          exact
        />
        <Route
          path="/instruct/edit/:id/course_content"
          render={() => <CourseChapters loadedContents={chapters} />}
          exact
        />
        <Route path="/instruct/edit/:id/complete" component={Complete} exact />
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
