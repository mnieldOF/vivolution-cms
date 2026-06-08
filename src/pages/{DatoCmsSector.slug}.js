import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from "../components/blocks/hero";
import SectorExplorer from "../components/sectors/sector-explorer";

const SectorDetail = ({ data }) => {
  return (
    <Layout cta={data.sector.cta}>
      <HelmetDatoCms seo={data.sector.seo} />
      <Hero
        title={data.sector.hero.title}
        subtitle={data.sector.hero.subtitle}
        subtext={data.sector.hero.subText}
        dark
      />
      <section className="sector-explorer">
        <div className="content-container">
          <SectorExplorer
            sector={data.sector}
            serviceCards={data.allDatoCmsServiceCard.edges}
          />
        </div>
      </section>
    </Layout>
  );
};

export default SectorDetail;

export const query = graphql`
  query ($id: String!) {
    sector: datoCmsSector(id: { eq: $id }) {
      id
      hero {
        title
        subtitle
        subText
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      cta {
        title
        maintext
        subtext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
      }
      blocks {
        title
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allDatoCmsServiceCard {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
