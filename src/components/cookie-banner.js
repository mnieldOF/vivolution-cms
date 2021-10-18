import React from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      style={{ background: "#fff", color: "#000", fontSize: "14px" }}
      declineButtonText="I decline"
      enableDeclineButton
      flipButtons
    >
      By clicking `I understand`, you agree to the storing of cookies on your
      device to enhance site navigation, analyze site usage, and assist in our
      marketing efforts.
      <Link to={`/policies/privacy-policy`}>Cookie Notice</Link>
    </CookieConsent>
  );
};

export default CookieBanner;
