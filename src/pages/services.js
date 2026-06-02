import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import ServiceList from "../components/services/service-list";

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

const Services = ({ data }) => {
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
          <Grid>
            <ServiceList services={data.allDatoCmsServiceCard.edges} />
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
    allDatoCmsServiceCard(sort: { fields: position, order: ASC }) {
      edges {
        node {
          title
          slug
          shortDescription
          shortDescriptionNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
