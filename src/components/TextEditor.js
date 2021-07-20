import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
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
      <button onClick={log}>Log editor content</button>
    </>
  );
};

export default TextEditor;
