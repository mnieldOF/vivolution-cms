import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageGallery = ({ data }) => {
  return (
    <div className="image-gallery">
      <div className="grid">
        {data.images.map((image, i) => {
          const Img = getImage(image);
          return (
            <GatsbyImage
              key={`mi-${i}`}
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
