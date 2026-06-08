import "./text-block.scss";
import React from "react";
import MarkdownText from "./markdown-text";

const TextBlock = ({ title, text, textHtml }) => {
  return (
    <section className="text-block white">
      <div className="content-container">
        <div className="box">
          <h2 className="title">{title}</h2>
          <MarkdownText className="text" html={textHtml} text={text} clean />
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
