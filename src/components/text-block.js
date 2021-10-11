import React from "react";

const TextBlock = ({ title, text }) => {
  return (
    <section className="text-block white">
      <div className="content-container">
        <div className="box">
          <h2 className="title">{title}</h2>
          <p className="text">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
