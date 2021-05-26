import React from "react";
import Slider from "react-slick";
import PortfolioItem from "./portfolio-item";

const Test = ({ data }) => {
  console.log(data);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="test">
      <div className="content-container column">
        <div className="flex">
          <div className="left">
            <h2>Profile</h2>
          </div>
          <div className="right">
            <div className="m-slider">
              <Slider {...settings}>
                {data.map(({ node: item }) => (
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
      </div>
    </section>
  );
};

export default Test;
