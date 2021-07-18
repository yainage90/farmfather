import React from "react";

import { Input } from "antd";

import "../fonts/font.css";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchBox = ({ style }) => {
  return (
    <Search
      placeholder="찾고 싶은 강좌를 입력해주세요"
      allowClear
      enterButton="검색"
      size="large"
      onSearch={onSearch}
      style={
        style || {
          ...defaultStyle,
        }
      }
    />
  );
};

const defaultStyle = {
  width: "500px",
  maxWidth: "800px",
  minWidth: "300px",
  fontSize: "larger",
  fontFamily: "nanum_gothic_bold",
  color: "#444444",
  margin: "50px",
};

export default SearchBox;
