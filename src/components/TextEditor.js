import React, { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Space, Button } from "antd";

const TextEditor = ({ onOkClicked, onCancelClicked }) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div style={containerStyle}>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="글을 작성하세요!"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          menubar: "file edit view insert format tools table help",
          toolbar1:
            "undo redo | bold italic underline strikethrough | " +
            " fontselect fontsizeselect formatselect | " +
            " alignleft aligncenter alignright alignjustify | ",
          toolbar2:
            " outdent indent |  numlist bullist | forecolor backcolor removeformat | " +
            " pagebreak | charmap emoticons | fullscreen  preview save print | " +
            " insertfile image media template link anchor codesample | ltr rtl",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          images_upload_url: "hello.com",
        }}
      />
      <Space className="btnContainer" style={btnContainerStyle}>
        <Button
          type="primary"
          style={{
            ...btnStyle,
            background: "#008833",
          }}
          onClick={onOkClicked}
          size="large"
        >
          확인
        </Button>
        <Button
          type="primary"
          style={{
            ...btnStyle,
            background: "#505050",
          }}
          size="large"
          onClick={onCancelClicked}
        >
          취소
        </Button>
      </Space>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
};

const btnContainerStyle = {
  display: "inline-flex",
  width: "100%",
  justifyContent: "flex-end",
  marginTop: "30px",
};

const btnStyle = {
  borderWidth: "0px",
  fontFamily: "notosans_bold",
  fontSize: "15px",
  marginLeft: "20px",
};

export default TextEditor;
