import React, { useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Space, Button } from "antd";
import axios from "axios";

import { useParams } from "react-router";

const TextEditor = ({
  submitUrl,
  okButtonTitle,
  cancelButtonTitle,
  goOkTarget,
  goCancelTarget,
  buttonsContainerStyle,
  submitBtnStyle,
  content,
}) => {
  const editorRef = useRef(null);
  const [value, setValue] = useState(content);

  const { id } = useParams();

  return (
    <div style={containerStyle}>
      <Editor
        onInit={(editor) => (editorRef.current = editor)}
        initialValue={content || "글을 작성하세요!"}
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
      <div className="btnContainer" style={buttonsContainerStyle}>
        <Button
          type="primary"
          style={submitBtnStyle}
          size="large"
          onClick={async () => {
            await axios({
              url: submitUrl,
              method: "put",
              data: {
                id,
                detail: value,
              },
              headers: {
                jwt: window.sessionStorage.getItem("jwt"),
              },
            })
              .then((res) => {
                console.log(res.data);
                alert("저장되었습니다");
                if (goOkTarget) {
                  goOkTarget();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {cancelButtonTitle}
        </Button>
        <Button
          type="primary"
          style={submitBtnStyle}
          onClick={async () => {
            await axios({
              url: submitUrl,
              method: "put",
              data: {
                id,
                detail: value,
              },
              headers: {
                jwt: window.sessionStorage.getItem("jwt"),
              },
            })
              .then((res) => {
                console.log(res.data);
                alert("저장되었습니다");
                if (goOkTarget) {
                  goOkTarget();
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          size="large"
        >
          {okButtonTitle}
        </Button>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
};

export default TextEditor;
