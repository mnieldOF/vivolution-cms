import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Partners = ({ related }) => {
  return (
    <div className="partners">
      <div className="content-container">
        <div className="grid">
          {related.map(({ node: partner, i }) => {
            const image = getImage(partner.partnerImage);
            return (
              <div className="partner-img" key={i}>
                <GatsbyImage image={image} alt="test" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
