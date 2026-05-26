import * as React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from "../components/blocks/hero";
import "../components/services/service-item.scss";

const Grid = styled.div`
  display: grid;
  padding: 60px 0;
  grid-gap: 20px;
  @media screen and (min-width: 900px) {
    padding: 100px 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SectorDetail = ({ data }) => {
  return (
    <Layout cta={data.sector.cta}>
      <HelmetDatoCms seo={data.sector.seo} />
      <Hero
        title={data.sector.hero.title}
        subtitle={data.sector.hero.subtitle}
        subtext={data.sector.hero.subText}
        dark
      />
      <section>
        <div className="content-container">
          <Grid>
            {data.sector.blocks.map((block, i) => (
              <div key={i} className="service-card">
                <div className="service-card-body">
                  <div className="service-card-title-row">
                    <h3 className="service-card-name">{block.title}</h3>
                  </div>
                  {block.descriptionNode?.childMarkdownRemark?.html && (
                    <div
                      className="service-card-tagline"
                      dangerouslySetInnerHTML={{ __html: block.descriptionNode.childMarkdownRemark.html }}
                    />
                  )}
                </div>
              </div>
            ))}
          </Grid>
        </div>
      </section>
    </Layout>
  );
};

export default SectorDetail;

export const query = graphql`
  query ($id: String!) {
    sector: datoCmsSector(id: { eq: $id }) {
      hero {
        title
        subtitle
        subText
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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
        title
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allDatoCmsSectorCategory {
      edges {
        node {
          category
        }
      }
    }
  }
`;
