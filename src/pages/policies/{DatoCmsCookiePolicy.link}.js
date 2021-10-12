import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import { StructuredText } from "react-datocms";

const CookiePolicy = ({ data }) => {
  const { title, content } = data.datoCmsCookiePolicy;
  return (
    <Layout>
      <Hero
        title={data.datoCmsCookiePolicy.heroBanner[0].title}
        image={data.datoCmsCookiePolicy.heroBanner[0].background}
      />
      <div className="content-container column">
        <h1>{title}</h1>
        <StructuredText data={content} />
      </div>
    </Layout>
  );
};

export default CookiePolicy;

export const query = graphql`
  query($id: String!) {
    datoCmsCookiePolicy(id: { eq: $id }) {
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
