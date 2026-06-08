import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import MapBlock from "../components/blocks/map-block";
import Hero from "../components/blocks/hero";

const Contact = ({ data, location }) => {
  const hero = data.datoCmsContactPage.blocks[0];

  return (
    <Layout location={location}>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        subtext={hero.subText}
        image={hero.background}
        dark
      />
      <MapBlock info={data.datoCmsContactPage.contactInformation} />
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  {
    datoCmsContactPage {
      blocks {
        title
        subtitle
        subText
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
