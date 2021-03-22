import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";

const About = ({ data }) => {
  const { aboutUsBlocks } = data.datoCmsAboutPage;
  return (
    <Layout>
      <DatoBlocks blocks={aboutUsBlocks} />
    </Layout>
  );
};

export default About;

export const query = graphql`
  {
    datoCmsAboutPage {
      aboutUsBlocks {
        ... on DatoCmsHeroBanner {
          id
          background {
            gatsbyImageData
            title
          }
          model {
            name
          }
          title
        }
        ... on DatoCmsTitleText {
          id
          subText
          title
          model {
            name
          }
        }
      }
    }
  }
`;
