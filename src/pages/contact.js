import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import DatoBlocks from "../components/blocks/dato-blocks";
import MapBlock from "../components/blocks/map-block";

const Contact = ({ data, location }) => {
  const blocks = data.datoCmsContact.blocks;

  return (
    <Layout location={location}>
      <DatoBlocks blocks={blocks} />
      <MapBlock info={data.datoCmsContact.contactInformation} />
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  {
    datoCmsContact {
      blocks {
        background {
          gatsbyImageData
        }
        title
        model {
          name
        }
      }
      contactInformation {
        addressNode {
          childMarkdownRemark {
            html
          }
        }
        mapImage {
          gatsbyImageData
          title
        }
        title
      }
    }
  }
`;
