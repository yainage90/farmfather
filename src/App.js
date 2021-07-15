import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Layout } from "antd";
import "./App.css";

import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";

import Home from "./routes/Home";
import Courses from "./routes/Courses";
import Register from "./routes/Register";
import LoginPopup from "./components/LoginPopup";

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Layout
        className="layout"
        style={{
          minHeight: "100vh",
        }}
      >
        <AppHeader />
        <Content style={contentStyle}>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/courses" component={Courses} exact />
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
