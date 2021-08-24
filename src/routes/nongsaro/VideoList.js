import { Layout, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "../../components/nongsaro/VideoCard";

const apiKey = "20210824NIUUSFLSAJDCAZ40WBTBTW";

const VideoList = ({ categoryCode }) => {
  const [videos, setVideos] = useState([]);

  const getVideoListOfCategory = async (categoryCode) => {
    const parseXmlVideoList = (xmlString) => {
      const parser = new DOMParser();
      const xmlData = parser.parseFromString(xmlString, "text/xml");

      const response = xmlData.getElementsByTagName("response")[0];
      const body = response.getElementsByTagName("body")[0];
      const items = body
        .getElementsByTagName("items")[0]
        .getElementsByTagName("item");

      const arr = [];
      for (const item of items) {
        const image =
          item.getElementsByTagName("videoImg")[0].firstChild.nodeValue;
        const link =
          item.getElementsByTagName("videoLink")[0].firstChild.nodeValue;
        const originInstt =
          item.getElementsByTagName("videoOriginInstt")[0].firstChild.nodeValue;
        const title =
          item.getElementsByTagName("videoTitle")[0].firstChild.nodeValue;
        arr.push({ image, link, originInstt, title });
      }

      console.log(arr);
      setVideos(arr);
    };

    await axios({
      url: `/service/agriTechVideo/videoList?categoryCode=${categoryCode}&apiKey=${apiKey}`,
      method: "get",
    })
      .then((res) => {
        parseXmlVideoList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideoListOfCategory(categoryCode);
  }, [categoryCode]);

  return (
    <Layout className="board-main-layout" style={layoutStyle}>
      <Layout style={contentStyle}>
        <Space style={coursesStyle}>
          {videos &&
            videos.map((video, index) => (
              <a key={index} href={video.link}>
                <VideoCard key={index} video={video} />
              </a>
            ))}
        </Space>
      </Layout>
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

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  maxWidth: "1920px",
  minWidth: "800px",
  width: "100%",
  background: "white",
  padding: "50px",
};

const coursesStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "flex-start",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flex: 1,
  overflow: "auto",
};

export default VideoList;
