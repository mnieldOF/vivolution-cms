import React from "react";
import Icon from "./icon";
import { Link } from "gatsby";
import FooterImage1 from "../images/lw.png";
import FooterImage2 from "../images/sbp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-container">
        <div className="flex">
          <div className="left">
            <Icon icon="vivo-logo" width="150px" className="logo" />
            <ul className="menu">
              <li>
              <Link to={`/`}>Home</Link>
              </li>
              <li>
              <Link to={`/about`}>About</Link>
              </li>
              <li>
              <Link to={`/services`}>Services</Link>
              </li>
              <li>
              <Link to={`/contact`}>Contact us</Link>
              </li>
              <li>
              <Link to={`/blog`}>Blog</Link>
              </li>
            </ul>
            <ul className="social-menu">
              <li>
                <a href="">
                  <Icon icon="twitter" color="white" width="25px" />
                </a>
              </li>
              <li>
                <a href="">
                  <Icon icon="linkedin2" color="white" width="25px" />
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="footer-logos">
              <img src={FooterImage1} alt="" />
              <img src={FooterImage2} alt="" />
            </div>
          </div>
        </div>
        <div className="lower">
          <p>14 Mitchell Lane, Suite 2, 2, Glasgow, G1 3NU</p>
          <a href="tel:0141 212 2533">0141 212 2533</a>
          <ul>
            <li>
            <Link className="footer-link" to={`/`}>Cookie policy</Link>
            </li>
            <li>
            <Link className="footer-link" to={`/`}>Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
