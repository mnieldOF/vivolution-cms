import React from "react";
import "./detail-quote.scss";

const DetailQuote = ({ quote, person, role, company }) => (
  <blockquote className="detail-quote">
    <p>{quote}</p>
    <cite>
      &mdash; {person}
      {role ? `, ${role}` : ""}
      {company ? `, ${company}` : ""}
    </cite>
  </blockquote>
);

export default DetailQuote;
