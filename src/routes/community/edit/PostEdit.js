import React, { useEffect, useState, useContext } from "react";

import axios from "axios";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { Form, Input, Button, Radio } from "antd";

import { UserContext } from "../../../context/auth/UserContextProvider";

import { useParams } from "react-router-dom";

const PostEdit = () => {
  const { user } = useContext(UserContext);

  const { id } = useParams();

  const [data, setData] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setEditorState(editorState);
  };

  const [form] = Form.useForm();

  const onFinish = async (value) => {
    const htmlContent = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log("html:", htmlContent);

    await axios({
      method: (id && "put") || "post",
      url: (id && "/api/post/update") || "/api/post/save",
      headers: {
        jwt: window.sessionStorage.getItem("jwt"),
      },
      data: {
        id,
        title: value.title,
        category: value.category,
        content: htmlContent,
        writerNickName: user.nickName,
      },
    })
      .then((res) => {
        console.log(res);
        window.location.href = `/community/${value.category}`;
      })
      .catch((err) => {
        console.log(err);
        alert("글쓰기가 실패했습니다");
      });
  };

  useEffect(() => {
    const getPost = async (id) => {
      await axios({
        method: "get",
        url: `/api/post/${id}`,
        headers: {
          jwt: window.sessionStorage.getItem("jwt"),
        },
      })
        .then((res) => {
          console.log(res.data);
          const { content } = res.data;
          const blocksFromHtml = htmlToDraft(content);
          const { contentBlocks, entityMap } = blocksFromHtml;
          const contentState = ContentState.createFromBlockArray(
            contentBlocks,
            entityMap
          );

          const editorState = EditorState.createWithContent(contentState);
          setData(res.data);
          setEditorState(editorState);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    if (id) {
      getPost(id);
      form.resetFields();
    }
  }, [id, data.title]);

  const { title, category } = data;

  return (
    <div class="editor-container" style={editorContainerStyle}>
      <Form
        form={form}
        name="post"
        onFinish={onFinish}
        style={formStyle}
        size="large"
        initialValues={{
          title: title,
          category: category,
        }}
      >
        <p style={labelStyle}>제목</p>
        <Form.Item name="title" style={formItemStyle}>
          <Input placeholder="제목을 입력하세요" size="large" />
        </Form.Item>

        <p style={labelStyle}>게시판</p>
        <Form.Item name="category" style={formItemStyle}>
          <Radio.Group buttonStyle="solid" defaultValue={"qna"}>
            <Radio.Button value="qna">질문있어요</Radio.Button>
            <Radio.Button value="tip">팁 공유</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <p style={labelStyle}>내용</p>
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
          editorStyle={{
            minHeight: "500px",
            border: "1px solid",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <Form.Item>
            <Button
              type="ghost"
              size="large"
              onClick={() => {
                window.history.back();
              }}
              style={buttonStyle}
            >
              취소
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={buttonStyle}
            >
              확인
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

const editorContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  margin: "3rem 0 3rem 0",
};

const formStyle = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "notosans_bold",
  background: "#fff",
};

const formItemStyle = {
  width: "100%",
  marginBottom: "40px",
};

const labelStyle = {
  fontFamily: "notosans_bold",
  fontSize: "20px",
  color: "#808080",
};

const buttonStyle = {
  display: "inline-block",
  width: "6rem",
  height: "3rem",
  fontFamily: "notosans_bold",
  fontSize: "18px",
  borderRadius: "10px",
  margin: "0 0 0 20px",
};

export default PostEdit;
