import * as React from "react";

const History = ({ data }) => {
  return (
    <div className="history">
      <div className="content-container">
        <div className="grid">
          <div className="left">
            <h3 className="title">{data.title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: data.text,
              }}
            />
          </div>
          <div className="right">
            <img src={data.image.url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;