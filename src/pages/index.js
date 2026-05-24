import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import TextBlock from "../components/blocks/text-block";
import HelpBlock from "../components/blocks/help-block";
import GrowthBlock from "../components/blocks/growth-block";
import Numbers from "../components/blocks/numbers";
import Testimonial from "../components/blocks/testimonial";
import CustomerProfileSlider from "../components/portfolio/customer-profile-slider";
import Video from "../assets/vivo-comp.mp4";

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsHome.seo} />
      <Hero
        title={datoCmsHome.content[0].title}
        image={datoCmsHome.content[0].background}
      >
        <video
          loop
          preload="auto"
          autoPlay
          webkit-playsinline="true"
          playsInline={true}
          muted={true}
          poster={datoCmsHome.videoPosterImage.url}
        >
          <source src={Video} />
        </video>
      </Hero>
      <HelpBlock data={data.allDatoCmsSector} />
      <TextBlock
        title={datoCmsHome.content[1].title}
        text={datoCmsHome.content[1].subText}
      />
      <Numbers data={datoCmsHome.numbers} />
      <GrowthBlock data={data.allDatoCmsService} />
      <Testimonial image={datoCmsHome.image} />
      <CustomerProfileSlider image data={data.allDatoCmsCustomerProfile.edges} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    datoCmsHome {
      videoPosterImage {
        url
      }
      content {
        ... on DatoCmsHeroBanner {
          id
          background {
            gatsbyImageData
          }
          title
        }
        ... on DatoCmsTitleText {
          id
          subText
          title
        }
      }
      numbers {
        number
        prefix
        suffix
        text
      }
      image {
        image {
          gatsbyImageData
        }
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsCustomerProfile(sort: { fields: slug, order: ASC }) {
      edges {
        node {
          ...CustomerProfileCard
        }
      }
    }
    allDatoCmsService(sort: { fields: position, order: ASC }) {
      edges {
        node {
          ...ServiceCard
        }
      }
    }
    allDatoCmsSector(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          ...SectorCard
        }
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
  }
`;
