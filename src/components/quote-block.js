import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Img from "../images/oxford.png";
import Icon from "./icon";

const RotateIcon = styled(Icon)`
  transform: rotate(180deg);
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const QuoteBlock = ({ companyImage, data }) => {
  const logo = getImage(companyImage);
  const { person, role, quote } = data.links[0];

  console.log(person);
  return (
    <div className="quote-block">
      <div className="left">
        <GatsbyImage image={logo} />
      </div>
      <div className="right">
        <div className="content-container">
          <div className="flex">
            <div className="quote-icons">
              <Icon icon="quote" size="25px" />
              <RotateIcon icon="quote" size="25px" />
            </div>
            <p className="text">{quote}</p>
            <span className="quotee">
              {person} <span className="position">{role}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
