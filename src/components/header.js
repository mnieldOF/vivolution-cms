import React, { useState } from "react";
import Icon from "./icon";
import CoverMenu from "./cover-menu";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className={`logo-container ${active ? "active" : ""}`}>
            <Icon icon="vivo-logo" width="100px" className="logo" />
            <Icon icon="v-logo" size="30px" className="logo-small" />
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
