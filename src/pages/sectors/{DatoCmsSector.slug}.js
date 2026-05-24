import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../components/layout/layout";
import Hero from "../../components/blocks/hero";
import ImageText from "../../components/blocks/image-text";
import ContentReveal from "../../components/blocks/content-reveal";
import Partners from "../../components/blocks/partners";
import CustomerProfileSlider from "../../components/portfolio/customer-profile-slider";

const Sector = ({ data }) => {
  const filter = data.datoCmsSector.title;
  const filteredData = data.allDatoCmsCustomerProfile.edges.filter((item) =>
    item.node.sectorCategory.some((x) => x.title === filter)
  );

  const partnerFilter = data.allDatoCmsPartner.edges.filter((item) =>
    item.node.sectorCategory.some((x) => x.title === filter)
  );

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSector.seo} />
      <Hero
        title={data.datoCmsSector.heroBanner[0].title}
        image={data.datoCmsSector.heroBanner[0].background}
      />
      <ImageText
        title={data.datoCmsSector.imageText[0].title}
        text={data.datoCmsSector.imageText[0].subTextNode}
        image={data.datoCmsSector.imageText[0].image}
      />
      <ContentReveal
        tabs={data.datoCmsSector.tabs}
        tabTitle={data.datoCmsSector.tabTitle}
      />
      <Partners related={partnerFilter} />
      <CustomerProfileSlider image data={filteredData} />
    </Layout>
  );
};

export default Sector;

export const query = graphql`
  query ($id: String!) {
    datoCmsSector(id: { eq: $id }) {
      title
      tabTitle
      tabs {
        title
        tabNewContentNode {
          childMarkdownRemark {
            html
          }
        }
      }
      imageText {
        title
        subTextNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImageData
        }
        model {
          name
        }
      }
      heroBanner {
        background {
          gatsbyImageData
        }
        title
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsPartner {
      edges {
        node {
          sectorCategory {
            title
          }
          ...PartnerCard
        }
      }
    }
    allDatoCmsCustomerProfile(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          ...CustomerProfileCard
          sectorCategory {
            title
          }
        }
      }
    }
  }
`;
