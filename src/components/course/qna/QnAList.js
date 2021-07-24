import { Button, Empty } from "antd";
import React from "react";
import SearchBox from "../../SearchBox";
import QuestionCard from "./QuestionCard";

import { EditOutlined } from "@ant-design/icons";

const QnAList = ({ qnas, onWriteBtnClicked, onCardClicked }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        marginTop: "50px",
      }}
    >
      <SearchBox
        placeholder="질문을 검색하세요"
        size="large"
        onSearch={(keyword) => {
          alert(keyword);
        }}
        style={{
          width: "60%",
          maxWidth: "564px",
          marginBottom: "50px",
        }}
      />
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
          onClick={onWriteBtnClicked}
        >
          질문하기
        </Button>
      </div>
      {(qnas &&
        qnas.map((qna, index) => (
          <QuestionCard
            key={index}
            qna={qna}
            onClick={() => {
              onCardClicked(qna);
            }}
          />
        ))) || (
        <Empty
          description={
            <p
              style={{
                fontFamily: "notosans_light",
                fontSize: "16px",
              }}
            >
              질문이 없습니다
            </p>
          }
        />
      )}
    </div>
  );
};

export default QnAList;
