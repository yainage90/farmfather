import React from "react";

import Layout from "antd/lib/layout/layout";
import { Route, Switch } from "react-router-dom";
import InstructionNavigation from "../../components/instruct/InstructNavigation";
import MyCourseList from "./list/MyCourseList";
import EditCourse from "./edit/EditCourse";
import CreateCourse from "./create/CreateCourse";

const navs = [
  {
    title: "수업 관리",
    to: "/instruct/list",
  },
  {
    title: "강의 생성",
    to: "/instruct/create",
  },
];

const InstructMain = () => {
  return (
    <Layout className="page-container" style={containerStyle}>
      <div className="navigation-container" style={navigationContainerStyle}>
        <InstructionNavigation
          className="navigation"
          mode="inline"
          navs={navs}
        />
      </div>
      <Switch>
        <Route path="/instruct/list" render={() => <MyCourseList />} exact />
        <Route path="/instruct/edit/:id" component={EditCourse} />
        <Route path="/instruct/create" component={CreateCourse} />
      </Switch>
    </Layout>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  maxWidth: "1480px",
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
