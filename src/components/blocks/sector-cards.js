import "./sector-cards.scss";
import React from "react";
import { Link } from "gatsby";

const SECTORS = [
  {
    number: "01",
    label: "Start Up",
    text: "You're building something. Maybe it's still an idea, maybe you've already taken the first steps. Either way, you're at the start of the journey and you want to do it properly.",
    slug: "start-up",
  },
  {
    number: "02",
    label: "Scale Up",
    text: "You've got something working. Now the challenge is making it grow without breaking what you've built.",
    slug: "scale-up",
  },
  {
    number: "03",
    label: "Growth",
    text: "You're established, you're generating revenue, and you're ready for the next level — whether that's scaling up, going international, or bringing in serious investment.",
    slug: "growth",
  },
  {
    number: "04",
    label: "Exit",
    text: "You've built something valuable and you're starting to think about what comes next — for the business, and for yourself.",
    slug: "exit",
  },
  {
    number: "05",
    label: "Portfolio Management & Acquisition",
    text: "You’re backing or managing businesses and you need a team that can get in alongside them, not just advise from a distance.",
    slug: "portfolio-management-and-acquisition",
  },
];

const SectorCards = () => {
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
          {SECTORS.map((sector) => (
            <Link
              key={sector.slug}
              to={`/sectors?sector=${sector.slug}`}
              className="sector-card"
            >
              <div className="sector-card-content">
                <span className="sector-card-number">{sector.number}</span>
                <div className="sector-card-body">
                  <h3 className="sector-card-label">{sector.label}</h3>
                  <p className="sector-card-text">{sector.text}</p>
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
