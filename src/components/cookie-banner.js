import React from "react";
import Icon from "./icon";
import { Link } from "gatsby";
// import { motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      style={{ background: "#fff", color: "#000", fontSize: "14px" }}
    >
      By clicking “Allow All”, you agree to the storing of cookies on your
      device to enhance site navigation, analyze site usage, and assist in our
      marketing efforts.
      <Link to={`/policies/privacy-policy`}>Cookie Notice</Link>
    </CookieConsent>
  );
};

export default CookieBanner;
