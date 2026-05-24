import React from "react";
import "./sub-footer.scss";
import { useSubFooterData } from "../../hooks/useSubFooterData";

const SubFooter = () => {
  const data = useSubFooterData();
  const cta = data.datoCmsCtaContact;
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="box">
          <h2 className="title">{cta.title}</h2>
          <p className="text">{cta.mainText}</p>
          <span>{cta.subtext}</span>
          <button
            dangerouslySetInnerHTML={{
              __html: cta.contactNode.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
