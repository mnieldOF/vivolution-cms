import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItem from "./portfolio-item";
import img from "../images/bg-ex.png";
import SliderImg from "../images/slider-bg.png";

const Slider = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
