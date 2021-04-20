import React from "react";
import Icon from "./icon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-container">
        <div className="flex">
          <ul className="left-menu">
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
          <Icon icon="vivo-logo" size="150px" className="logo" />
          <Icon icon="v-logo" size="30px" className="logo-small" />
          <ul className="right-menu">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
