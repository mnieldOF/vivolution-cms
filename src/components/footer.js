import React from "react";
import Icon from "./icon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-container">
        <div className="flex">
          <Icon icon="vivo-logo" width="150px" className="logo" />
          <ul className="menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact us</a>
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
                <Icon icon="facebook" color="white" width="25px" />
              </a>
            </li>
            <li>
              <a href="">
                <Icon icon="linkedin2" color="white" width="25px" />
              </a>
            </li>
            <li>
              <a href="">
                <Icon icon="instagram" color="white" width="25px" />
              </a>
            </li>
          </ul>
          <div className="lower">
            <p>14 Mitchell Lane, Suite 2, 2, Glasgow, G1 3NU</p>
            <a tel="0141 212 2533">0141 212 2533</a>
            <ul>
              <li>
                <a href="">Cookie policy</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
