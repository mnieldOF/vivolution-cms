import React from "react";
import Icon from "./icon";
import { Link } from "gatsby";

const Footer = ({ socials }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">

          <div className="brand-col">
            <Icon
              icon="Vivolution_Text-Only---white-and-Blue"
              width="150px"
              className="brand-logo"
            />
            <p className="brand-tagline">
              We bring a wealth of experience and expertise to build your business and connect you with our wider ecosystem.
            </p>
            <ul className="social-links">
              {socials.edges.map(({ node: item }, index) => (
                <li key={"sm_" + index}>
                  <a href={item.url} className="social-link" aria-label={item.profileType}>
                    <Icon icon="linkedin2" color="currentColor" width="16px" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-col">
            <h4>Sitemap</h4>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/sectors">Sectors</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="contact-col">
            <h4>Get in Touch</h4>
            <address className="address">
              14 Mitchell Lane<br />
              Suite 2<br />
              Glasgow<br />
              G1 3NU
            </address>
            <a href="tel:01412122533" className="contact-link">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              0141 212 2533
            </a>
            <a href="mailto:hello@vivolution.co.uk" className="contact-link">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              hello@vivolution.co.uk
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Vivolution LTD. All rights reserved.</p>
          <div className="footer-bottom-right">
            <span>Company Reg No. SC394194</span>
            <Link to="/policies/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
