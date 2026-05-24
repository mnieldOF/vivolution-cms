import * as React from "react";
import "./team-member.scss";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Icon from "../../components/ui/icon";

const Team = ({ data }) => {
  const { name, role, profileImage, socialProfile, categories, descriptionNode } = data.datoCmsTeam;
  const ProfileImg = getImage(profileImage);

  return (
    <Layout cta={data.datoCmsTeam.cta}>
      <HelmetDatoCms seo={data.datoCmsTeam.seo} />

      <section className="profile-hero">
        <div className="profile-hero-inner">
          <p className="profile-eyebrow">Meet the Team</p>
          <h1 className="profile-hero-headline">{name}</h1>
          <p className="profile-hero-title">{role}</p>
        </div>
      </section>

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
              <Icon icon="linkedin2" width="18px" />
              LinkedIn
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
