import React from "react";
import Icon from "./icon";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GrowthBlock = ({ data }) => {
  return (
    <div className="growth-block">
      <div className="content-container column">
        <div className="grid">
          {data.edges.map(({ node: item }, i) => {
            const cardImg = getImage(item.cardImage);
            return (
              <Link
                key={"ci_" + i}
                className="item"
                to={`/services/${item.slug}`}
              >
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
                  <div className="button-text">
                    <Icon
                      color="white"
                      icon="right"
                      className="link-icon"
                      size={14}
                    />
                    Find out more
                  </div>
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
