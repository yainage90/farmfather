import React from "react";
import { Card } from "antd";

import "../../fonts/font.css";

const { Meta } = Card;

const VideoCard = ({ video }) => {
  return (
    <Card
      hoverable
      style={cardStyle}
      cover={
        <img
          alt={video.image}
          src={video.image}
          style={{ borderRadius: "5px 5px 0 0" }}
        />
      }
    >
      <Meta
        title={video.title}
        style={{
          fontFamily: "notosans_bold",
        }}
      />
      <Meta
        title={video.originInstt}
        style={{
          marginTop: "2px",
          fontFamily: "notosans_regular",
        }}
      />
    </Card>
  );
};

const cardStyle = {
  width: "220px",
  margin: "8px",
  borderRadius: "5px",
};

export default VideoCard;
