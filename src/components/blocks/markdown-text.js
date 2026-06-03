import React from "react";
import { cleanMarkdownHtml } from "../../utils/markdown-html";

const MarkdownText = ({
  as: Tag = "p",
  className,
  html,
  text,
  clean = false,
}) => {
  if (html) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{
          __html: clean ? cleanMarkdownHtml(html) : html,
        }}
      />
    );
  }

  return text ? <Tag className={className}>{text}</Tag> : null;
};

export default MarkdownText;
