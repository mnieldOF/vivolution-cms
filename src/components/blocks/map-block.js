import "./map-block.scss";
import React from "react";

const MapBlock = ({ info }) => {
  const { title, addressNode } = info[0];

  return (
    <section className="map-block">
      <div className="map-inner">
        <div>
          <p className="map-eyebrow">Where to Find Us</p>
          <h2 className="map-headline">{title}</h2>
          <address
            className="map-address"
            dangerouslySetInnerHTML={{
              __html: addressNode.childMarkdownRemark.html,
            }}
          />
          <div className="map-contact-links">
            <a href="tel:01412122533" className="map-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              0141 212 2533
            </a>
            <a href="mailto:hello@vivolution.co.uk" className="map-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              hello@vivolution.co.uk
            </a>
          </div>
          <a
            href="https://maps.google.com/?q=14+Mitchell+Lane+Glasgow+G1+3NU"
            target="_blank"
            rel="noreferrer"
            className="map-directions"
          >
            Get directions &rarr;
          </a>
        </div>
        <div className="map-embed">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-4.2620%2C55.8585%2C-4.2520%2C55.8621&layer=mapnik&marker=55.8603%2C-4.2553"
            allowFullScreen
            loading="lazy"
            title="Vivolution office — 14 Mitchell Lane Glasgow"
          />
        </div>
      </div>
    </section>
  );
};

export default MapBlock;
