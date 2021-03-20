import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FullwidthImage = ({ image }) => {
  const heroImg = getImage(image);
  return (
    <div className="fullwidth-image">
      <GatsbyImage
        className="hero-img"
        layout="fullWidth"
        image={heroImg}
        alt="test"
      />
    </div>
  );
};

export default FullwidthImage;
