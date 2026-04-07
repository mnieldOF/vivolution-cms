import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Icon from "./icon";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HelpBlock = ({ image }) => {
  const img = getImage(image[0].image);
  return (
    <StaticQuery
      query={graphql`
        {
          allDatoCmsQuote {
            edges {
              node {
                person
                role
                quote
                company
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="testimonials">
          <div className="content-container column">
            <div className="grid">
              <div className="left">
                <GatsbyImage
                  className="hero-img"
                  layout="fullWidth"
                  image={img}
                  alt="test"
                />
              </div>
              <div className="right">
                <Swiper
                  id="main"
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                  }}
                >
                  {data.allDatoCmsQuote.edges.map(({ node: quote }, i) => (
                    <SwiperSlide key={`slide-${i}`} className="slide">
                      <Icon icon="quote" size="45" color="#494949" />
                      <p>{quote.quote}</p>
                      <div className="client">
                        <span className="name">{quote.person}</span>
                        <span className="position">
                          {quote.role} / {quote.company}
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    ></StaticQuery>
  );
};

export default HelpBlock;
