import React from "react";
import { Card, Rate } from "antd";

const { Meta } = Card;

const Course = ({ data }) => {
  return (
    <Card
      hoverable
      style={cardStyle}
      cover={<img alt={data.title} src={data.thumbnail} />}
    >
      <Meta title={data.title} />
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
        }}
      />
    </Card>
  );
};

const cardStyle = {
  width: "220px",
  margin: "8px",
};

export default Course;
