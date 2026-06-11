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
            <a href="mailto:hello@vivolution.co.uk" className="map-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
            src="https://www.openstreetmap.org/export/embed.html?bbox=-4.261085987091065%2C55.85719594756384%2C-4.249767065048219%2C55.8623922747338&amp;layer=mapnik&amp;marker=55.85979419802539%2C-4.255426526069641"
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
