import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import "../styles/investment-programme.scss";
import Tagline from "../components/blocks/tagline";
import PartnerCard from "../components/blocks/partner-card";
import InvestmentCard from "../components/blocks/investment-card";

const InvestmentProgramme = ({ data }) => {
  const { hero, cta, seo, blocks, cards } = data.datoCmsInvestmentProgrammePage;
  const partners = data.allDatoCmsInvestmentPartner.edges;
  return (
    <Layout cta={cta}>
      <HelmetDatoCms seo={seo} />
      <Hero
        title={hero.title}
        image={hero.background}
        subtitle={hero.subtitle}
        subtext={hero.subText}
        dark
      />
      {blocks?.map((block) => (
        <section className="invest-body" key={block.title}>
          <div className="invest-body-inner">
            <div className="invest-section">
              {block.title === "About the Programme" && cards ? (
                <div className="invest-about-grid">
                  <div>
                    <p className="invest-section-label">{block.title}</p>
                    <h2 className="invest-section-headline">{block.headline}</h2>
                    <p className="invest-section-subtext">{block.description}</p>
                    {block.bulletPoints && <Tagline perks={block.bulletPoints} pink />}
                  </div>
                  <div className="invest-stats">
                    {cards.map(({ heading, description }) => (
                      <InvestmentCard key={heading} heading={heading} description={description} />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <p className="invest-section-label">{block.title}</p>
                  <h2 className="invest-section-headline">{block.headline}</h2>
                  <p className="invest-section-subtext">{block.description}</p>
                  {block.title === "Programme Partners" && (
                    <div className="invest-partners-grid">
                      {partners.map(({ node }) => (
                        <PartnerCard key={node.title} title={node.title} />
                      ))}
                    </div>
                  )}
                  {block.bulletPoints && <Tagline perks={block.bulletPoints} pink />}
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default InvestmentProgramme;

export const query = graphql`
  {
    datoCmsInvestmentProgrammePage {
      hero {
        subtitle
        title
        subText
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
        headline
        description
        bulletPoints
      }
      cards {
        heading
        description
      }
    }
    allDatoCmsInvestmentPartner {
      edges {
        node {
          title
        }
      }
    }
  }
`;
