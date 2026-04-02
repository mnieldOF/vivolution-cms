import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const SubFooter = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          datoCmsCtaContact {
            title
            subtext
            contact
            mainText
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
                <button>
                  <Link to={`/contact`}>
                    {data.datoCmsCtaContact.contact}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        );
      }}
    ></StaticQuery>
  );
};

export default SubFooter;
