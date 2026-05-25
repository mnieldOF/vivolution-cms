import "./twocol-text.scss";
import React from "react";

const TwocolText = ({ data }) => {
  const { textNode, subtitle, title } = data;
  return (
    <div className="detail-text-block">
      <hr className="detail-divider" />
      {subtitle && <p className="detail-section-label">{subtitle}</p>}
      {title && <h2 className="detail-section-headline">{title}</h2>}
      {textNode && (
        <div
          className="detail-prose"
          dangerouslySetInnerHTML={{
            __html: textNode.childMarkdownRemark.html,
          }}
        />
      )}
    </div>
  );
};

export default TwocolText;
