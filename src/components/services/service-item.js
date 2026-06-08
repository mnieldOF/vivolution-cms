import React from "react";
import "./service-item.scss";

const ServiceItem = ({ title, teaser, category, isActive, onSelect }) => {
  return (
    <button
      type="button"
      className={`service-card${isActive ? " is-active" : ""}`}
      onClick={onSelect}
      aria-pressed={isActive}
    >
      <div className="service-card-body">
        <div className="service-card-title-row">
          <h3 className="service-card-name">{title}</h3>
          {category && (
            <span className="service-category-chip">{category}</span>
          )}
        </div>
        {teaser && <p className="service-card-tagline">{teaser}</p>}
      </div>
      <div className="service-card-footer">
        <span className="service-read-more">
          View details
          <svg
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default ServiceItem;
