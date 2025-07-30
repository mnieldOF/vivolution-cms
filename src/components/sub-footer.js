import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SubFooter = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          datoCmsCtaContact {
            title
            subtext
            mainText
            contact
          }
        }
      `}
      render={(data) => {
        return (
          <div className="sub-footer">
            <div className="container">
              <div className="box">
                <h2 className="title">{data.datoCmsCtaContact.title}</h2>
                <p className="text">{data.datoCmsCtaContact.mainText}</p>
                <span>{data.datoCmsCtaContact.subtext}</span>
                <p 
                  className="text"
                  dangerouslySetInnerHTML={{ __html: data.datoCmsCtaContact.contact }}
                />
              </div>
            </div>
          </div>
        );
      }}
    ></StaticQuery>
  );
};

export default SubFooter;
