import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import DatoBlocks from "../../components/blocks/dato-blocks";
import Hero from "../../components/blocks/hero";
import ToolSlider from "../../components/tools/tool-slider";
import "../../styles/customer-profile.scss";

const ToolDetail = ({ data }) => {
  const filter = data.tool.toolCategory?.category;
  const relatedTools = data.allDatoCmsTool.edges.filter(
    (item) =>
      item.node.toolCategory?.category === filter &&
      item.node.slug !== data.tool.slug,
  );

  return (
    <Layout cta={data.datoCmsToolsPage.cta}>
      <HelmetDatoCms seo={data.tool.seo} />
      <Hero
        title={data.tool.hero.title}
        subtitle={data.tool.hero.subtitle}
        subtext={data.tool.hero.subText}
        dark
      />
      <section className="detail-body">
        <div className="detail-body-inner">
          <DatoBlocks blocks={data.tool.blocks} detail />
        </div>
      </section>
      <ToolSlider data={relatedTools} />
    </Layout>
  );
};

export default ToolDetail;

export const query = graphql`
  query ($id: String!) {
    tool: datoCmsTool(id: { eq: $id }) {
      hero {
        title
        subtitle
        subText
      }
      title
      slug
      toolCategory {
        category
      }
      blocks {
        ... on DatoCmsCustomerProfileDetail {
          id
          model {
            name
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
          title
          subtitle
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    datoCmsToolsPage {
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
    }
    allDatoCmsTool {
      edges {
        node {
          ...ToolCard
          toolCategory {
            category
          }
        }
      }
    }
  }
`;
