import React from "react";
import "./portfolio-item.scss";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioItem = ({ image, title, logo, shortText, slug }) => {
  const featImg = getImage(image);
  const profileLogo = getImage(logo);

  return (
    <Link to={`/portfolio/${slug}`} className="portfolio-card">
      <div className="portfolio-card-image">
        {featImg && (
          <GatsbyImage image={featImg} alt={title} className="portfolio-card-gatsby-image" />
        )}
      </div>
      <div className="portfolio-card-body">
        <div className="portfolio-card-name-row">
          <h3 className="portfolio-card-name">{title}</h3>
          {profileLogo && (
            <GatsbyImage image={profileLogo} alt={title} className="portfolio-card-logo" />
          )}
        </div>
        {shortText && <p className="portfolio-card-tagline">{shortText}</p>}
      </div>
      <div className="portfolio-card-footer">
        <span className="portfolio-read-more">
          Read more
          <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default PortfolioItem;
