import React, { useRef, useEffect, useState } from "react";

import "../../fonts/font.css";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const IntroduceEditPopup = () => {
  const inputRef = useRef(null);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="container" style={containerStyle}>
      <Editor
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성하세요"
        localization={{
          locale: "ko",
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
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
