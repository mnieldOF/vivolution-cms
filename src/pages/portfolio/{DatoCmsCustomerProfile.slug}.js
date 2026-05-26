import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import DatoBlocks from "../../components/blocks/dato-blocks";
import Hero from "../../components/blocks/hero";
import CustomerProfileSlider from "../../components/portfolio/customer-profile-slider";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../../styles/customer-profile.scss";

const CustomerProfile = ({ data }) => {
  const filter = data.profile.customerCategory?.category;
  const relatedProfiles = data.allDatoCmsCustomerProfile.edges.filter(
    (item) => item.node.customerCategory.category === filter,
  );

  return (
    <Layout cta={data.datoCmsPortfolioPage.cta}>
      <HelmetDatoCms seo={data.profile.seo} />
      <Hero title={data.profile.hero.title} subtitle={data.profile.hero.subtitle} subtext={data.profile.hero.subText} image={data.profile.hero.background} dark/>
      <section className="detail-body">
        <div className="detail-body-inner">
          {data.profile.featuredImage && (
            <GatsbyImage
              image={getImage(data.profile.featuredImage)}
              alt={data.profile.title}
              className="detail-featured-image"
            />
          )}
          <DatoBlocks blocks={data.profile.blocks} detail />
        </div>
      </section>
      <CustomerProfileSlider data={relatedProfiles} />
    </Layout>
  );
};

export default CustomerProfile;

export const query = graphql`
  query ($id: String!) {
    profile: datoCmsCustomerProfile(id: { eq: $id }) {
      hero {
        title
        subtitle
        subText
      }
      title
      customerCategory {
        category
      }
      featuredImage {
        gatsbyImageData
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
        ... on DatoCmsQuoteSelect {
          id
          model {
            name
          }
          quote {
            links {
              company
              logo {
                gatsbyImageData(width: 200)
              }
              person
              position
              quote
              role
            }
          }
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    datoCmsPortfolioPage {
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
    allDatoCmsCustomerProfile {
      edges {
        node {
          ...CustomerProfileCard
          customerCategory {
            category
          }
        }
      }
    }
  }
`;
