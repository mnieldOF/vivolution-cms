import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Hero from "../components/hero";
import PortfolioItem from "../components/portfolio-item";
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

const Portfolio = ({ data }) => {
  const { blocks, description } = data.datoCmsPortfolio;
  return (
    <Layout>
      <Hero title={blocks[0].title} image={blocks[0].background} />
      <TextBlock>
        <div className="content-container">{description}</div>
      </TextBlock>
      <Section>
        <div className="content-container column">
          <PortfolioFilter />
          <Grid>
            {data.allDatoCmsCustomerProfile.edges.map((item) => {
              console.log(item.node.shortDescription);
              const {
                featuredImage,
                title,
                logo,
                shortDescription,
                slug,
              } = item.node;
              return (
                <PortfolioItem
                  image={featuredImage}
                  title={title}
                  slug={slug}
                  logo={logo}
                  shortText={shortDescription}
                />
              );
            })}
          </Grid>
        </div>
      </Section>
    </Layout>
  );
};

export default Portfolio;

export const query = graphql`
  {
    datoCmsPortfolio {
      blocks {
        background {
          gatsbyImageData
        }
        title
      }
      description
    }
    allDatoCmsCustomerProfile {
      edges {
        node {
          featuredImage {
            gatsbyImageData
          }
          title
          slug
          logo {
            gatsbyImageData(width: 100)
          }
          shortDescription
        }
      }
    }
  }
`;
