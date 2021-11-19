import * as React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Icon from "../../components/icon";
import Img from "../../images/vivolution-about-us.jpeg";

const Team = ({ data }) => {
  const { name, role, profileImage, socialProfile, categories } =
    data.datoCmsTeam;
  const ProfileImg = getImage(profileImage);
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsTeam.seo} />
      <Hero image={Img} title="Team" />
      <section className="team-member">
        <div className="content-container">
          <div className="grid">
            <div className="left">
              <GatsbyImage
                className="profile-img"
                image={ProfileImg}
                alt="test"
              />
            </div>
            <div className="right">
              <h3 className="title">{name}</h3>
              <p className="role">{role}</p>
              <div className="flex">
                {categories.map((cat, i) => {
                  return (
                    <span key={"tm_" + i} className="category">
                      {cat.category}
                    </span>
                  );
                })}
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsTeam.descriptionNode.childMarkdownRemark.html,
                }}
              />
              <a className="linkedin" href={socialProfile}>
                <Icon
                  className="linkedin"
                  icon="linkedin2"
                  width="20px"
                  color="#000"
                />
              </a>
            </div>
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
