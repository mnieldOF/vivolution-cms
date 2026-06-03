import "./hero.scss";
import React from "react";
import MarkdownText from "./markdown-text";

const Hero = ({ title, subtitle, subtext, subtextHtml, dark, children }) => {
  if (dark) {
    return (
      <section className="profile-hero">
        <div className="profile-hero-inner">
          {subtitle && <p className="profile-eyebrow">{subtitle}</p>}
          <h1 className="profile-hero-headline">{title}</h1>
          <MarkdownText
            className="profile-hero-title"
            html={subtextHtml}
            text={subtext}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        {subtitle && <p className="hero-eyebrow">{subtitle}</p>}
        <h1 className="hero-headline">{title}</h1>
        <MarkdownText className="hero-body" html={subtextHtml} text={subtext} />
        {children}
      </div>
    </section>
  );
};

export default Hero;
