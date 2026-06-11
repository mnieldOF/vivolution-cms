import React, { useRef } from "react";
import "./customer-profile-slider.scss";
import { Link } from "gatsby";
import Slider from "react-slick";
import PortfolioItem from "./portfolio-item";

const CustomerProfileSlider = ({ data }) => {
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
    <section className="detail-related">
      <div className="detail-related-inner">
        <div className="detail-related-header">
          <div>
            <p className="detail-related-eyebrow">More Case Studies</p>
            <h2 className="detail-related-headline">
              Other ventures we&apos;ve supported.
            </h2>
          </div>
          <div className="detail-related-right">
            <Link to="/our-work" className="detail-related-all">
              View our work →
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
              <PortfolioItem
                image={item.featuredImage}
                title={item.title}
                slug={item.slug}
                logo={item.logo}
                shortText={item.shortDescription}
                categories={item.customerCategory ? [item.customerCategory] : []}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerProfileSlider;
