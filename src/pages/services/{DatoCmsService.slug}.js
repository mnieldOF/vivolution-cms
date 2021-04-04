import * as React from "react";
import { StructuredText } from "react-datocms";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ImageText from "../../components/image-text";
import ContentReveal from "../../components/content-reveal";

const Service = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsService.hero[0].title}
        image={data.datoCmsService.hero[0].background}
      />
      <ImageText
        title="We help startups succeed and grow"
        text="Scaling a new business can be frustrating – your team of the future is also the team you need now to get you there. Vivolution can get you to that next level, by dropping in the right people for as long as you need them. From Execs to Devs, on terms that match the stage of your business."
      />
      <ContentReveal tabs={data.datoCmsService.tabs} />
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
          links
        }
        model {
          name
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
