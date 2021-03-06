import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";

import Icon from "./icon";
import img from "../images/help-bg.png";
import imgMob from "../images/help-card-bg.png";

const HelpBlock = ({ data }) => {
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="help-block">
      <div className="content-container column">
        <h2 className="title">Who we help</h2>
        <div className="m-slider">
          <div className="grid">
            {data.edges.map(({ node: item }) => (
              <Link to={`/sectors/${item.slug}`} className="help-card">
                <div className="inner">
                  <picture>
                    <source media="(min-width: 0px)" srcset={imgMob} />
                    <img className="card-img" src={imgMob} />}
                  </picture>
                  <div className="content">
                    <div className="icon">
                      <img src={item.icon.url} alt="" />
                    </div>
                    <h4 className="c-title">{item.title}</h4>
                    <p>{item.shortDescription}</p>
                    <Link to={`/sectors/${item.slug}`}>
                      <Icon icon="right" size="20" color="white" />
                      Find out more
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Slider {...settings}>
            {data.edges.map(({ node: item }) => (
              <Link to={`/sectors/${item.slug}`} className="help-card">
                <div className="inner">
                  <picture>
                    <source media="(min-width: 0px)" srcset={imgMob} />
                    <img className="card-img" src={imgMob} />}
                  </picture>
                  <div className="content">
                    <div className="icon">
                      <img src={item.icon.url} alt="" />
                    </div>
                    <h4 className="c-title">{item.title}</h4>
                    <p>{item.shortDescription}</p>
                    <Link to={`/sectors/${item.slug}`}>
                      <Icon icon="right" size="20" color="white" />
                      Find out more
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HelpBlock;
