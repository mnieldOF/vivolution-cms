import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout/layout";
import DatoBlocks from "../components/blocks/dato-blocks";
import TeamMember from "../components/blocks/team-member";

const About = ({ data }) => {
  const team = data.allDatoCmsTeam.edges;
  const { aboutUsBlocks } = data.datoCmsAboutPage;
  return (
    <Layout cta={data.datoCmsAboutPage.cta}>
      <HelmetDatoCms seo={data.datoCmsAboutPage.seo} />
      <DatoBlocks blocks={aboutUsBlocks} dark />
      <section className="team">
        <div className="team-inner">
          <div className="team-header">
            <p className="team-eyebrow">The team</p>
            <h3 className="team-headline">Meet the people behind Vivolution.</h3>
          </div>
          <div className="team-grid">
            {team.map((member, i) => {
              const {
                role,
                description,
                name,
                profileImage,
                categories,
                slug,
              } = member.node;
              const next = member.next !== null ? member.next : null;
              return (
                <TeamMember
                  key={i}
                  role={role}
                  description={description}
                  name={name}
                  image={profileImage}
                  categories={categories}
                  slug={slug}
                  next={next}
                />
              );
            })}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;

export const query = graphql`
  {
    datoCmsAboutPage {
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
      aboutUsBlocks {
        ... on DatoCmsHeroBanner {
          id
          background {
            gatsbyImageData
            title
          }
          model {
            name
          }
          title
          subtitle
          subText
        }
        ... on DatoCmsTitleText {
          id
          subText
          title
          model {
            name
          }
        }
        ... on DatoCmsHistory {
          id
          model {
            name
          }
          text
          title
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsTeam(sort: { fields: position, order: ASC }) {
      edges {
        next {
          slug
        }
        node {
          profileImage {
            gatsbyImageData
          }
          categories {
            category
          }
          role
          description
          name
          slug
        }
        next {
          name
        }
      }
    }
  }
`;
