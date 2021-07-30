import React, { useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Space, Button } from "antd";

const TextEditor = ({
  okButtonTitle = "확인",
  cancelButtonTitle = "취소",
  submitUrl,
  okPostProcess,
  cancelPostProcess,
  detail,
}) => {
  const editorRef = useRef(null);

  const [value, setValue] = useState("");

  return (
    <div style={containerStyle}>
      <Editor
        onInit={(editor) => (editorRef.current = editor)}
        initialValue={detail || "글을 작성하세요!"}
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
        onEditorChange={(value, editor) => {
          setValue(value);
        }}
      />
      <Space className="btnContainer" style={btnContainerStyle}>
        <Button
          type="primary"
          style={{
            ...btnStyle,
            background: "#008833",
          }}
          onClick={() => {
            alert(`${submitUrl}로\n${value}\n전송`);
            if (okPostProcess) {
              okPostProcess();
            }
          }}
          size="large"
        >
          {okButtonTitle}
        </Button>
        <Button
          type="primary"
          style={{
            ...btnStyle,
            background: "#505050",
          }}
          size="large"
          onClick={cancelPostProcess}
        >
          {cancelButtonTitle}
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
