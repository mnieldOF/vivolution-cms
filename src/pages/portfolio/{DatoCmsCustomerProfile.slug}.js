import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import DatoBlocks from "../../components/blocks/dato-blocks";
import Hero from "../../components/blocks/hero";
import CustomerProfileSlider from "../../components/portfolio/customer-profile-slider";

const CustomerProfile = ({ data }) => {
  const filter = data.profile.customerCategory?.category;
  const relatedProfiles = data.allDatoCmsCustomerProfile.edges.filter(
    (item) => item.node.customerCategory.category === filter
  );

  return (
    <Layout cta={data.profile.cta}>
      <HelmetDatoCms seo={data.profile.seo} />
      <Hero title={data.profile.title} image={data.profile.featuredImage} />
      <DatoBlocks blocks={data.profile.blocks} />
      <CustomerProfileSlider data={relatedProfiles} />
    </Layout>
  );
};

export default CustomerProfile;

export const query = graphql`
  query ($id: String!) {
    profile: datoCmsCustomerProfile(id: { eq: $id }) {
      title
      customerCategory {
        category
      }
      featuredImage {
        gatsbyImageData
      }
      blocks {
        ... on DatoCmsThreeColumnText {
          id
          model {
            name
          }
          column1
          column2
          column3
          sectionTitle
          title
        }
        ... on DatoCmsCustomerProfileDetail {
          id
          model {
            name
          }
          highlightedText
          image {
            gatsbyImageData
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
          title
        }
        ... on DatoCmsQuoteSelect {
          id
          model {
            name
          }
          quote {
            links {
              company
              logo {
                gatsbyImageData(width: 200)
              }
              person
              position
              quote
              role
            }
          }
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsCustomerProfile {
      edges {
        node {
          ...CustomerProfileCard
          customerCategory {
            category
          }
        }
      }
    }
  }
`;
