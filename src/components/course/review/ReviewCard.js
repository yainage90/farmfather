import React from "react";

import { Card, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "../../../fonts/font.css";
import Avatar from "antd/lib/avatar/avatar";

const ReviewCard = ({ review }) => {
  return (
    <Card
      style={cardStyle}
      bodyStyle={{
        background: "#f9f9f9",
      }}
      title={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <Avatar
              style={{
                backgroundColor: "#87d068",
                marginRight: "10px",
              }}
              icon={<UserOutlined />}
              size="large"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  margin: "0 20px 0 0",
                  padding: "0 0",
                  fontFamily: "notosans_bold",
                  fontSize: "16px",
                }}
              >
                {review.reviewer}
              </p>
              <p
                style={{
                  margin: "0 0",
                  fontFamily: "notosans_regular",
                  fontSize: "14px",
                  color: "#c0c0c0",
                }}
              >
                2021-07-13 14:18:41
              </p>
            </div>
          </div>
          <Rate disabled value={review.star} />
        </div>
      }
    >
      <p
        style={{
          fontFamily: "notosans_light",
          fontSize: "16px",
        }}
      >
        {review.comment}
      </p>
    </Card>
  );
};

const cardStyle = {
  width: "100%",
  borderRadius: "1rem",
  margin: "30px 0 0 0",
};

export default ReviewCard;
