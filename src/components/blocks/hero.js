import "./hero.scss";
import React from "react";

const Hero = ({ title, subtitle, subtext, children }) => {
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
