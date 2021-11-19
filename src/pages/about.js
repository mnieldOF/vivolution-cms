import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import DatoBlocks from "../components/dato-blocks";
import TeamMember from "../components/team-member";

const About = ({ data }) => {
  console.log(data);
  const team = data.allDatoCmsTeam.edges;
  const { aboutUsBlocks } = data.datoCmsAboutPage;
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsAboutPage.seo} />
      <DatoBlocks blocks={aboutUsBlocks} />
      <section className="team">
        <div className="content-container column">
          <h3 className="title">Meet the Vivolution Team</h3>
          <div className="grid">
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
        ... on DatoCmsValuesBlock {
          id
          model {
            name
          }
          values {
            links {
              title
              text
              image {
                url
              }
            }
          }
        }
        ... on DatoCmsImageBlock {
          id
          model {
            name
          }
          image {
            gatsbyImageData
          }
        }
        ... on DatoCmsHistory {
          id
          model {
            name
          }
          image {
            url
          }
          text
          title
        }
        ... on DatoCmsImageGallery {
          id
          model {
            name
          }
          images {
            gatsbyImageData
          }
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
