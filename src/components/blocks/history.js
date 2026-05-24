import "./history.scss";
import * as React from "react";

const History = ({ data }) => {
  return (
    <div className="history">
      <div className="content-container">
        <div className="grid">
          <div className="left">
            <p className="team-eyebrow">Our story</p>
            <h3 className="team-headline">{data.title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: data.text,
              }}
            />
          </div>
          <div className="right">
            {data.image !== null ? <img src={data.image.url} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
