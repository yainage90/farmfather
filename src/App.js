import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Layout } from "antd";
import "./App.css";

import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

import Home from "./routes/Home";
import Courses from "./routes/Courses";
import Course from "./routes/Course";
import Register from "./routes/Register";
import LoginPopup from "./components/LoginPopup";

const { Content } = Layout;

const App = () => {
  const [loginPopupDisplay, setLoginPopupDisplay] = useState("none");

  const showLoginPopup = () => {
    setLoginPopupDisplay("flex");
  };

  const closeLoginPopup = () => {
    setLoginPopupDisplay("none");
  };

  return (
    <BrowserRouter>
      <Layout
        className="layout"
        style={{
          minHeight: "100vh",
        }}
      >
        <LoginPopup
          display={loginPopupDisplay}
          closeLoginPopup={closeLoginPopup}
        />
        <AppHeader showLoginPopup={showLoginPopup} />
        <Content style={contentStyle}>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/courses" component={Courses} exact />
          <Route path="/course/:courseId" component={Course} exact />
        </Content>
        <AppFooter />
      </Layout>
    </BrowserRouter>
  );
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  background: "#fff",
  padding: "40px",
  width: "100%",
  height: "100%",
  marginTop: "80px",
};

export default App;
