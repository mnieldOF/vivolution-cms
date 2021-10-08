import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import CoverMenu from "./cover-menu";
import { motion } from "framer-motion";
import SmallLogo from "../images/vivo-icon-logo.svg";

const Header = ({ socials }) => {
  const [active, setActive] = useState(false);
  const [logoSwap, setLogoSwap] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const changeLogo = () => {
    if (window.scrollY >= 80 && window.screen.width >= 576) {
      document.getElementById("logo-id").classList.add("scrolled");
      document.getElementById("header").classList.add("scrolled");
    } else {
      document.getElementById("logo-id").classList.remove("scrolled");
      document.getElementById("header").classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLogo);
  });

  return (
    <>
      <div className="vivo-header" id="header">
        <div className="container">
          <div
            id="logo-id"
            className={`logo-container ${active ? "active" : ""}`}
          >
            <Link to={`/`}>
              <Icon icon="vivo-logo-white" width="100px" className="logo" />
              <div className="logo-small">
                <img src={SmallLogo} alt="" />
              </div>
            </Link>
          </div>
          <nav className="vivo-header-nav">
            <div>
              <a
                href="/contact"
                className={`chat-cta ${active ? "active" : ""}`}
              >
                let's chat
              </a>
            </div>
            <motion.div className={`hamburger ${active ? "active" : ""}`}>
              <div className="hamburger-wrapper">
                <div className="button">
                  <button>
                    <div className="background-hamburger"></div>
                    <div className="icon-hamburger">
                      <div className="line-center"></div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="click-layer" onClick={(e) => openMenu(e)}></div>
            </motion.div>
          </nav>
          <CoverMenu active={active} socials={socials} />
        </div>
      </div>
    </>
  );
};

export default Header;
