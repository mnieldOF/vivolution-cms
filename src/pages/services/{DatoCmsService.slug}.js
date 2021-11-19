import * as React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ImageText from "../../components/image-text";
import ContentReveal from "../../components/content-reveal";
import Partners from "../../components/partners";
import ComingSoon from "../../components/coming-soon";
import GrowthBlock from "../../components/growth-block";
import Test from "../../components/test";

const Service = ({ data }) => {
  const filter = data.datoCmsService.title;
  const filteredData = data.allDatoCmsCustomerProfile.edges.filter((item) =>
    item.node.serviceCategory.some((x) => x.title === filter)
  );

  const partnerFilter = data.allDatoCmsPartner.edges.filter((item) =>
    item.node.serviceCategory.some((x) => x.title === filter)
  );

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsService.seo} />
      <Hero
        title={data.datoCmsService.hero[0].title}
        image={data.datoCmsService.hero[0].background}
        logo={data.datoCmsService.logo}
      />
      {data.datoCmsService.comingSoonBlock[0] ? (
        <>
          <ComingSoon data={data.datoCmsService.comingSoonBlock[0]} />
          <GrowthBlock data={data.allDatoCmsService} />
        </>
      ) : (
        <>
          <ImageText
            title={data.datoCmsService.imageText[0].title}
            text={data.datoCmsService.imageText[0].subTextNode}
            image={data.datoCmsService.imageText[0].image}
          />
          <ContentReveal
            tabs={data.datoCmsService.tabs}
            tabTitle={data.datoCmsService.tabTitle}
          />
          <Partners related={partnerFilter} />
          <Test image data={filteredData} />
        </>
      )}
    </Layout>
  );
};

export default Service;

export const query = graphql`
  query ($id: String!) {
    datoCmsService(id: { eq: $id }) {
      comingSoonBlock {
        text
        logo {
          url
        }
      }
      title
      tabTitle
      tabs {
        title
        tabContent {
          value
          links {
            __typename
            ... on DatoCmsSector {
              id: originalId
              slug
              title
            }
            ... on DatoCmsService {
              id: originalId
              slug
              title
            }
          }
        }
        tabNewContentNode {
          childMarkdownRemark {
            html
          }
        }
        model {
          name
        }
      }
      imageText {
        title
        subTextNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImageData
        }
        model {
          name
        }
      }
      logo {
        url
      }
      hero {
        background {
          gatsbyImageData
        }
        model {
          name
        }
        title
      }
      slug
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsService(sort: { fields: position, order: ASC }) {
      edges {
        node {
          slug
          logo {
            url
          }
          shortDescription
          cardImage {
            gatsbyImageData
          }
        }
      }
    }
    allDatoCmsCustomerProfile(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          serviceCategory {
            title
          }
          featuredImage {
            gatsbyImageData
          }
          title
          logo {
            gatsbyImageData(width: 100)
          }
          slug
          shortDescription
        }
      }
    }
    allDatoCmsPartner {
      edges {
        node {
          serviceCategory {
            title
          }
          partnerImage {
            gatsbyImageData
          }
          title
        }
      }
    }
  }
`;
