import Layout from "antd/lib/layout/layout";
import React from "react";
import { Route, Switch } from "react-router-dom";
import BoardNavigation from "../../components/board/BoardNavigation";

import Posts from "./post/Posts";
import Post from "./post/Post";
import PostEdit from "./edit/PostEdit";

const BoardMain = () => {
  const navs = [
    {
      title: "질문있어요",
      to: "/community/qna",
    },
    {
      title: "팁 공유",
      to: "/community/tip",
    },
  ];

  return (
    <Layout className="board-main-layout" style={layoutStyle}>
      <div class="navigation-container" style={navigationContainerStyle}>
        <BoardNavigation navs={navs} />
      </div>
      <Switch>
        <Route
          path="/community/qna"
          render={() => <Posts category="qna" />}
          exact
        />
        <Route path="/community/qna/:id" render={() => <Post />} exact />
        <Route
          path="/community/tip"
          render={() => <Posts category="tip" />}
          exact
        />
        <Route path="/community/tip/:id" render={() => <Post />} exact />
        <Route path="/community/edit" render={() => <PostEdit />} exact />
      </Switch>
    </Layout>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  maxWidth: "1440px",
  minWidth: "300px",
  height: "100%",
  minHeight: "600px",
  overflow: "auto",
  background: "#fff",
};

const navigationContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  padding: "10% 3rem 0 3rem",
  background: "#f9f9f9",
};

export default BoardMain;
