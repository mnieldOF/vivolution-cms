import React from "react";

const InvestmentCard = ({ heading, description }) => (
  <div className="invest-stat-card">
    <p className="invest-stat-value">{heading}</p>
    <p className="invest-stat-desc">{description}</p>
  </div>
);

export default InvestmentCard;
