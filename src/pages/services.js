import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import GrowthBlock from "../components/growth-block";
import Partners from "../components/partners";
import TextBlock from "../components/text-block";
import ImageGallery from "../components/image-gallery";
import SubFooter from "../components/sub-footer";

const Services = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsServiceSingle.title}
        image={data.datoCmsServiceSingle.hero[0].background}
      />
      <TextBlock
        title={data.datoCmsServiceSingle.content[0].title}
        text={data.datoCmsServiceSingle.content[0].subText}
      />
      <GrowthBlock data={data.allDatoCmsService} />
      <ImageGallery data={data.datoCmsServiceSingle.content[1]} />
      <Partners />
      <SubFooter />
    </Layout>
  );
};

export default Services;

export const query = graphql`
  {
    datoCmsServiceSingle {
      title
      hero {
        background {
          gatsbyImageData
          title
        }
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
    allDatoCmsService {
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
