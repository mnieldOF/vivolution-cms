import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from "../../components/blocks/hero";
import "../../styles/customer-profile.scss";

const cleanMarkdownHtml = (html) => {
  if (!html) {
    return html;
  }

  return html
    .replace(/<p>\*\*([\s\S]*?)\s*\n\*\*\s*\n([\s\S]*?)<\/p>/g, "<p><strong>$1</strong></p>\n<p>$2</p>")
    .replace(/<p>([^<]*?)\s*\n\*\*\s*\n([^<]*?)<\/p>\s*<p>([^<]*?)\*\*<\/p>/g, "<p>$1</p>\n<p><strong>$2</strong></p>\n<p><strong>$3</strong></p>")
    .replace(/\n\*\*\s*\n([^*<]+?)\*\*/g, "</p>\n<p><strong>$1</strong></p>\n<p>")
    .replace(/<p>\*\*([^<]*?)<\/p>\s*<p>([^<]*?)\*\*<\/p>/g, "<p><strong>$1</strong></p>\n<p><strong>$2</strong></p>")
    .replace(/\*\*([^*<]+?)\s*\*\*/g, "<strong>$1</strong>");
};

const ServiceDetail = ({ data }) => {
  return (
    <Layout cta={data.datoCmsServicePage.cta}>
      <HelmetDatoCms seo={data.service.seo} />
      <Hero
        title={data.service.hero.title}
        subtitle={data.service.hero.subtitle}
        subtext={data.service.hero.subText}
        dark
      />
      <section className="detail-body">
        <div className="detail-body-inner">
          {data.service.blocks.map((block, i) => (
            <div key={i} className="detail-text-block">
              <hr className="detail-divider" />
              {block.title && <h2 className="detail-section-headline">{block.title}</h2>}
              {block.descriptionNode?.childMarkdownRemark?.html ? (
                <div
                  className="detail-prose"
                  dangerouslySetInnerHTML={{
                    __html: cleanMarkdownHtml(block.descriptionNode.childMarkdownRemark.html),
                  }}
                />
              ) : (
                block.description && <p className="detail-prose">{block.description}</p>
              )}
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
