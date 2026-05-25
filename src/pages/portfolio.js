import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import ProfileList from "../components/portfolio/profile-list";
import PortfolioFilter from "../components/portfolio/portfolio-filter";

const Grid = styled.div`
  display: grid;
  padding: 30px 0;
  grid-gap: 20px;
  @media screen and (min-width: 900px) {
    padding: 100px 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Section = styled.div`
  background: var(--color-warm-white);
  padding: 30px 0;
  @media screen and (min-width: 900px) {
    padding: 60px 0;
  }
`;

const Portfolio = ({ data }) => {
  const [profiles, setProfiles] = useState(
    data.allDatoCmsCustomerProfile.edges,
  );

  const allCategories = [
    ...new Set(
      data.allDatoCmsCustomerCategory.edges.map((item) => item.node.category),
    ),
  ];

  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setProfiles(data.allDatoCmsCustomerProfile.edges);
      return;
    }

    const filteredData = data.allDatoCmsCustomerProfile.edges.filter((item) =>
      item.node.customerCategory.some((x) => x.category === button),
    );
    setProfiles(filteredData);
  };

  const { blocks } = data.datoCmsPortfolio;
  return (
    <Layout cta={data.datoCmsPortfolio.cta}>
      <Hero
        title={blocks[0].title}
        image={blocks[0].background}
        subtitle={blocks[0].subtitle}
        subtext={blocks[0].subText}
        dark
      />
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
      cta {
        title
        maintext
        subtext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
      }
      blocks {
        background {
          gatsbyImageData
        }
        title
        subtitle
        subText
      }
      description
    }
    allDatoCmsCustomerProfile(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          ...CustomerProfileCard
          customerCategory {
            id
            category
          }
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
