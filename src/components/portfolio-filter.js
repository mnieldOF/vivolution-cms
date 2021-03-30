import React from "react";
import Select from "react-select";

const options = [
  { value: "health-care", label: "Health care" },
  { value: "fintech", label: "fintech" },
  { value: "digital", label: "Digital" },
];

const PortfolioFilter = ({ filter, buttons }) => {
  return (
    <div className="portfolio-filter">
      <Select options={options} className="select" />
      <div className="buttons">
        <div className="grid">
          {buttons.map((cat, i) => {
            return (
              <button type="button" onClick={() => filter(cat)}>
                {cat}
              </button>
            );
          })}
        </div>
        <div className="cta">
          <button type="button" onClick={() => filter("All")}>
            view all
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
