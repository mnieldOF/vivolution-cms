import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MapBlock = ({ info }) => {
  console.log(info);
  const img = getImage(info[0].mapImage);
  return (
    <section className="map-block">
      <div className="content-container">
        <div className="flex">
          <div className="left">
            <h3 className="title">{info[0].title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: info[0].addressNode.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className="right">
            <GatsbyImage
              className="hero-img"
              layout="fullWidth"
              image={img}
              alt="test"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapBlock;
