import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import ToolList from "../components/tools/tool-list";
import PortfolioFilter from "../components/portfolio/portfolio-filter";

const Grid = styled.div`
  display: grid;
  padding: 30px 0;
  grid-gap: 20px;
  @media screen and (min-width: 900px) {
    padding: 50px 0 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Section = styled.div`
  background: var(--color-warm-white);
  padding: 30px 0;
  @media screen and (min-width: 900px) {
    padding: 50px 0 0;
  }
`;

const Tools = ({ data }) => {
  const [tools, setTools] = useState(data.allDatoCmsTool.edges);

  const allCategories = [
    ...new Set(
      data.allDatoCmsToolCategory.edges.map((item) => item.node.category),
    ),
  ];

  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setTools(data.allDatoCmsTool.edges);
      return;
    }

    const filteredData = data.allDatoCmsTool.edges.filter(
      (item) => item.node.toolCategory?.category === button,
    );
    setTools(filteredData);
  };

  const { hero, cta } = data.datoCmsToolsPage;
  return (
    <Layout cta={cta}>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        subtext={hero.subText}
        image={hero.background}
        dark
      />
      <Section>
        <div className="content-container column">
          <PortfolioFilter filter={filter} buttons={buttons} />
          <Grid>
            <ToolList tools={tools} />
          </Grid>
        </div>
      </Section>
    </Layout>
  );
};

export default Tools;

export const query = graphql`
  {
    datoCmsToolsPage {
      hero {
        title
        subtitle
        subText
      }
      cta {
        title
        subtext
        maintext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allDatoCmsTool(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          title
          slug
          shortDescription
          subtitle
          toolCategory {
            id
            category
          }
        }
      }
    }
    allDatoCmsToolCategory {
      edges {
        node {
          category
        }
      }
    }
  }
`;
