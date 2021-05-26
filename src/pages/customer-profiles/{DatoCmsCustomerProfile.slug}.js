import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import DatoBlocks from "../../components/dato-blocks";
import Hero from "../../components/hero";
import Test from "../../components/test";

const CustomerProfile = ({ data }) => {
  const filter = data.datoCmsCustomerProfile.customerCategory.category;
  const relatedProfiles = data.allDatoCmsCustomerProfile.edges.filter(
    (item) => item.node.customerCategory.category === filter
  );

  return (
    <Layout>
      <Hero
        title={data.datoCmsCustomerProfile.title}
        image={data.datoCmsCustomerProfile.featuredImage}
      />
      <DatoBlocks blocks={data.datoCmsCustomerProfile.blocks} />
      <Test data={relatedProfiles} />
    </Layout>
  );
};

export default CustomerProfile;

export const query = graphql`
  query($id: String!) {
    datoCmsCustomerProfile(id: { eq: $id }) {
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
          text
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
    }
    allDatoCmsCustomerProfile {
      edges {
        node {
          customerCategory {
            category
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
  }
`;
