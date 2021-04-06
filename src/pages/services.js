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
        title="We help startups succeed and grow"
        text="Scaling a new business can be frustrating – your team of the future is also the team you need now to get you there. Vivolution can get you to that next level, by dropping in the right people for as long as you need them. From Execs to Devs, on terms that match the stage of your business."
      />
      <ContentReveal tabs={data.datoCmsServiceSingle.tab} />
      <Partners />
    </Layout>
  );
};

export default Services;

export const query = graphql`
  {
    datoCmsServiceSingle {
      title
      hero {
        title
        background {
          gatsbyImageData
        }
      }
      tab {
        title
        tabContent {
          value
        }
      }
    }
  }
`;
