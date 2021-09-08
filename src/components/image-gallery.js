import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageGallery = ({ data }) => {
  console.log("gall", data);
  return (
    <div className="image-gallery">
      <div className="grid">
        {data.images.map((image) => {
          const Img = getImage(image);
          return (
            <GatsbyImage
              className="hero-img"
              layout="fullWidth"
              image={Img}
              alt="test"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
