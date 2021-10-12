import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import { StructuredText } from "react-datocms";

const PrivacyPolicy = ({ data }) => {
  const { title, content } = data.datoCmsPrivacyPolicy;
  return (
    <Layout>
      <Hero
        title={data.datoCmsPrivacyPolicy.heroBanner[0].title}
        image={data.datoCmsPrivacyPolicy.heroBanner[0].background}
      />
      <div className="content-container column">
        <h1>{title}</h1>
        <StructuredText data={content} />
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

export const query = graphql`
  query($id: String!) {
    datoCmsPrivacyPolicy(id: { eq: $id }) {
      title
      content {
        value
      }
      link
      heroBanner {
        title
        background {
          gatsbyImageData
        }
      }
    }
  }
`;
