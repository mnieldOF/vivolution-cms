import React from "react";
import { Link } from "gatsby";

import Icon from "./icon";

const HelpBlock = ({ data }) => {
  return (
    <section className="help-block white">
      <div className="content-container column">
        <div className="grid">
          {data.edges.map(({ node: item }, i) => (
            <div className="help-card" key={"hb_" + i}>
              <Link to={`/sectors/${item.slug}`}>
                <div className="inner">
                  <div className="content">
                    <div className="icon">
                      <img src={item.icon.url} alt="" />
                    </div>
                    <h4 className="c-title">{item.title}</h4>
                    <p>{item.shortDescription}</p>
                    <div className="fake">
                      <Icon icon="right" size="20" color="#146380" />
                      Find out more
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpBlock;
