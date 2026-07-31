import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import MapBlock from "../components/blocks/map-block";
import Hero from "../components/blocks/hero";

const FindUs = ({ data, location }) => {
  const hero = data.datoCmsContactPage.blocks[0];

  return (
    <Layout location={location}>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        subtext={hero.subText}
        image={hero.image}
        dark
      />
      <MapBlock info={data.datoCmsContactPage.contactInformation} />
    </Layout>
  );
};

export default FindUs;

export const query = graphql`
  {
    datoCmsContactPage {
      blocks {
        title
        subtitle
        subText
        image {
          url
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
