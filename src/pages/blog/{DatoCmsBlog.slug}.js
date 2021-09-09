import * as React from "react";
import { graphql } from "gatsby";
import { StructuredText } from "react-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Author from "../../components/author";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsBlog.title}
        image={data.datoCmsBlog.blocks[0].background.gatsbyImageData}
      />
      <Author author={data.datoCmsBlog.author} />
      <div className="content-container blog">
        <StructuredText data={data.datoCmsBlog.content} />
      </div>
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
        }
      }
      title
      content {
        value
      }
      author {
        name
        profileImage {
          gatsbyImageData
        }
      }
    }
  }
`;
