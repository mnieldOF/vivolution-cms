import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import DatoBlocks from "../../components/dato-blocks";
import Hero from "../../components/hero";

const CustomerProfile = ({ data }) => {
  return (
    <Layout>
      <Hero
        title={data.datoCmsCustomerProfile.title}
        image={data.datoCmsCustomerProfile.featuredImage}
      />
      <DatoBlocks blocks={data.datoCmsCustomerProfile.blocks} />
    </Layout>
  );
};

export default CustomerProfile;

export const query = graphql`
  query($id: String!) {
    datoCmsCustomerProfile(id: { eq: $id }) {
      title
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
        ... on DatoCmsTab {
          id
          title
          tabContent {
            value
          }
          model {
            name
          }
        }
      }
    }
  }
`;
