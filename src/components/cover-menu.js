import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Icon from "./icon";

const Links = [
  { text: "Sectors", link: "/sectors" },
  { text: "Services", link: "/services" },
  { text: "Portfolio", link: "/portfolio" },
  { text: "About", link: "/about" },
  { text: "Blog", link: "/blog" },
  { text: "Contact", link: "/contact" },
];

const CoverMenu = ({ active, socials }) => {
  const OffCanvas = {
    closed: {
      x: "100vw",
      transition: {
        duration: 0,
        delay: 2,
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const Cover = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 40;
  `;

  const StyledCircle = styled(motion.div)`
    position: absolute;
    background: white;
    transform-origin: center;
    top: calc(90px - 140vw);
    right: calc(100px - 140vw);
    width: 310vw;
    height: 310vw;
    border-radius: 50%;
    transform-origin: center;
    @media screen and (min-width: 900px) {
      top: calc(90px - 112vw);
      right: calc(100px - 112vw);
      width: 220vw;
      height: 220vw;
    }
    @media screen and (min-width: 900px) and (orientation: portrait) {
      top: calc(90px - 160vw);
      right: calc(100px - 160vw);
      width: 330vw;
      height: 330vw;
    }
  `;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const opacity = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 3,
      },
    },
    show: {
      opacity: 1,
    },
  };

  const listItem = {
    hidden: {
      opacity: 0,
      x: -100,
      skewX: 5,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const variants = {
    visible: {
      scaleX: [0, 1],
      scaleY: [0, 1],
      transition: {
        duration: 0.5,
      },
    },
    close: {
      scale: [1, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const onHover = (e, index) => {
    const siblings = e.currentTarget.parentNode.querySelectorAll(".menu-item");

    siblings.forEach((elem, i) => {
      if (i === index) {
        elem.classList.add("focused", "focused-out");
      } else {
        elem.classList.add("focused-out");
      }
    });
  };

  const onMouseOut = (e) => {
    const siblings = e.currentTarget.parentNode.querySelectorAll(".menu-item");

    siblings.forEach((elem) => {
      elem.classList.remove("focused", "focused-out");
    });
  };

  const NavLink = () => {
    return Links.map((link, index) => {
      return (
        <motion.li
          key={"nl_" + index}
          variants={listItem}
          onMouseOver={(e) => {
            onHover(e, index);
          }}
          onMouseLeave={(e) => {
            onMouseOut(e, index);
          }}
          className="type-h2 menu-item"
        >
          <a className="menu-word" href={`${link.link}`}>
            {link.text}
          </a>
          <div className="grayed">{link.text}</div>
        </motion.li>
      );
    });
  };

  return (
    <div className="prevent-container" style={{ position: "fixed", left: 0 }}>
      <motion.div
        initial="closed"
        animate={active ? "open" : "closed"}
        variants={OffCanvas}
        style={{ position: "fixed", top: 0, zIndex: 29 }}
      >
        <Cover className={`cover-menu ${active ? "active" : ""}`}>
          <StyledCircle
            animate={active ? "visible" : "close"}
            variants={variants}
          />
          <div className="content-container">
            <div className="content-wrapper">
              <nav className="primary-nav">
                <div className="label type-comp2">Menu</div>
                {active ? (
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <NavLink />
                    <a href="/contact" className="mobile-contact">
                      let&apos;s chat
                    </a>
                  </motion.ul>
                ) : null}
              </nav>
              <motion.div
                className="company-info"
                variants={opacity}
                initial="hidden"
                animate="show"
              >
                <div className="contact-cta">
                  <a href="mailto:hello@vivolution.co.uk">hello@vivolution.co.uk</a>
                  <br />
                  <a href="tel:01412122533">0141 212 2533</a>
                </div>
                <div className="address">
                  <p>
                    Suite 2/2, 14 Mitchell Lane, <br />
                    Glasgow G1 3NU
                    <br />
                    Scotland, UK
                  </p>
                </div>
                <div className="social-cta">
                  {socials.edges.map(({ node: item }, i) => {
                    return (
                      <a key={"sm_" + i} href={item.url}>
                        <Icon
                          icon={
                            item.profileType === "Twitter"
                              ? "twitter"
                              : "linkedin2"
                          }
                          width="20px"
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </Cover>
      </motion.div>
    </div>
  );
};

export default CoverMenu;
