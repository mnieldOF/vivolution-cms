import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";

const Services = ({ data }) => {
  const { hero, cta } = data.datoCmsServicePage;
  console.log(cta);
  return (
    <Layout cta={cta}>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        subtext={hero.subText}
        image={hero.background}
        dark
      />
    </Layout>
  );
};

export default Services;

export const query = graphql`
  {
    datoCmsServicePage {
      hero {
        title
        subtitle
        subText
      }
      cta {
        title
        subtext
        maintext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
