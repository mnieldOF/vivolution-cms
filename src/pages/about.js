import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import TeamMember from "../components/team-member";

const About = ({ data }) => {
  console.log(data);
  const team = data.allDatoCmsTeam.edges;
  console.log(team);
  const { aboutUsBlocks } = data.datoCmsAboutPage;
  return (
    <Layout>
      <DatoBlocks blocks={aboutUsBlocks} />
      <section className="team">
        <div className="content-container">
          <div className="grid">
            {team.map((member) => {
              const { role, description, name, profileImage } = member.node;
              return (
                <TeamMember
                  role={role}
                  description={description}
                  name={name}
                  image={profileImage}
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
    allDatoCmsTeam {
      edges {
        node {
          profileImage {
            gatsbyImageData
          }
          role
          description
          name
        }
      }
    }
  }
`;
