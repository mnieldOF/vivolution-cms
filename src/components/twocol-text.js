import React from "react";

const TwocolText = ({ data }) => {
  console.log("2 col", data);
  const { textNode, highlightedText, title } = data;
  return (
    <div className="twocol-text">
      <div className="content-container">
        <div className="grid">
          <div className="left">
            <h5 className="title">{title}</h5>
          </div>
          <div className="right">
            <p className="description">{highlightedText}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: textNode.childMarkdownRemark.html,
              }}
            />
            {/* <p className="text">{text}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwocolText;
