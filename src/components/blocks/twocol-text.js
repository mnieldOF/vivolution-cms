import "./twocol-text.scss";
import React from "react";
import MarkdownText from "./markdown-text";

const TwocolText = ({ data }) => {
  const { textNode, subtitle, title } = data;
  return (
    <div className="detail-text-block">
      <hr className="detail-divider" />
      {subtitle && <p className="detail-section-label">{subtitle}</p>}
      {title && <h2 className="detail-section-headline">{title}</h2>}
      <MarkdownText
        className="detail-prose"
        html={textNode?.childMarkdownRemark?.html}
        clean
      />
    </div>
  );
};

export default TwocolText;
