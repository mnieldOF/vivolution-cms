import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";
import Hero from "../components/hero";
import ImageText from "../components/image-text";
import ContentReveal from "../components/content-reveal";
import Partners from "../components/partners";

const Sectors = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        image={data.datoCmsSectorSingle.hero[0].background}
        title={data.datoCmsSectorSingle.hero[0].title}
      />
      <ImageText />
      <ContentReveal
        tabs={data.datoCmsSectorSingle.tabs}
        tabTitle={data.datoCmsSectorSingle.tabTitle}
      />
      <Partners />
    </Layout>
  );
};

export default Sectors;

export const query = graphql`
  {
    datoCmsSectorSingle {
      tabTitle
      tabs {
        title
        tabContent {
          value
        }
      }
      title
      hero {
        background {
          gatsbyImageData
        }
        title
      }
    }
  }
`;
