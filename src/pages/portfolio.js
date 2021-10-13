import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ProfileList from "../components/profile-list";
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
  console.log(data);
  const [profiles, setProfiles] = useState(
    data.allDatoCmsCustomerProfile.edges
  );

  console.log("pro", profiles);

  const allCategories = [
    ...new Set(
      data.allDatoCmsCustomerCategory.edges.map((item) => item.node.category)
    ),
  ];

  const [buttons, setButton] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setProfiles(data.allDatoCmsCustomerProfile.edges);
      return;
    }

    const filteredData = data.allDatoCmsCustomerProfile.edges.filter((item) =>
      item.node.customerCategory.some((x) => x.category === button)
    );
    console.log("hi", filteredData);
    setProfiles(filteredData);
  };

  const { blocks, description } = data.datoCmsPortfolio;
  return (
    <Layout>
      <Hero title={blocks[0].title} image={blocks[0].background} />
      <TextBlock>
        <div className="content-container">{description}</div>
      </TextBlock>
      <Section>
        <div className="content-container column">
          <PortfolioFilter filter={filter} buttons={buttons} />
          <Grid>
            <ProfileList profiles={profiles} />
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
    allDatoCmsCustomerProfile(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          featuredImage {
            gatsbyImageData
          }
          customerCategory {
            id
            category
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
    allDatoCmsCustomerCategory {
      edges {
        node {
          category
        }
      }
    }
  }
`;
