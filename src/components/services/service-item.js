import React from "react";
import "./service-item.scss";
import { Link } from "gatsby";

const ServiceItem = ({ title, shortText, shortTextHtml, slug, category }) => {
  return (
    <Link to={`/services/${slug}`} className="service-card">
      <div className="service-card-body">
        <div className="service-card-title-row">
          <h3 className="service-card-name">{title}</h3>
          {category && <span className="service-category-chip">{category}</span>}
        </div>
        {shortTextHtml ? (
          <div
            className="service-card-tagline"
            dangerouslySetInnerHTML={{ __html: shortTextHtml }}
          />
        ) : (
          shortText && <p className="service-card-tagline">{shortText}</p>
        )}
      </div>
      <div className="service-card-footer">
        <span className="service-read-more">
          Read more
          <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ServiceItem;
