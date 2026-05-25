import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import Hero from "../../components/blocks/hero";
import { StructuredText } from "react-datocms";
import "./privacy-policy.scss";

const PrivacyPolicy = ({ data }) => {
  const { title, content } = data.datoCmsPrivacyPolicy;
  return (
    <Layout cta={data.datoCmsPrivacyPolicy.cta}>
      <Hero
        title={data.datoCmsPrivacyPolicy.heroBanner[0].title}
        subtitle={data.datoCmsPrivacyPolicy.heroBanner[0].subtitle}
        subtext={data.datoCmsPrivacyPolicy.heroBanner[0].subText}
        image={data.datoCmsPrivacyPolicy.heroBanner[0].background}
        dark
      />
      <section className="privacy-body">
        <div className="content-container column privacy-content">
          <h1>{title}</h1>
          <StructuredText data={content} />
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

export const query = graphql`
  query ($id: String!) {
    datoCmsPrivacyPolicy(id: { eq: $id }) {
      title
      content {
        value
      }
      link
      heroBanner {
        title
        subtitle
        subText
      }
    }
  }
`;
