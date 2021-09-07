import * as React from "react";

const Values = ({ data }) => {
  console.log("value", data.values.links);
  return (
    <div className="values">
      <div className="content-container">
        <div className="grid">
          {data.values.links.map((item) => {
            console.log(item);
            return (
              <div className="item">
                <img src={item.image.url} alt="" />
                <h3>{item.title}</h3>
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
