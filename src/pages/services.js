import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import GrowthBlock from "../components/blocks/growth-block";
import TextBlock from "../components/blocks/text-block";
import ImageGallery from "../components/blocks/image-gallery";

const Services = ({ data }) => {
  return (
    <Layout cta={data.datoCmsServiceSingle.cta}>
      <Hero
        title={data.datoCmsServiceSingle.hero[0].title}
        image={data.datoCmsServiceSingle.hero[0].background}
      />
      <TextBlock
        title={data.datoCmsServiceSingle.content[0].title}
        text={data.datoCmsServiceSingle.content[0].subText}
      />
      <GrowthBlock data={data.allDatoCmsService} />
      <ImageGallery data={data.datoCmsServiceSingle.content[1]} />
    </Layout>
  );
};

export default Services;

export const query = graphql`
  {
    datoCmsServiceSingle {
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
  }
`;
