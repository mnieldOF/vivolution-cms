import "./tagline.scss";
import React from "react";

const Tagline = ({ perks, pink }) => {
  if (!perks) return null;

  const items = perks
    .split("\n")
    .filter((p) => p.trim())
    .map((p) => p.replace(/^\*\s*/, "").trim());

  return (
    <div className={`tagline${pink ? " tagline--grid" : ""}`}>
      {items.map((perk) => (
        <div className={`tagline-perk${pink ? " tagline-perk--pink" : ""}`} key={perk}>
          <svg viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {perk}
        </div>
      ))}
    </div>
  );
};

export default Tagline;
