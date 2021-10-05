import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Icon from "./icon";

const PortfolioItem = ({ image, title, logo, shortText, slug }) => {
  console.log("slug", slug);
  console.log(shortText);
  const featImg = getImage(image);
  const profileLogo = getImage(logo);
  return (
    <Link to={`/portfolio/${slug}`} className="portfolio-item">
      <div className="top">
        <GatsbyImage className="hero-img" image={featImg} alt="test" />
      </div>
      <div className="bottom">
        <div className="inner">
          <div className="flex">
            {profileLogo ? (
              <>
                <div className="left">
                  <h4>{title}</h4>
                </div>
                <div className="right">
                  <GatsbyImage image={profileLogo} alt="test" />
                </div>
              </>
            ) : (
              <h4>{title}</h4>
            )}
          </div>
          <div className="text body">
            <p>{shortText}</p>
          </div>
          <div className="text">
            <p>{shortText}</p>
          </div>
          <div className="link">
            <div>
              <Icon icon="right" size="20" />
              read more
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
