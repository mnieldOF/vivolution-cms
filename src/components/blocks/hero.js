import "./hero.scss";
import React from "react";

const Hero = ({ title, subtitle, subtext, dark, children }) => {
  if (dark) {
    return (
      <section className="profile-hero">
        <div className="profile-hero-inner">
          {subtitle && <p className="profile-eyebrow">{subtitle}</p>}
          <h1 className="profile-hero-headline">{title}</h1>
          {subtext && <p className="profile-hero-title">{subtext}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        {subtitle && <p className="hero-eyebrow">{subtitle}</p>}
        <h1 className="hero-headline">{title}</h1>
        {subtext && <p className="hero-body">{subtext}</p>}
        {children}
      </div>
    </section>
  );
};

export default Hero;
