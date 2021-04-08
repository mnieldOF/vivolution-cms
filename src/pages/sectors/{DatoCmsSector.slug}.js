import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ImageText from "../../components/image-text";
import ContentReveal from "../../components/content-reveal";
import Partners from "../../components/partners";

const Sector = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsSector.hero[0].title}
        image={data.datoCmsSector.hero[0].background}
      />
      <ImageText
        title="We help startups succeed and grow"
        text="Scaling a new business can be frustrating – your team of the future is also the team you need now to get you there. Vivolution can get you to that next level, by dropping in the right people for as long as you need them. From Execs to Devs, on terms that match the stage of your business."
      />
      <ContentReveal tabs={data.datoCmsSector.tabs} />
      <Partners />
    </Layout>
  );
};

export default Sector;

export const query = graphql`
  query($id: String!) {
    datoCmsSector(id: { eq: $id }) {
      tabs {
        title
        tabContent {
          value
          links
        }
      }
      imageText {
        title
        image {
          gatsbyImageData
        }
        model {
          name
        }
      }
      heroBanner {
        background {
          gatsbyImageData
        }
        title
      }
    }
  }
`;
