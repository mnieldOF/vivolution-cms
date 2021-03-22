import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Curve from "../images/Header-Curve-01.svg";

const Hero = ({ title, image }) => {
  const heroImg = getImage(image);
  return (
    <div className="hero">
      <GatsbyImage
        className="hero-img"
        layout="fullWidth"
        image={heroImg}
        alt="test"
      />
      <img src={Curve} className="curve" alt="" />
      <div className="container">
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};

export default Hero;
