import * as React from "react";

const ComingSoon = ({ data }) => {
  return (
    <div className="coming-soon">
      <div className="content-container">
        <div className="flex">
          <h1 className="title">{data.text}</h1>
          <img src={data.logo.url} />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
