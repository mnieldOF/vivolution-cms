import "./hero-carousel.scss";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";

const AUTO_ADVANCE_MS = 10000;

const HeroCarousel = ({ content = [] }) => {
  const slides = content
    .filter((item) => item.__typename === "DatoCmsHeroBanner" && item.image?.url)
    .map((item) => ({
      id: item.id,
      image: item.image.url,
      eyebrow: item.subtitle,
      headline: item.title,
      body: item.subText,
    }));

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const progressRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const el = progressRef.current;
    if (el) {
      el.style.transition = "none";
      el.style.width = "0";
      if (!reduced && !paused) {
        // eslint-disable-next-line no-unused-expressions
        el.offsetWidth; // force reflow so the reset is committed before animating
        el.style.transition = `width ${AUTO_ADVANCE_MS}ms linear`;
        el.style.width = "100%";
      }
    }

    if (!reduced && !paused) {
      const timer = setInterval(
        () => setIndex((prev) => (prev + 1) % slides.length),
        AUTO_ADVANCE_MS
      );
      return () => clearInterval(timer);
    }
  }, [index, paused, slides.length]);

  if (slides.length === 0) return null;

  const goTo = (i) => {
    setIndex((i + slides.length) % slides.length);
    setPaused(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1); }
  };

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Homepage highlights"
      tabIndex="-1"
      onKeyDown={handleKeyDown}
    >
      {slides.map((slide, i) => (
        <article
          key={slide.id}
          className={`hc-slide${index === i ? " is-active" : ""}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}`}
        >
          <img
            className="hc-image"
            src={slide.image}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="hc-scrim" />
          <div className="hc-content">
            <p className="hc-eyebrow">{slide.eyebrow}</p>
            {i === 0 ? (
              <h1 className="hc-headline">{slide.headline}</h1>
            ) : (
              <h2 className="hc-headline">{slide.headline}</h2>
            )}
            <p className="hc-sub">{slide.body}</p>
            <div className="hc-actions">
              <a href="mailto:hello@vivolution.co.uk" className="hc-btn hc-btn--primary">
                Let&apos;s chat
              </a>
              <Link to="/how-we-help" className="hc-btn hc-btn--ghost">
                How we help
              </Link>
            </div>
          </div>
        </article>
      ))}

      <button
        className="hc-arrow hc-arrow--prev"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="hc-arrow hc-arrow--next"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hc-controls">
        <button
          className="hc-pause"
          aria-label={paused ? "Play carousel" : "Pause carousel"}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          )}
        </button>
        <div className="hc-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={`hc-dot${index === i ? " is-active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      <div className="hc-progress" ref={progressRef} />

      <p className="visually-hidden" aria-live="polite">
        {paused ? "Carousel paused" : `Slide ${index + 1} of ${slides.length}`}
      </p>
    </section>
  );
};

export default HeroCarousel;
