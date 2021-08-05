import React, { useContext } from "react";

import { Layout, Form, Button, Input, Radio } from "antd";
import {
  PlusOutlined,
  MinusCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CourseContext } from "../../../../context/course/CourseContextProvider";

const CourseInfo = () => {
  const { id } = useParams();

  const [form] = Form.useForm();

  const { course, contextDispatch } = useContext(CourseContext);

  const onSubmit = async ({ title, status, learns }) => {
    await axios({
      url: `/api/course/update`,
      method: "put",
      data: {
        id,
        title,
        status,
        learns,
      },
      headers: {
        jwt: window.sessionStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        contextDispatch({
          type: "COURSE",
          value: res.data,
        });
        console.log(res.data);
        alert("저장되었습니다");
        window.location.href = `/instruct/edit/${id}/course_thumbnail`;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Layout
      className="edit-content-container"
      style={editContentContainerStyle}
    >
      <Form form={form} layout="vertical" style={formStyle} onFinish={onSubmit}>
        <Form.Item
          name="title"
          label={<p style={formItemStyle}>수업 제목</p>}
          required
          initialValue={course.title}
        >
          <Input size="large" style={inputStyle} />
        </Form.Item>
        <Form.Item
          name="status"
          required
          label={<p style={formItemStyle}>수업 상태</p>}
        >
          <Radio.Group defaultValue={course.status || "pending"}>
            <Radio
              value="pending"
              style={{
                fontFamily: "notosans_medium",
                fontSize: "18px",
                borderWidth: 0,
                marginRight: "10px",
                color: "#ff000080",
              }}
            >
              준비중
            </Radio>
            <Radio
              value="ready"
              style={{
                fontFamily: "notosans_medium",
                fontSize: "18px",
                borderWidth: 0,
                marginRight: "10px",
                color: "#50c090",
              }}
            >
              수강 가능
            </Radio>
          </Radio.Group>
        </Form.Item>
        <br />
        <div>
          <Form.List name="learns" learns={course.learns}>
            {(fields, { add, remove }, { errors }) => {
              return (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      label={
                        <p
                          style={{
                            fontFamily: "notosans_medium",
                            fontSize: "16px",
                            margin: "0 0",
                          }}
                        >{`배우는 내용${index + 1}`}</p>
                      }
                      key={field.key}
                      style={{
                        margin: "0 0",
                      }}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "내용을 입력하거나 칸을 제거해주세요",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="ex) 인삼 재배 농약 사용법"
                          style={inputStyle}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                          style={{
                            margin: "0 0 0 10px",
                            color: "#f00",
                            fontSize: "16px",
                          }}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <div
                    style={{
                      display: "inline-flex",
                      width: "100%",
                      maxWidth: "576px",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{
                          maxWidth: "576px",
                          height: "3rem",
                          background: "#f0f0f0",
                        }}
                        icon={<PlusOutlined />}
                      >
                        <p
                          style={{
                            display: "inline-block",
                            margin: "0 0 0 10px",
                            fontFamily: "notosans_medium",
                            fontSize: "16px",
                          }}
                        >
                          배우는 내용 추가
                        </p>
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </div>
                </>
              );
            }}
          </Form.List>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={submitBtnStyle}
          >
            다음
            <RightOutlined />
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

const editContentContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1080px",
  alignItems: "flex-start",
  background: "#fff",
  margin: "1rem 0 1rem 0",
  padding: "2rem 2rem 2rem 2rem",
};

const formStyle = {
  width: "100%",
};

const formItemStyle = {
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  margin: "0 0",
};

const inputStyle = {
  fontFamily: "notosans_medium",
  fontSize: "1.1rem",
  width: "100%",
  maxWidth: "576px",
  background: "#f0f0f0",
};

const submitBtnStyle = {
  width: "100%",
  maxWidth: "576px",
  marginTop: "50px",
  height: "auto",
  minHeight: "3.4rem",
  fontFamily: "notosans_bold",
  fontSize: "1.4rem",
  background: "#30d090",
  borderWidth: 0,
};

export default CourseInfo;
