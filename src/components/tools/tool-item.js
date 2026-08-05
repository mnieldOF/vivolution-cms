import React from "react";
import "./tool-item.scss";
import { Link } from "gatsby";

const ToolItem = ({ title, shortText, slug, subtitle, available, iconName }) => {
  const showAvailable = available === true;
  const showComingSoon = available === false;
  const showBadge = showAvailable || showComingSoon;

  return (
    <Link to={`/toolbox/${slug}`} className="tool-card">
      {(iconName || showBadge) && (
        <div className="tool-card-top">
          {iconName && (
            <div className="tool-icon">
              <span className="material-symbols-outlined" aria-hidden="true">{iconName}</span>
            </div>
          )}
          {showAvailable && (
            <span className="tool-badge tool-badge--live">Available</span>
          )}
          {showComingSoon && (
            <span className="tool-badge tool-badge--soon">Coming soon</span>
          )}
        </div>
      )}
      <h3 className="tool-card-name">{title}</h3>
      {shortText && <p className="tool-card-tagline">{shortText}</p>}
      {subtitle && <div className="tool-card-for">{subtitle}</div>}
      <span className="tool-read-more">
        Read more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H9M17 7V15" />
        </svg>
      </span>
    </Link>
  );
};

export default ToolItem;
