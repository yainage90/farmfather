import React, { useState, useEffect } from "react";

import Layout from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom";
import InstructionNavigation from "../../components/instruct/InstructNavigation";
import MyCourseList from "./list/MyCourseList";
import QnAInstruct from "./qna/QnAInstruct";
import ReviewInstruct from "./review/ReviewInstruct";
import axios from "axios";
import EditCourse from "./edit/EditCourse";
import CreateCourse from "./create/CreateCourse";

const navs = [
  {
    title: "수업 관리",
    to: "/instruct/list",
  },
  {
    title: "질문 관리",
    to: "/instruct/qna",
  },
  {
    title: "리뷰 관리",
    to: "/instruct/review",
  },
  {
    title: "강의 생성",
    to: "/instruct/create",
  },
];

const InstructMain = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/yaincoding/farmfather-fake-api/master/Course.json"
      )
      .then((res) => {
        const docs = res.data.docs;
        setCourses(docs);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  console.log(courses);

  return (
    <Layout className="page-container" style={containerStyle}>
      <Layout className="page" style={pageStyle}>
        <div className="navigation-container" style={navigationContainerStyle}>
          <InstructionNavigation
            className="navigation"
            mode="inline"
            navs={navs}
          />
        </div>
        <Switch>
          <Route
            path="/instruct/list"
            render={() => <MyCourseList courses={courses} />}
            exact
          />
          <Route path="/instruct/qna" component={QnAInstruct} exact />
          <Route path="/instruct/review" component={ReviewInstruct} exact />
          <Route path="/instruct/edit" component={EditCourse} />
          <Route path="/instruct/create" component={CreateCourse} />
        </Switch>
      </Layout>
    </Layout>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  background: "#fff",
};

const pageStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  background: "#fff",
};

const navigationContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  padding: "10% 3rem 0 3rem",
  background: "#f9f9f9",
};

export default InstructMain;
