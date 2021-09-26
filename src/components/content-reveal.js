import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { StructuredText } from "react-datocms";
import Icon from "../components/icon";

const Content = styled.div`
  display: none;
  &.active {
    display: block;
  }
  &.content {
    h4 {
      font-weight: 700;
      font-size: 20px;
      font-family: "Raleway";
      margin-bottom: 20px;
      color: #666666;
    }
    h5 {
      font-weight: 700;
      font-size: 16px;
      font-family: "Raleway";
      margin-bottom: 20px;
      color: #666666;
    }
    img {
      margin-bottom: 20px;
    }
    .flex {
      display: flex;
      margin-bottom: 20px;
      p {
        font-weight: 300;
      }
    }
  }
`;

const ContentReveal = ({ tabs, tabTitle }) => {
  console.log(tabs);
  const [activeTab, setActiveTab] = useState(0);

  const renderLinkToRecord = ({ record, children }) => {
    switch (record.__typename) {
      case "DatoCmsSector":
        return <Link href={`/sectors/${record.slug}`}>{children[0]}</Link>;
      case "DatoCmsService":
        return <Link href={`/services/${record.slug}`}>{children[0]}</Link>;
      default:
        return "";
    }
  };

  const accordion = tabs.map((item, i) => {
    console.log("item", item);
    return (
      <li className="item">
        <a
          className={activeTab === i ? "active" : " "}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(i);
          }}
        >
          {item.title}
          <Icon icon="down" size="20px" />
        </a>
        <Content className={`content ${activeTab === i ? "active" : "hidden"}`}>
          {/* <StructuredText
            data={item.tabContent}
            renderLinkToRecord={renderLinkToRecord}
          /> */}
          <div
            dangerouslySetInnerHTML={{
              __html: item.tabNewContentNode.childMarkdownRemark.html,
            }}
          />
        </Content>
      </li>
    );
  });

  const tabTitles = tabs.map((tab, i) => {
    return (
      <li
        className={activeTab === i ? "active" : " "}
        onClick={(e) => {
          e.preventDefault();
          setActiveTab(i);
        }}
      >
        <a href="">
          {tab.title}
          <Icon icon="down" size="20px" />
        </a>
      </li>
    );
  });

  const tabText = tabs.map((tab, i) => {
    return (
      <Content className={`content ${activeTab === i ? "active" : "hidden"}`}>
        {/* <StructuredText
          data={tab.tabContent}
          renderLinkToRecord={renderLinkToRecord}
        /> */}
        <div
          dangerouslySetInnerHTML={{
            __html: tab.tabNewContentNode.childMarkdownRemark.html,
          }}
        />
      </Content>
    );
  });

  return (
    <div className="content-reveal">
      <div className="grid">
        <div className="left">
          <div className="content">
            <h3 className="title">{tabTitle}</h3>
            <ul>{tabTitles}</ul>
          </div>
        </div>
        <div className="right">{tabText}</div>
      </div>
      <div className="accordion">
        <div className="content-container column">
          <ul>{accordion}</ul>
        </div>
      </div>
    </div>
  );
};

export default ContentReveal;
