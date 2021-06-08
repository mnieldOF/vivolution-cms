import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ImageText from "../components/image-text";
import ContentReveal from "../components/content-reveal";
import Partners from "../components/partners";

const Services = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsServiceSingle.hero[0].title}
        image={data.datoCmsServiceSingle.hero[0].background}
      />
      <ImageText
        title={data.datoCmsServiceSingle.textImage[0].title}
        text={data.datoCmsServiceSingle.textImage[0].subText}
        image={data.datoCmsServiceSingle.textImage[0].image}
      />
      <ContentReveal
        tabs={data.datoCmsServiceSingle.tab}
        tabTitle={data.datoCmsServiceSingle.tabTitle}
      />
      <Partners />
    </Layout>
  );
};

export default Services;

export const query = graphql`
  {
    datoCmsServiceSingle {
      hero {
        background {
          gatsbyImageData
          title
        }
      }
      textImage {
        image {
          gatsbyImageData
        }
        subText
        title
      }
      tabTitle
      tab {
        title
        tabContent {
          value
        }
      }
    }
  }
`;
