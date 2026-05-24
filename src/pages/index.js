import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import TextBlock from "../components/blocks/text-block";
import Numbers from "../components/blocks/numbers";

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  return (
    <Layout cta={data.datoCmsHome.cta}>
      <HelmetDatoCms seo={data.datoCmsHome.seo} />
      <Hero title={datoCmsHome.content[0].title} />
      <TextBlock
        title={datoCmsHome.content[1].title}
        text={datoCmsHome.content[1].subText}
      />
      <Numbers data={datoCmsHome.numbers} />
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
          title
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
    allDatoCmsCustomerProfile(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          ...CustomerProfileCard
        }
      }
    }
    allDatoCmsService(sort: { fields: position, order: ASC }) {
      edges {
        node {
          ...ServiceCard
        }
      }
    }
    allDatoCmsPartner {
      edges {
        node {
          sectorCategory
          ...PartnerCard
        }
      }
    }
  }
`;
