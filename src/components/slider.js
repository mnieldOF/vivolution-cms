import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItem from "./portfolio-item";
import img from "../images/bg-ex.png";
import SliderImg from "../images/slider-bg.png";

const ProfileSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = useStaticQuery(graphql`
    {
      allDatoCmsCustomerProfile {
        edges {
          node {
            featuredImage {
              gatsbyImageData
            }
            title
            logo {
              gatsbyImageData(width: 100)
            }
            slug
            shortDescription
          }
        }
      }
    }
  `);
  return (
    <div className="slider">
      <picture>
        <source media="(min-width: 960px)" srcset={img} />
        <img className="img" src={img} />
      </picture>
      <div className="content-container">
        <div className="grid">
          <div className="left">
            <h2 className="title">Case studies</h2>
          </div>
          <div className="right">
            <Slider {...settings}>
              {data.allDatoCmsCustomerProfile.edges.map(({ node: item }) => {
                console.log(item.logo);
                return (
                  <PortfolioItem
                    image={item.featuredImage}
                    title={item.title}
                    slug={item.slug}
                    logo={item.logo}
                    shortText={item.shortDescription}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSlider;
