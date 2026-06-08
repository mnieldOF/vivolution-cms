import "./sector-cards.scss";
import React from "react";
import { Link } from "gatsby";

const SECTOR_ORDER = [
  "start-up",
  "scale-up",
  "growth",
  "exit",
  "portfolio-management-and-acquisition",
];

const sortSectors = (sectors) =>
  [...sectors].sort((a, b) => {
    const aIndex = SECTOR_ORDER.indexOf(a.node.slug);
    const bIndex = SECTOR_ORDER.indexOf(b.node.slug);

    return aIndex - bIndex;
  });

const SectorCards = ({ sectors }) => {
  const orderedSectors = sortSectors(sectors);

  return (
    <section className="sector-cards" id="sector-selector">
      <div className="sector-cards-inner">
        <div className="sector-cards-header">
          <p className="sector-cards-eyebrow">Who We Work With</p>
          <h2 className="sector-cards-headline">
            Where are you on your journey?
          </h2>
        </div>
        <div className="sector-cards-grid">
          {orderedSectors.map(({ node: sector }, index) => (
            <Link
              key={sector.slug}
              to={`/sectors?sector=${sector.slug}`}
              className="sector-card"
            >
              <div className="sector-card-content">
                <span className="sector-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="sector-card-body">
                  <h3 className="sector-card-label">{sector.cardTitle}</h3>
                  <p className="sector-card-text">{sector.cardDescription}</p>
                </div>
                <div className="sector-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="sector-card-fill" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorCards;
