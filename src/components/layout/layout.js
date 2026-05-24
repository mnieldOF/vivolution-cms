import React from "react";
import Header from "./header";
import Footer from "./footer";
import SubFooter from "./sub-footer";
import CookieBanner from "./cookie-banner";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { useLayoutData } from "../../hooks/useLayoutData";

import "../../styles/index.scss";

const TemplateWrapper = ({ children, location, noFooter }) => {
  const data = useLayoutData();
  return (
    <>
      <Header socials={data.allDatoCmsSocialProfile} />
      <div>
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <div>{children}</div>
      </div>
      {!location ? <SubFooter /> : null}
      {!noFooter ? (
        <Footer
          data={data.datoCmsFooter}
          socials={data.allDatoCmsSocialProfile}
        />
      ) : null}

      <CookieBanner debug={true} />
    </>
  );
};

export default TemplateWrapper;
