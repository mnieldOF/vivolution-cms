import React, { useState } from "react";
import styled from "@emotion/styled";
import { StructuredText } from "react-datocms";
import Icon from "../components/icon";

const Content = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

const ContentReveal = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const accordion = tabs.map((item, i) => {
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
          <StructuredText data={item.tabContent} />
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
        <StructuredText data={tab.tabContent} />
      </Content>
    );
  });

  return (
    <div className="content-reveal">
      <div className="grid">
        <div className="left">
          <div className="content">
            <h3 className="title">
              Resource and Expertise for every step of the way
            </h3>
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
