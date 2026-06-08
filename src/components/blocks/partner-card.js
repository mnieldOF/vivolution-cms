import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PartnerCard = ({ title, image }) => {
  const partnerImage = getImage(image);

  return (
    <div className="invest-partner-card">
      {partnerImage ? (
        <GatsbyImage
          className="invest-partner-logo"
          image={partnerImage}
          alt={title}
          objectFit="contain"
        />
      ) : (
        <p className="invest-partner-name">{title}</p>
      )}
    </div>
  );
};

export default PartnerCard;
