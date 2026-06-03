import React from "react";
import "./footer.scss";
import Icon from "../ui/icon";
import { Link } from "gatsby";
import FooterLogo from "../../images/vivolution-logo-footer.svg";

const Footer = ({ socials }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="brand-col">
            <img src={FooterLogo} alt="Vivolution" className="brand-logo" />
            <p className="brand-tagline">
              We bring a wealth of experience and expertise to build your
              business and connect you with our wider ecosystem.
            </p>
            <ul className="social-links">
              {(socials?.edges ?? [])
                .filter(
                  ({ node }) => node.url && node.profileType === "LinkedIn",
                )
                .map(({ node: item }, index) => (
                  <li key={"sm_" + index}>
                    <a
                      href={item.url}
                      className="social-link"
                      aria-label={item.profileType}
                    >
                      <Icon
                        icon="linkedin2"
                        color="currentColor"
                        width="16px"
                      />
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <nav className="nav-col" aria-label="Footer">
            <h4>Sitemap</h4>
            <ul>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/sectors">Sectors</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="contact-col">
            <h4>Get in Touch</h4>
            <address className="address">
              14 Mitchell Lane
              <br />
              Suite 2<br />
              Glasgow
              <br />
              G1 3NU
            </address>
            <a href="mailto:hello@vivolution.co.uk" className="contact-link">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              hello@vivolution.co.uk
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Vivolution LTD. All rights
            reserved.
          </p>
          <div className="footer-bottom-right">
            <span>Company Reg No. SC394194</span>
            <Link to="/policies/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer.propTypes = {
//   socials: PropTypes.shape({
//     edges: PropTypes.arrayOf(
//       PropTypes.shape({
//         node: PropTypes.shape({
//           url: PropTypes.string.isRequired,
//           profileType: PropTypes.string.isRequired,
//         }),
//       })
//     ).isRequired,
//   }).isRequired,
// };

export default Footer;
