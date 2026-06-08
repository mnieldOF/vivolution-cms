import React from "react";
import "./cookie-banner.scss";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      declineButtonText="I decline"
      enableDeclineButton
      flipButtons
    >
      By clicking `I understand`, you agree to the storing of cookies on your
      device to enhance site navigation, analyse site usage, and assist in our
      marketing efforts.
      <Link to={`/policies/privacy-policy`}>Cookie Notice</Link>
    </CookieConsent>
  );
};

export default CookieBanner;
