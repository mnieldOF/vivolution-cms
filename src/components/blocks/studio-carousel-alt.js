import "./studio-carousel-alt.scss";
import React, { useState, useEffect } from "react";

const SLIDE_W = 65;
const GAP = 20;
const PEEK = (100 - SLIDE_W) / 2;

const StudioCarouselAlt = ({ images = [] }) => {
  const [trackIndex, setTrackIndex] = useState(1);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  if (!images.length) return null;

  const total = images.length;
  const extended = [images[total - 1], ...images, images[0]];

  const prev = () => setTrackIndex((i) => (i <= 0 ? 0 : i - 1));
  const next = () => setTrackIndex((i) => (i >= total + 1 ? total + 1 : i + 1));

  const handleTransitionEnd = () => {
    if (trackIndex <= 0) {
      setAnimated(false);
      setTrackIndex(total);
    } else if (trackIndex >= total + 1) {
      setAnimated(false);
      setTrackIndex(1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const trackX = `calc(${PEEK - trackIndex * SLIDE_W}% - ${trackIndex * GAP}px)`;
  const dotIndex = (trackIndex - 1 + total) % total;

  return (
    <div
      className="sca"
      onKeyDown={handleKeyDown}
      tabIndex="-1"
      aria-roledescription="carousel"
      aria-label="Studio gallery"
    >
      <div className="sca-viewport">
        <div
          className="sca-track"
          style={{
            transform: `translateX(${trackX})`,
            transition: animated ? undefined : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((img, i) => {
            const isActive = i === trackIndex;
            return (
              <div
                key={i}
                className={`sca-item${isActive ? " is-active" : ""}`}
                style={{ opacity: isActive ? 1 : 0.6 }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${((i - 1 + total) % total) + 1} of ${total}`}
                aria-hidden={!isActive}
              >
                <img
                  src={img.url}
                  alt={img.alt || img.title || ""}
                  className="sca-image"
                  loading={i <= 1 ? "eager" : "lazy"}
                />
                {img.title && (
                  <div className="sca-caption">{img.title}</div>
                )}
                {img.customData?.status && (
                  <div className={`sca-status sca-status--${img.customData.status.toLowerCase()}`}>
                    {img.customData.status}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="sca-arrow sca-arrow--prev" aria-label="Previous photo" onClick={prev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="sca-arrow sca-arrow--next" aria-label="Next photo" onClick={next}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="sca-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`sca-dot${i === dotIndex ? " is-active" : ""}`}
            onClick={() => setTrackIndex(i + 1)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StudioCarouselAlt;
