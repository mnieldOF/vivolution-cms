import * as React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../components/layout/layout";
import Hero from "../../components/blocks/hero";
import ImageText from "../../components/blocks/image-text";
import ContentReveal from "../../components/blocks/content-reveal";
import Partners from "../../components/blocks/partners";
import ComingSoon from "../../components/blocks/coming-soon";
import GrowthBlock from "../../components/blocks/growth-block";
import CustomerProfileSlider from "../../components/portfolio/customer-profile-slider";

const Service = ({ data }) => {
  const filter = data.datoCmsService.title;
  const filteredData = data.allDatoCmsCustomerProfile.edges.filter((item) =>
    item.node.serviceCategory.some((x) => x.title === filter)
  );

  const partnerFilter = data.allDatoCmsPartner.edges.filter((item) =>
    item.node.serviceCategory.some((x) => x.title === filter)
  );

  return (
    <div>hi</div>
    // <Layout cta={data.datoCmsService.cta}>
    //   <HelmetDatoCms seo={data.datoCmsService.seo} />
    //   <Hero
    //     title={data.datoCmsService.hero[0].title}
    //     image={data.datoCmsService.hero[0].background}
    //     logo={data.datoCmsService.logo}
    //   />
    //   {data.datoCmsService.comingSoonBlock[0] ? (
    //     <>
    //       <ComingSoon data={data.datoCmsService.comingSoonBlock[0]} />
    //       <GrowthBlock data={data.allDatoCmsService} />
    //     </>
    //   ) : (
    //     <>
    //       <ImageText
    //         title={data.datoCmsService.imageText[0].title}
    //         text={data.datoCmsService.imageText[0].subTextNode}
    //         image={data.datoCmsService.imageText[0].image}
    //       />
    //       <ContentReveal
    //         tabs={data.datoCmsService.tabs}
    //         tabTitle={data.datoCmsService.tabTitle}
    //       />
    //       <Partners related={partnerFilter} />
    //       <CustomerProfileSlider image data={filteredData} />
    //     </>
    //   )}
    // </Layout>
  );
};

export default Service;

export const query = graphql`
  query ($id: String!) {
    datoCmsService(id: { eq: $id }) {
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
      comingSoonBlock {
        text
        logo {
          url
        }
      }
      title
      tabTitle
      tabs {
        title
        tabNewContentNode {
          childMarkdownRemark {
            html
          }
        }
        model {
          name
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
      logo {
        url
      }
      hero {
        model {
          name
        }
        title
      }
      slug
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsService(sort: { fields: position, order: ASC }) {
      edges {
        node {
          ...ServiceCard
        }
      }
    }
    allDatoCmsCustomerProfile(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          ...CustomerProfileCard
          serviceCategory {
            title
          }
        }
      }
    }
    allDatoCmsPartner {
      edges {
        node {
          serviceCategory {
            title
          }
          ...PartnerCard
          title
        }
      }
    }
  }
`;
