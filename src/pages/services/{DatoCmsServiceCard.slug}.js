import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from "../../components/blocks/hero";
import MarkdownText from "../../components/blocks/markdown-text";
import "../../styles/customer-profile.scss";

const ServiceDetail = ({ data }) => {
  return (
    <Layout cta={data.datoCmsServicePage.cta}>
      <HelmetDatoCms seo={data.service.seo} />
      <Hero
        title={data.service.hero.title}
        subtitle={data.service.hero.subtitle}
        subtext={data.service.hero.subText}
        subtextHtml={data.service.hero.subTextNode?.childMarkdownRemark?.html}
        dark
      />
      <section className="detail-body">
        <div className="detail-body-inner">
          {data.service.blocks.map((block, i) => (
            <div key={i} className="detail-text-block">
              <hr className="detail-divider" />
              {block.title && (
                <h2 className="detail-section-headline">{block.title}</h2>
              )}
              <MarkdownText
                className="detail-prose"
                html={block.descriptionNode?.childMarkdownRemark?.html}
                text={block.description}
                clean
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;

export const query = graphql`
  query ($id: String!) {
    datoCmsServicePage {
      cta {
        title
        subtext
        maintext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    service: datoCmsServiceCard(id: { eq: $id }) {
      hero {
        title
        subtitle
        subText
        subTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
      title
      slug
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      blocks {
        title
        description
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
