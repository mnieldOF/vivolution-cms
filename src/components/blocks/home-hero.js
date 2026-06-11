import "./hero.scss";
import React from "react";
import { Link } from "gatsby";

const HomeHero = ({ eyebrow, title, body }) => {
  const scrollToSectors = (event) => {
    const sectorSelector = document.getElementById("sector-selector");

    if (!sectorSelector) {
      return;
    }

    event.preventDefault();
    const headerOffset = 72;
    const targetTop =
      sectorSelector.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <h1 className="hero-headline">{title}</h1>
        {body && <p className="hero-body">{body}</p>}
        <div className="hero-actions">
          <a href="mailto:hello@vivolution.co.uk" className="btn-cta">
            Let&apos;s chat
          </a>
          <Link to="/how-we-help" className="btn-ghost">
            How we help
          </Link>
        </div>
        <a
          href="#sector-selector"
          className="hero-scroll-cue"
          onClick={scrollToSectors}
        >
          <span>Explore your journey</span>
          <span className="hero-scroll-cue-mark" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
