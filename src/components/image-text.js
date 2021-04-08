import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageText = ({ title, text, image }) => {
  const Image = getImage(image);
  return (
    <div className="image-text">
      <div className="content-container">
        <div className="grid">
          <div className="left">
            <h2 className="title">{title}</h2>
            <p className="text">{text}</p>
          </div>
          <div className="right">
            <GatsbyImage
              className="img"
              layout="fullWidth"
              image={Image}
              alt="test"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
