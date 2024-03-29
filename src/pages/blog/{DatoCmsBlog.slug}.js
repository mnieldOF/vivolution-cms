import * as React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { StructuredText } from "react-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Author from "../../components/author";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <HelmetDatoCms seo={data.post.seo} />
      <Hero
        title={data.post.title}
        image={data.post.blocks[0].background.gatsbyImageData}
      />
      <Author author={data.post.author} />
      <div className="content-container blog">
        <StructuredText
          data={data.post.content}
          renderBlock={({ record }) => {
            if (record.__typename === "DatoCmsImageBlock") {
              const img = getImage(record.image);
              return (
                <GatsbyImage
                  className="hero-img"
                  layout="fullWidth"
                  image={img}
                  alt="test"
                />
              );
            }
            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    post: datoCmsBlog(id: { eq: $id }) {
      id
      blocks {
        background {
          gatsbyImageData
        }
      }
      title
      content {
        value
        blocks {
          __typename
          ... on DatoCmsImageBlock {
            id: originalId
            image {
              gatsbyImageData
            }
          }
        }
      }
      author {
        name
        profileImage {
          gatsbyImageData
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
