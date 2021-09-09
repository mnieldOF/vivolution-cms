import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Author = ({ author }) => {
  const img = getImage(author.profileImage);
  return (
    <div className="author">
      <div className="img">
        <GatsbyImage
          className="hero-img"
          layout="fullWidth"
          image={img}
          alt="test"
        />
      </div>
      <p>{author.name}</p>
    </div>
  );
};

export default Author;
