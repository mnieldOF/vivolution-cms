import * as React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Hero from "../components/hero";
import BlogList from "../components/blog-list";
import PortfolioFilter from "../components/portfolio-filter";

const Grid = styled.div`
  display: grid;
  padding: 30px 0;
  grid-gap: 20px;
  @media screen and (min-width: 900px) {
    padding: 100px 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TextBlock = styled.div`
  padding: 30px 0;
  background: var(--color-primary-white);
  max-width: 875px;
  margin: 0 auto;
  @media screen and (min-width: 900px) {
    padding: 60px 0;
  }
`;

const Section = styled.div`
  background: var(--color-primary-white);
  padding: 30px 0;
  @media screen and (min-width: 900px) {
    padding: 60px 0;
  }
`;

const Blog = ({ data }) => {
  const [posts, setPosts] = React.useState(data.allDatoCmsBlog.edges);

  const allCategories = [
    ...new Set(posts.map((item) => item.node.category.category)),
  ];

  console.log("posts", posts);

  const [buttons, setButton] = React.useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setPosts(data.allDatoCmsBlog.edges);
      return;
    }
    const filteredData = data.allDatoCmsBlog.edges.filter(
      (item) => item.node.category.category === button
    );
    console.log(filteredData);
    setPosts(filteredData);
  };

  const { hero, description } = data.datoCmsBlogLanding;
  console.log(posts);
  return (
    <Layout>
      <Hero title={hero[0].title} image={hero[0].background} />
      <TextBlock>
        <div className="content-container">{description}</div>
      </TextBlock>
      <Section>
        <div className="content-container column">
          <PortfolioFilter filter={filter} buttons={buttons} />
          <Grid>
            <BlogList profiles={posts} />
          </Grid>
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  {
    datoCmsBlogLanding {
      hero {
        background {
          gatsbyImageData
        }
        title
      }
      description
    }
    allDatoCmsBlog {
      edges {
        node {
          featuredImage {
            gatsbyImageData
          }
          category {
            id
            category
          }
          title
          slug
          excerpt
        }
      }
    }
  }
`;
