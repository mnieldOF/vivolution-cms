import React from "react";
import styled from "@emotion/styled";
import { HelmetDatoCms } from "gatsby-source-datocms";
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

const TemplateFour = () => {
  return (
    <Layout>
      <Hero title="Portfolio" />
      <TextBlock>
        <div className="content-container">
          We are proud to work with so many adventurous and exciting ventures
          that focus on making the world a better place. We have a wide
          selection of case studies showcasing our partenrships within variuos
          fields fo focus.
        </div>
      </TextBlock>
      <Section>
        <div className="content-container column">
          <PortfolioFilter />
          <Grid>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </Grid>
        </div>
      </Section>
    </Layout>
  );
};

export default TemplateFour;
