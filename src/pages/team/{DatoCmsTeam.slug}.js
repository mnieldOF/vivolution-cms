import * as React from "react";
import "./team-member.scss";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Hero from "../../components/blocks/hero";

const Team = ({ data }) => {
  const { name, role, profileImage, socialProfile, categories, descriptionNode } = data.datoCmsTeam;
  const ProfileImg = getImage(profileImage);

  return (
    <Layout cta={data.datoCmsTeam.cta}>
      <HelmetDatoCms seo={data.datoCmsTeam.seo} />

      <Hero title={name} subtitle="Meet the Team" subtext={role} dark />

      <section className="profile-body">
        <div className="profile-body-inner">
          <div className="profile-sidebar">
            <Link to="/about" className="profile-back">
              <svg viewBox="0 0 24 24"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
              Back to the team
            </Link>
            <div className="profile-photo-wrap">
              <GatsbyImage image={ProfileImg} alt={name} />
            </div>
            <p className="profile-sidebar-name">{name}</p>
            <p className="profile-sidebar-title">{role}</p>
          </div>

          <div className="profile-content">
            <div className="profile-chips">
              {categories.map((cat, i) => (
                <span key={i} className="profile-chip">{cat.category}</span>
              ))}
            </div>
            <div
              className="profile-bio"
              dangerouslySetInnerHTML={{ __html: descriptionNode.childMarkdownRemark.html }}
            />
            <a href={socialProfile} className="profile-linkedin" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

export const query = graphql`
  query ($id: String!) {
    datoCmsTeam(id: { eq: $id }) {
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
      id
      name
      role
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      profileImage {
        gatsbyImageData
      }
      categories {
        category
      }
      socialProfile
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
