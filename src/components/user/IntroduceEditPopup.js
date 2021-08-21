import React, { useRef, useEffect } from "react";

import "../../fonts/font.css";

import TextEditor from "../TextEditor";

const IntroduceEditPopup = () => {
  const inputRef = useRef(null);

  const textEditorProps = {
    submitUrl: `/api/course/`,
    okButtonTitle: `확인`,
    cancelButtonTitle: `취소`,
    goOkTarget: () => {
      window.location.href = "/myPage";
    },
    goCancelTarget: () => {
      window.location.href = "/myPage";
    },

    buttonsContainerStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    submitBtnStyle: {
      minWidth: "140px",
      marginTop: "50px",
      height: "auto",
      minHeight: "3.4rem",
      fontFamily: "notosans_bold",
      fontSize: "1.4rem",
      background: "#30d090",
      borderWidth: 0,
    },
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="container" style={containerStyle}>
      <TextEditor {...textEditorProps} />
    </div>
  );
};

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "70%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "fixed",
  zIndex: 4,
  background: "#00000050",
};

export default IntroduceEditPopup;
