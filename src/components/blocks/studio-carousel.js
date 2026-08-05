import "./studio-carousel.scss";
import React, { useState } from "react";

const StudioCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const go = (i) => setCurrent((i + images.length) % images.length);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(current + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1); }
  };

  return (
    <div
      className="studio-carousel"
      onKeyDown={handleKeyDown}
      tabIndex="-1"
      aria-roledescription="carousel"
      aria-label="Studio gallery"
    >
      <div className="sc-stage">
        {images.map((img, i) => (
          <div
            key={i}
            className={`sc-slide${i === current ? " is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
            aria-hidden={i !== current}
          >
            <img
              src={img.url}
              alt={img.alt || img.title || ""}
              className="sc-image"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {img.title && (
              <div className="sc-caption">{img.title}</div>
            )}
            {img.customData?.status && (
              <div className={`sc-status sc-status--${img.customData.status.toLowerCase()}`}>
                {img.customData.status}
              </div>
            )}
          </div>
        ))}

        <button
          className="sc-arrow sc-arrow--prev"
          aria-label="Previous photo"
          onClick={() => go(current - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="sc-arrow sc-arrow--next"
          aria-label="Next photo"
          onClick={() => go(current + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="sc-thumbs" role="tablist" aria-label="Gallery thumbnails">
        {images.map((img, i) => (
          <button
            key={i}
            className={`sc-thumb${i === current ? " is-active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Show photo ${i + 1}${img.title ? `: ${img.title}` : ""}`}
            role="tab"
            aria-selected={i === current}
          >
            <img src={img.url} alt="" />
          </button>
        ))}
      </div>

      <div className="sc-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`sc-dot${i === current ? " is-active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StudioCarousel;
