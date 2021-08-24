import Layout from "antd/lib/layout/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NongsaroNavigation from "../../components/nongsaro/NongsaroNavigation";
import VideoList from "./VideoList";

const apiKey = "20210824NIUUSFLSAJDCAZ40WBTBTW";

const VideoMain = () => {
  const [categories, setCategories] = useState([]);

  const getCategoryCodes = async () => {
    const parseXmlCartegoryCodes = (xmlString) => {
      const parser = new DOMParser();
      const xmlData = parser.parseFromString(xmlString, "text/xml");

      const response = xmlData.getElementsByTagName("response")[0];
      const body = response.getElementsByTagName("body")[0];
      const items = body
        .getElementsByTagName("items")[0]
        .getElementsByTagName("item");

      const arr = [];
      for (const item of items) {
        const categoryCode =
          item.getElementsByTagName("categoryCode")[0].firstChild.nodeValue;
        const categoryNm =
          item.getElementsByTagName("categoryNm")[0].firstChild.nodeValue;

        arr.push({ categoryNm, categoryCode });
      }

      setCategories(arr);
    };

    await axios({
      url: `/service/agriTechVideo/mainCategoryList?apiKey=${apiKey}`,
      method: "get",
    })
      .then((res) => {
        parseXmlCartegoryCodes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCategoryCodes();
  }, []);

  return (
    <Layout className="board-main-layout" style={layoutStyle}>
      <div class="navigation-container" style={navigationContainerStyle}>
        <NongsaroNavigation categories={categories} />
      </div>
      <Switch>
        {categories.map((category, index) => (
          <Route
            key={index}
            path={`/nongsaro/${category.categoryCode}`}
            render={() => <VideoList categoryCode={category.categoryCode} />}
            exact
          />
        ))}
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

export default VideoMain;
