import React from "react";
import Icon from "./icon";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GrowthBlock = ({ data, title, text }) => {
  return (
    <div className="growth-block">
      <div className="content-container column">
        <h2 className="title">{title}</h2>
        <p>{text}</p>
        <div className="grid">
          {data.edges.map(({ node: item }) => {
            console.log(item);
            const cardImg = getImage(item.cardImage);
            return (
              <Link className="item" to={`/services/${item.slug}`}>
                <GatsbyImage
                  image={cardImg}
                  alt="card image"
                  className="card-img"
                />
                <div className="logo-continaer">
                  <img src={item.logo.url} />
                </div>
                <p className="desc">{item.shortDescription}</p>
                <div className="content">
                  <Link className="button-text" to={`/services/${item.slug}`}>
                    <Icon color="white" icon="right" className="link-icon" size={14} />
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
