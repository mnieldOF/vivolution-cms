import React, { useState } from "react";
import "./portfolio-filter.scss";

const PortfolioFilter = ({ filter, buttons }) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleFilter = (value) => {
    setActiveTab(value);
    filter(value);
  };

  return (
    <div className="portfolio-filter">
      <div className="filter-tabs">
        <button
          type="button"
          className={`filter-tab${activeTab === "All" ? " active" : ""}`}
          onClick={() => handleFilter("All")}
        >
          View all
        </button>
        {buttons.map((cat, i) => (
          <button
            key={"fbtn_" + i}
            type="button"
            className={`filter-tab${activeTab === cat ? " active" : ""}`}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilter;
