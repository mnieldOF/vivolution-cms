import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsBlog.blocks.background.title}
        image={data.datoCmsBlog.blocks.background.gatsbyImageData}
      />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    datoCmsBlog(id: { eq: $id }) {
      id
      blocks {
        background {
          gatsbyImageData
          title
        }
      }
    }
  }
`;
