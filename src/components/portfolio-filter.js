import React from "react";
import Select from "react-select";

const PortfolioFilter = ({ filter, buttons }) => {
  const [options, setOptions] = React.useState([]);

  function getOptions() {
    buttons.map((item) => {
      setOptions((options) => [...options, { value: item, label: item }]);
    });
  }

  React.useEffect(() => {
    getOptions();
  }, []);

  return (
    <div className="portfolio-filter">
      <Select options={options} className="select" />
      <div className="buttons">
        <div className="grid">
          {buttons.map((cat, i) => {
            return (
              <button
                key={"fbtn_" + i}
                type="button"
                onClick={() => filter(cat)}
              >
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
