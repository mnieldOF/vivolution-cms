import React from "react";
import Slider from "react-slick";
import PortfolioItem from "./portfolio-item";

const Test = ({ data }) => {
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="test">
      <div className="content-container column">
        <div className="flex">
          <div className="left">
            <h2>Profile</h2>
          </div>
          <div className="right">
            <Slider {...settings}>
              {data.edges.map(({ node: item }) => (
                <PortfolioItem
                  image={item.featuredImage}
                  title={item.title}
                  slug={item.slug}
                  logo={item.logo}
                  shortText={item.shortDescription}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
