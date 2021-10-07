import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Curve from "../images/Header-Curve-01.svg";

const Hero = ({ title, image, logo, children }) => {
  const heroImg = getImage(image);
  return (
    <div className="hero">
      <div className="hero-image">
        {children ? (
          children
        ) : heroImg ? (
          <GatsbyImage
            className="hero-img"
            layout="fullWidth"
            image={heroImg}
            alt="test"
          />
        ) : (
          <img src={image} alt="" className="hero-img" />
        )}
        s
      </div>

      <img src={Curve} className="curve" alt="" />
      <div className="content-container">
        {logo ? (
          <div className="logo-container">
            <img src={logo.url} alt="" className="logo" />
          </div>
        ) : (
          <h1 className="title">{title}</h1>
        )}
      </div>
    </div>
  );
};

export default Hero;
