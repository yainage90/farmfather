import { Button, Empty, Input, Form } from "antd";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

import { EditOutlined } from "@ant-design/icons";

import "../../../fonts/font.css";
import ReviewSummary from "./ReviewSummary";

const { TextArea } = Input;

const ReviewList = ({ reviews, starAvg }) => {
  const [comment, setComment] = useState("");
  const [commentWriteView, setCommentWriteView] = useState("none");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60%",
        maxWidth: "100%",
        marginTop: "50px",
      }}
    >
      <ReviewSummary reviews={reviews} starAvg={starAvg} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button
          type="primary"
          size="large"
          icon={<EditOutlined />}
          style={{
            fontFamily: "notosans_medium",
            background: "#4f4f4f",
            borderWidth: 0,
          }}
          onClick={() => {
            if (commentWriteView === "none") {
              setCommentWriteView("flex");
            } else {
              setCommentWriteView("none");
            }
          }}
        >
          리뷰 작성
        </Button>
      </div>
      <div
        className="write_form"
        style={{
          display: commentWriteView,
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Form.Item>
          <TextArea
            rows={6}
            onChange={(e) => {
              setComment(e.target.value);
              console.log(comment);
            }}
          />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontFamily: "notosans_bold",
          }}
        >
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                if (!comment) {
                  alert("리뷰를 작성해주세요");
                  return;
                }

                alert(comment);
              }}
              type="primary"
              size="large"
              style={{
                width: "5rem",
              }}
            >
              확인
            </Button>
          </Form.Item>
        </div>
      </div>
      {(reviews &&
        reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))) || (
        <Empty
          description={
            <p
              style={{
                fontFamily: "notosans_light",
                fontSize: "16px",
              }}
            >
              리뷰가 없습니다
            </p>
          }
        />
      )}
    </div>
  );
};

export default ReviewList;
