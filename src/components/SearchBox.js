import React from "react";

import { Input } from "antd";

import "../fonts/font.css";

const { Search } = Input;

const SearchBox = ({ size, onSearch, placeholder, style }) => {
  return (
    <Search
      placeholder={placeholder}
      enterButton="검색"
      size={size}
      onSearch={onSearch}
      style={style || defaultStyle}
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
