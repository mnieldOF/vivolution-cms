import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Partners = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allDatoCmsPartner(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                partnerImage {
                  gatsbyImageData
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="partners">
          <div className="content-container">
            <div className="grid">
              {data.allDatoCmsPartner.edges.map(({ node: partner, i }) => {
                const image = getImage(partner.partnerImage);
                return <GatsbyImage image={image} alt="test" />;
              })}
            </div>
          </div>
        </div>
      )}
    ></StaticQuery>
  );
};

export default Partners;
