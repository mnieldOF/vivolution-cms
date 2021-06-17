import React, { useRef } from "react";
import Slider from "react-slick";
import PortfolioItem from "./portfolio-item";

const Test = ({ data }) => {
  const sliderRef = useRef();
  console.log(sliderRef);

  // function next() {
  //   slider.slickNext();
  // }
  const renderArrows = () => {
    return (
      <div className="arrows">
        <button onClick={() => sliderRef.current.slickPrev()}>Prev</button>
        <button onClick={() => sliderRef.current.slickNext()}>Next</button>
      </div>
    );
  };
  console.log(data);
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
    <section className="test">
      <div className="content-container column">
        <div className="flex">
          <div className="left">
            <h2>Profile</h2>
            {renderArrows()}
          </div>
          <div className="right">
            <div className="m-slider">
              <div className="grid">
                {data.map(({ node: item }) => (
                  <PortfolioItem
                    image={item.featuredImage}
                    title={item.title}
                    slug={item.slug}
                    logo={item.logo}
                    shortText={item.shortDescription}
                  />
                ))}
              </div>
              <Slider {...settings} ref={sliderRef}>
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
