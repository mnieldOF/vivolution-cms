import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <p>blog post</p>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    datoCmsBlog(id: { eq: $id }) {
      id
    }
  }
`;
