import React from "react";
import Icon from "./icon";
import { Link } from "gatsby";

const GrowthBlock = ({ data, title, text }) => {
  return (
    <div className="growth-block">
      <div className="content-container column">
        <h2 className="title">{title}</h2>
        <p>{text}</p>
        <div className="grid">
          {data.edges.map(({ node: item }) => {
            console.log(item);
            return (
              <Link className="item" to={`services/${item.slug}`}>
                <img src={item.logo.url} />
                <div className="content">
                  <Link to={`services/${item.slug}`}>
                    <Icon color="white" icon="right" size={20} />
                    Find out more
                  </Link>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrowthBlock;
