import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

const GetInTouchCTA = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          datoCmsCtaContact {
            title
            subtext
            buttonText
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
                    {data.datoCmsCtaContact.buttonText}
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

export default GetInTouchCTA;
