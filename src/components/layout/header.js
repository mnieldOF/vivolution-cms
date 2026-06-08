import React, { useState, useEffect } from "react";
import "./header.scss";
import "./hamburger.scss";
import "./mobile-header.scss";
import { Link } from "gatsby";
import CoverMenu from "./cover-menu";
import SmallLogo from "../../images/vivolution-logo-icon.svg";
import FullLogo from "../../images/vivolution-logo-full.svg";

const navLinks = [
  { text: "Sectors", link: "/sectors" },
  { text: "Services", link: "/services" },
  { text: "Tools", link: "/tools" },
  { text: "Investment Programme", link: "/investment-programme" },
  { text: "Portfolio", link: "/portfolio" },
  { text: "Studios", link: "/studios" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
];

const Header = ({ socials }) => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    const newActive = !active;
    setActive(newActive);
    document.body.style.overflow = newActive ? "hidden" : "";
  };

  const closeMenu = () => {
    setActive(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      document.getElementById("header")?.classList.toggle("scrolled", scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="vivo-header" id="header">
        <div className="header-inner">
          <Link to="/" className="logo-wrap" aria-label="Vivolution home">
            <img src={FullLogo} alt="Vivolution" className="logo-full" />
            <img src={SmallLogo} alt="Vivolution" className="logo-v" />
          </Link>

          <div className="header-right">
            <nav>
              {navLinks.map((item) => (
                <Link key={item.link} to={item.link}>
                  {item.text}
                </Link>
              ))}
            </nav>
            <a href="mailto:hello@vivolution.co.uk" className="btn-cta">
              Let&apos;s chat
            </a>
          </div>

          <button
            className={`hamburger ${active ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={active}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <CoverMenu active={active} socials={socials} onClose={closeMenu} />
    </>
  );
};

export default Header;
