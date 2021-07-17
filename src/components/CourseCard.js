import React from "react";
import { Card, Rate } from "antd";

import "../fonts/font.css";

const { Meta } = Card;

const CourseCard = ({ data }) => {
  return (
    <Card
      hoverable
      style={cardStyle}
      cover={
        <img
          alt={data.title}
          src={data.thumbnail}
          style={{ borderRadius: "5px 5px 0 0" }}
        />
      }
    >
      <Meta
        title={data.title}
        style={{
          fontFamily: "notosans_bold",
        }}
      />
      <div
        style={{
          transform: "scale(0.8, 0.8) translatex(-25px)",
        }}
      >
        <Rate
          disabled
          allowHalf
          defaultValue={data.starAvg}
          style={{
            marginTop: "1px",
            marginRight: "5px",
          }}
        />
        {" (" + data.starAvg + ")"}
      </div>
      <Meta
        title={data.mentor}
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

export default CourseCard;
