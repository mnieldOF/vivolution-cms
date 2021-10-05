import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SubFooter from "../components/sub-footer";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
          datoCmsFooter {
            footerLogos {
              gatsbyImageData
            }
          }
        }
      `}
      render={(data) => {
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
            <Footer
              data={data.datoCmsFooter}
              socials={data.allDatoCmsSocialProfile}
            />
          </>
        );
      }}
    />
  );
};

export default TemplateWrapper;
