import "./hero.scss";
import React from "react";
import { Link } from "gatsby";

const HomeHero = ({ eyebrow, title, body }) => {
  return (
    <section className="hero">
      <div className="hero-inner">
        {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
        <h1 className="hero-headline">{title}</h1>
        {body && <p className="hero-body">{body}</p>}
        <div className="hero-actions">
          <Link to="/contact" className="btn-cta">Let&apos;s chat</Link>
          <Link to="/services" className="btn-ghost">Our services</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
