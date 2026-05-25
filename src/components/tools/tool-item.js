import React from "react";
import "./tool-item.scss";
import { Link } from "gatsby";

const ToolItem = ({ title, shortText, slug, subtitle }) => {
  return (
    <Link to={`/tools/${slug}`} className="tool-card">
      <div className="tool-card-body">
        <h3 className="tool-card-name">{title}</h3>
        {shortText && <p className="tool-card-tagline">{shortText}</p>}
        {subtitle && <p className="tool-card-subtitle">{subtitle}</p>}
      </div>
      <div className="tool-card-footer">
        <span className="tool-read-more">
          Read more
          <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ToolItem;
