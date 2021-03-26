import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Img from "../../images/bg.png";

const Team = ({ data }) => {
  console.log(data);
  const {
    name,
    role,
    profileImage,
    description,
    categories,
  } = data.datoCmsTeam;
  const ProfileImg = getImage(profileImage);
  return (
    <Layout>
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
                {categories.map((cat) => {
                  return <span className="category">{cat.category}</span>;
                })}
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsTeam.descriptionNode.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

export const query = graphql`
  query($id: String!) {
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
    }
  }
`;
