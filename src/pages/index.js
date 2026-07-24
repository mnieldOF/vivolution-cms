import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout/layout";
import HeroCarousel from "../components/blocks/hero-carousel";
import Numbers from "../components/blocks/numbers";
import ToolSlider from "../components/tools/tool-slider";
import SectorCards from "../components/blocks/sector-cards";

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  return (
    <Layout cta={data.datoCmsHome.cta}>
      <HelmetDatoCms seo={data.datoCmsHome.seo} />
      <HeroCarousel content={datoCmsHome.content} />
      <SectorCards sectors={data.allDatoCmsSector.edges} />
      <Numbers data={datoCmsHome.numbers} />
      <ToolSlider data={data.allDatoCmsTool.edges} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    datoCmsHome {
      content {
        ... on DatoCmsHeroBanner {
          id
          __typename
          title
          subtitle
          subText
          image {
            url
          }
        }
        ... on DatoCmsTitleText {
          id
          subText
          title
        }
      }
      numbers {
        number
        prefix
        suffix
        text
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
    }
    allDatoCmsTool(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          ...ToolCard
        }
      }
    }
    allDatoCmsSector {
      edges {
        node {
          slug
          cardTitle
          cardDescription
        }
      }
    }
  }
`;
