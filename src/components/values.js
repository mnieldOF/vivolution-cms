import * as React from "react";

const Values = ({ data }) => {
  return (
    <div className="values">
      <div className="content-container">
        <div className="grid">
          {data.values.links.map((item, i) => {
            return (
              <div className="item" key={i}>
                <img src={item.image.url} alt="" />
                <h3 className="title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Values;
