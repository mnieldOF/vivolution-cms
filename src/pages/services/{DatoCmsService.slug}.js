import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ImageText from "../../components/image-text";
import ContentReveal from "../../components/content-reveal";
import Partners from "../../components/partners";

const Service = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsService.hero[0].title}
        image={data.datoCmsService.hero[0].background}
      />
      <ImageText
        title={data.datoCmsService.imageText[0].title}
        text={data.datoCmsService.imageText[0].subText}
        image={data.datoCmsService.imageText[0].image}
      />
      <ContentReveal tabs={data.datoCmsService.tabs} />
      <Partners />
    </Layout>
  );
};

export default Service;

export const query = graphql`
  query($id: String!) {
    datoCmsService(id: { eq: $id }) {
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
        model {
          name
        }
      }
      imageText {
        title
        subText
        image {
          gatsbyImageData
        }
        model {
          name
        }
      }
      logo {
        gatsbyImageData
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
    }
  }
`;
