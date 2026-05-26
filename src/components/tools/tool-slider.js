import React, { useRef } from "react";
import "../portfolio/customer-profile-slider.scss";
import "./tool-slider.scss";
import { Link } from "gatsby";
import Slider from "react-slick";
import ToolItem from "./tool-item";

const ToolSlider = ({ data, light }) => {
  const sliderRef = useRef();

  if (!data?.length) return null;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className={`detail-related${light ? " detail-related--light" : ""}`}>
      <div className="detail-related-inner">
        <div className="detail-related-header">
          <div>
            <p className="detail-related-eyebrow">More Tools</p>
            <h2 className="detail-related-headline">
              Other tools you might find useful.
            </h2>
          </div>
          <div className="detail-related-right">
            <Link to="/tools" className="detail-related-all">
              View all tools →
            </Link>
            <div className="detail-related-arrows">
              <button
                className="arrow-btn"
                onClick={() => sliderRef.current.slickPrev()}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                className="arrow-btn"
                onClick={() => sliderRef.current.slickNext()}
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {data.map(({ node: item }, i) => (
            <div key={item.slug || i}>
              <ToolItem
                title={item.title}
                slug={item.slug}
                shortText={item.shortDescription}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ToolSlider;
