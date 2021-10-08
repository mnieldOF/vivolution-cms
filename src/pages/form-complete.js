import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FormComplete = ({ data }) => {
  const img = getImage(data.datoCmsFormComplete.image);

  return (
    <Layout noFooter>
      <section className="form-complete">
        <div className="content-container">
          <div className="flex">
            <h1 className="title">{data.datoCmsFormComplete.title}</h1>
            <p className="sub-title">{data.datoCmsFormComplete.subTitle}</p>
            <div className="image-container">
              <GatsbyImage
                className="hero-img"
                layout="fullWidth"
                image={img}
                alt="test"
              />
            </div>
            <a href="/" className="link-button">
              Back to home
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormComplete;

export const query = graphql`
  {
    datoCmsFormComplete {
      title
      subTitle
      image {
        gatsbyImageData
      }
    }
  }
`;
