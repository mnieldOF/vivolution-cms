import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
// import { StructuredText } from "react-datocms";
import Icon from "../components/icon";

const Content = styled.div`
  display: none;
  &.active {
    display: block;
  }
  &.content {
    h4 {
      font-weight: 700;
      font-size: 16px;
      font-family: "Raleway";
      margin-bottom: 20px;
      color: #fff;
    }
    h5 {
      font-weight: 700;
      font-size: 14px;
      font-family: "Raleway";
      margin-bottom: 20px;
      color: #fff;
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
    a {
      display: inline-block;
      margin-right: 5px;
      width: auto;
    }
    ul {
      list-style: initial;
      margin-left: 20px;
    }
  }
  @media screen and (min-width: 900px) {
    &.content {
      h4 {
        color: #666666;
        font-size: 20px;
      }
      h5 {
        color: #666666;
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
      <li className="item" key={i}>
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
        key={i}
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
      <Content
        key={i}
        className={`content ${activeTab === i ? "active" : "hidden"}`}
      >
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
