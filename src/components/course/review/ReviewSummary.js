import React from "react";

import { Card, Progress, Rate } from "antd";

import "../../../fonts/font.css";

const ReviewSummary = ({ reviews, starAvg }) => {
  return (
    <div style={layoutStyle}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "baseline",
        }}
      >
        <p
          style={{
            fontFamily: "notosans_bold",
            fontSize: "30px",
            marginRight: "10px",
          }}
        >
          리뷰
        </p>
        <p
          style={{
            fontFamily: "notosans_medium",
            fontSize: "18px",
            color: "#505050",
          }}
        >
          {(reviews && reviews.length) || 0}개
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "3rem",
        }}
      >
        <Card
          title={
            <p
              style={{
                fontFamily: "notosans_bold",
                fontSize: "24px",
                margin: "0 0",
              }}
            >
              평점 {starAvg} / 5.0
            </p>
          }
          style={{
            width: "30%",
          }}
          bordered
        >
          <Rate disabled allowHalf value={starAvg} />
        </Card>
        <Card
          style={{
            width: "60%",
            fontFamily: "notosans_medium",
          }}
        >
          <StarProgress star={5} reviews={reviews || 0} />
          <StarProgress star={4} reviews={reviews || 0} />
          <StarProgress star={3} reviews={reviews || 0} />
          <StarProgress star={2} reviews={reviews || 0} />
          <StarProgress star={1} reviews={reviews || 0} />
        </Card>
      </div>
    </div>
  );
};

const StarProgress = ({ star, reviews }) => {
  const getStarCount = (star) =>
    (reviews && reviews.map((r) => r.star).filter((s) => s === star).length) ||
    0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <p
          style={{
            width: "10%",
            margin: "0.1rem 0",
          }}
        >
          {star}점
        </p>
        <Progress
          strokeColor="#fae20a"
          percent={(getStarCount(star) / reviews.length) * 100}
        />
      </div>
    </div>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  width: "100%",
};

export default ReviewSummary;
