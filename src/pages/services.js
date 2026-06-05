import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import ServiceList from "../components/services/service-list";

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
      <section className="services-section">
        <div className="content-container column">
          <ServiceList services={data.allDatoCmsServiceCard.edges} />
        </div>
      </section>
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
