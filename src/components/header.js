import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import CoverMenu from "./cover-menu";
import SmallLogo from "../images/vivo-icon-logo.svg";

const navLinks = [
  { text: "Services", link: "/services" },
  { text: "Tools", link: "/tools" },
  { text: "Investment Programme", link: "/investment-programme" },
  { text: "Portfolio", link: "/portfolio" },
  { text: "Studios", link: "/studios" },
  { text: "About Us", link: "/about" },
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
            <Icon
              icon="vivo-logo-white"
              className="logo-full"
              color="#e8336a"
            />
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
            <Link to="/contact" className="btn-cta">
              Let&apos;s chat
            </Link>
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
