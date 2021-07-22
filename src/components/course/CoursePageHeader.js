import {
  PageHeader,
  Statistic,
  Descriptions,
  Image,
  Rate,
  Avatar,
  Tag,
} from "antd";

import { UserOutlined } from "@ant-design/icons";

import "../../fonts/font.css";

const renderContent = (
  column = 1,
  { title, starAvg, mentor, subTitle, price }
) => {
  return (
    <div className="headerContainer" style={headerContainerStyle}>
      <div style={imageContainerStyle}>
        <Image
          width="300px"
          height="300px"
          src="https://raw.githubusercontent.com/yaincoding/farmfather-fake-api/master/thumbnail/course/280fc8c6-d485-42f7-e5ed-a3f6e6839a74.jpg"
        />
      </div>
      <Descriptions
        size="default"
        column={column}
        style={contentContainerStyle}
      >
        <Descriptions.Item>
          <p style={titleStyle}>{title}</p>
        </Descriptions.Item>
        <Descriptions.Item>
          <p style={subTitleStyle}>{subTitle}</p>
        </Descriptions.Item>
        <Descriptions.Item>
          <Rate disabled allowHalf value={starAvg} />
        </Descriptions.Item>
        <Descriptions.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Avatar
              style={{
                backgroundColor: "#87d068",
                marginRight: "10px",
              }}
              icon={<UserOutlined />}
            />
            <p style={mentorStyle}>{mentor}</p>
          </div>
        </Descriptions.Item>
      </Descriptions>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <Tag
          color="success"
          style={{
            fontFamily: "notosans_medium",
            fontSize: "18px",
            padding: "10px",
          }}
        >
          수강 가능
        </Tag>
        <Statistic
          title={
            <p
              style={{
                fontFamily: "notosans_bold",
                color: "#fff",
                margin: "0 0",
              }}
            >
              가격
            </p>
          }
          value={`${new Intl.NumberFormat().format(price)}원`}
          valueStyle={statisticValueStyle}
        />
      </div>
    </div>
  );
};

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

const CoursePageHeader = ({ data }) => {
  return (
    <div className="headerContainer" style={headerContainerStyle}>
      <PageHeader className="site-page-header-responsive" style={headerStyle}>
        <Content extra={null}>{renderContent(1, data)}</Content>
      </PageHeader>
    </div>
  );
};

const headerContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "#000033",
  paddingLeft: "20px",
};

const imageContainerStyle = {
  marginRight: "80px",
};

const contentContainerStyle = {
  width: "auto",
};

const headerStyle = {};

const titleStyle = {
  margin: "0 0",
  padding: "0 0",
  fontFamily: "notosans_black",
  fontSize: "35px",
  color: "#fff",
};

const subTitleStyle = {
  margin: "0 0",
  padding: "0 0",
  fontFamily: "notosans_thin",
  fontSize: "20px",
  color: "#fff",
};

const mentorStyle = {
  margin: "0 0",
  padding: "0 0",
  fontFamily: "notosans_bold",
  fontSize: "20px",
  color: "#fff",
};

const statisticValueStyle = {
  width: "max-content",
  fontFamily: "notosans_light",
  color: "#fff",
};

export default CoursePageHeader;
