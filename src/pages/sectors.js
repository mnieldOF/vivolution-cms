import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import Hero from "../components/hero";
import HelpBlock from "../components/help-block";
import TextBlock from "../components/text-block";
import ImageGallery from "../components/image-gallery";

const Sectors = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        image={data.datoCmsSectorSingle.hero[0].background}
        title={data.datoCmsSectorSingle.hero[0].title}
      />
      <TextBlock
        title={data.datoCmsSectorSingle.content[0].title}
        text={data.datoCmsSectorSingle.content[0].subText}
      />
      <HelpBlock data={data.allDatoCmsSector} />
      <ImageGallery data={data.datoCmsSectorSingle.content[1]} />
    </Layout>
  );
};

export default Sectors;

export const query = graphql`
  {
    datoCmsSectorSingle {
      title
      hero {
        background {
          gatsbyImageData
        }
        title
      }
      content {
        ... on DatoCmsTitleText {
          id
          title
          subText
        }
        ... on DatoCmsImageGallery {
          id
          images {
            gatsbyImageData
          }
        }
      }
    }
    allDatoCmsSector(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          shortDescription
          icon {
            url
          }
          slug
        }
      }
    }
  }
`;
