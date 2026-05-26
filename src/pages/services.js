import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import ServiceList from "../components/services/service-list";
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

const Services = ({ data }) => {
  const [services, setServices] = useState(data.allDatoCmsNewService.edges);

  const allCategories = [
    ...new Set(
      data.allDatoCmsServiceCategory.edges.map((item) => item.node.category),
    ),
  ];

  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setServices(data.allDatoCmsNewService.edges);
      return;
    }

    const filteredData = data.allDatoCmsNewService.edges.filter(
      (item) => item.node.serviceCategory?.category === button,
    );
    setServices(filteredData);
  };

  const { hero, cta } = data.datoCmsServicePage;
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
            <ServiceList services={services} />
          </Grid>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;

export const query = graphql`
  {
    datoCmsServicePage {
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
    allDatoCmsNewService(sort: { fields: position, order: ASC }) {
      edges {
        node {
          title
          slug
          shortDescription
          serviceCategory {
            id
            category
          }
        }
      }
    }
    allDatoCmsServiceCategory {
      edges {
        node {
          category
        }
      }
    }
  }
`;
