import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import TeamMember from "../components/team-member";
import GrowthBlock from "../components/growth-block";

const About = ({ data }) => {
  console.log(data);
  const team = data.allDatoCmsTeam.edges;
  const { aboutUsBlocks } = data.datoCmsAboutPage;
  return (
    <Layout>
      <DatoBlocks blocks={aboutUsBlocks} />
      <section className="team">
        <div className="content-container column">
          <h3 className="title">Meet the Vivolution Team</h3>
          <div className="grid">
            {team.map((member) => {
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
      <GrowthBlock data={data.allDatoCmsService} title="Explore Vivolution" />
    </Layout>
  );
};

export default About;

export const query = graphql`
  {
    datoCmsAboutPage {
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
        }
        ... on DatoCmsTitleText {
          id
          subText
          title
          model {
            name
          }
        }
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
    allDatoCmsService {
      edges {
        node {
          slug
          logo {
            url
          }
        }
      }
    }
  }
`;
