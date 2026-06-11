import "./office-card.scss";
import React from "react";
import { Link } from "gatsby";

const OfficeCard = ({ title, description, features, capacity, index }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="office-card">
      {capacity && <span className="office-card-capacity">{capacity}</span>}
      <p className="office-card-num">{num}</p>
      <h3 className="office-card-title">{title}</h3>
      <p className="office-card-desc">{description}</p>
      {features && (
        <ul className="office-card-features">
          {features.split('\n').filter(f => f.trim()).map((f, i) => (
            <li key={i}>{f.replace(/^\*\s*/, '').trim()}</li>
          ))}
        </ul>
      )}
      <Link to="/find-us" className="office-card-link">
        Enquire
        <svg viewBox="0 0 24 24">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </Link>
    </div>
  );
};

export default OfficeCard;
