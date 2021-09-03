import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Icon from "./icon";
import img from "../images/help-bg.png";
import imgMob from "../images/help-bg-mob.png";
import img2 from "../images/ex-bg.png";

SwiperCore.use([Pagination]);

const HelpBlock = () => {
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
            <h2 className="title">What our Customers Say</h2>
            <div className="grid">
              <div className="left">
                <img src={img2} />
              </div>
              <div className="right">
                <Swiper id="main" pagination>
                  {data.allDatoCmsQuote.edges.map(({ node: quote, i }) => (
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
