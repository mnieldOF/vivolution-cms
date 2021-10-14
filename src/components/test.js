import React, { useRef } from "react";
import Icon from "./icon";
import Slider from "react-slick";
import PortfolioItem from "./portfolio-item";
import Img from "../images/slider-bg.png";

const Test = ({ data, image }) => {
  const sliderRef = useRef();

  const renderArrows = () => {
    return (
      <div className="arrows">
        <button onClick={() => sliderRef.current.slickPrev()}>
          <Icon color="black" size="20px" icon="chevron-right" />
        </button>
        <button onClick={() => sliderRef.current.slickNext()}>
          <Icon color="black" size="20px" icon="chevron-right" />
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    edgeFriction: 0.2,
    touchThreshold: 20,
    swipeToSlide: true,
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
    <section className={`test ${image ? "image" : null}`}>
      {image ? <img className="bgImage" src={Img} /> : null}
      <div className="content-container column">
        <div className="flex">
          <div className="left">
            <h2 className="title">Profile</h2>
            {renderArrows()}
          </div>
          <div className="right">
            <div className="m-slider">
              <div className="grid">
                {data.map(({ node: item }, i) => (
                  <PortfolioItem
                    key={`slide-${i}`}
                    image={item.featuredImage}
                    title={item.title}
                    slug={item.slug}
                    logo={item.logo}
                    shortText={item.shortDescription}
                  />
                ))}
              </div>
              <Slider {...settings} ref={sliderRef}>
                {data.map(({ node: item }, i) => (
                  <PortfolioItem
                    key={`slide-${i}`}
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
