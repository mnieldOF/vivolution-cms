import React from "react";
import Icon from "./icon";
import { Link } from "gatsby";
import Img from "../images/growth-bg.png";
import Img2 from "../images/growth2-bg.png";
import Img3 from "../images/growth3-bg.png";
import Img4 from "../images/growth4-bg.png";
import Img5 from "../images/growth5-bg.png";
import Img6 from "../images/growth6-bg.png";

const GrowthBlock = ({ data }) => {
  console.log(data);
  return (
    <div className="growth-block">
      <div className="content-container column">
        <h2 className="title">Supporting Growth</h2>
        <p>
          From Devs to Directors, bringing you a wealth of experience and
          expertise to build your business. On your terms. Invested in your
          business and there for the long term, no matter how bumpy the ride.
        </p>
        <div className="grid">
          {data.edges.map(({ node: item }) => {
            console.log(item);
            return (
              <div className="item">
                <img src={item.logo.url} />
                <div className="content">
                  <Link to={`services/${item.slug}`}>
                    <Icon color="white" icon="right" size={20} />
                    Find out more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrowthBlock;
