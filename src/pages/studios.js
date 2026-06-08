import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import MapBlock from "../components/blocks/map-block";
import Hero from "../components/blocks/hero";
import OfficeCard from "../components/blocks/office-card";
import Tagline from "../components/blocks/tagline";

const Studios = ({ data, location }) => {
  const hero = data.datoCmsStudioPage.blocks;
  const studioInfo = data.allDatoCmsOffice.edges;
  console.log(studioInfo);
  return (
    <Layout location={location}>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        subtext={hero.subText}
        image={hero.background}
        dark
      />
      <section className="studios-intro">
        <div className="studios-intro-inner">
          <div>
            <p className="studios-intro-eyebrow">{data.datoCmsStudioPage.title}</p>
            <h2 className="studios-intro-headline">
              {data.datoCmsStudioPage.headline}
            </h2>
            <div className="studios-intro-text">
              {data.datoCmsStudioPage.introduction}
            </div>
          </div>
          <Tagline perks={data.datoCmsStudioPage.perks} />
        </div>
      </section>
      <section className="offices">
        <div className="offices-inner">
          <div className="offices-header">
            <p className="offices-eyebrow">Our Offices</p>
            <h3 className="offices-headline">
              Find the right space for your team.
            </h3>
          </div>
          <div className="offices-grid">
            {studioInfo.map((member, i) => {
              const { title, description, features, capacity } = member.node;
              return (
                <OfficeCard
                  key={i}
                  index={i}
                  title={title}
                  description={description}
                  features={features}
                  capacity={capacity}
                />
              );
            })}
          </div>
        </div>
      </section>
      <MapBlock info={[data.datoCmsStudioPage.mapBlock]} />
    </Layout>
  );
};

export default Studios;

export const query = graphql`
  {
    datoCmsStudioPage {
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
        subtitle
        subText
      }
      mapBlock {
        addressNode {
          childMarkdownRemark {
            html
          }
        }
        mapImage {
          gatsbyImageData
          title
        }
        title
      }
      title
      headline
      introduction
      perks
    }
    allDatoCmsOffice(sort: { fields: position, order: ASC }) {
      edges {
        node {
          title
          description
          features
          capacity
        }
      }
    }
  }
`;
