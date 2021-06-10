import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import CoverMenu from "./cover-menu";
import { motion } from "framer-motion";

const Header = () => {
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
      <div className="header" id="header">
        <div className="container">
          <div
            id="logo-id"
            className={`logo-container ${active ? "active" : ""}`}
          >
            <Link to={`/`}>
              <Icon icon="vivo-logo" width="100px" className="logo" />
              <Icon icon="v-logo" size="30px" className="logo-small" />
            </Link>
          </div>
          <nav>
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
        </div>
      </div>
      <CoverMenu active={active} />
    </>
  );
};

export default Header;
