import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import ImageText from "../components/image-text";
import Hero from "../components/hero";
import TextBlock from "../components/text-block";
import Partners from "../components/partners";
import HelpBlock from "../components/help-block";
import GrowthBlock from "../components/growth-block";
import Testimonial from "../components/testimonial";
import ImageGallery from "../components/image-gallery";
import ProfileSlider from "../components/slider";
import Test from "../components/test";
import ContentReveal from "../components/content-reveal";
import SubFooter from "../components/sub-footer";
import Footer from "../components/footer";

const IndexPage = ({ data }) => {
  const { datoCmsHome } = data;
  console.log(datoCmsHome);

  return (
    <Layout>
      <Hero
        title={datoCmsHome.content[0].title}
        image={datoCmsHome.content[0].background}
      />
      <HelpBlock data={data.allDatoCmsSector} />
      <TextBlock
        title={datoCmsHome.content[1].title}
        text={datoCmsHome.content[1].subText}
      />
      <GrowthBlock
        data={data.allDatoCmsService}
        title="Supporting Growth"
        text="From Devs to Directors, bringing you a wealth of experience and expertise to build your business. On your terms. Invested in your business and there for the long term, no matter how bumpy the ride.
"
      />
      <Testimonial />
      <Partners />
      <Test data={data.allDatoCmsCustomerProfile.edges} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    datoCmsHome {
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
    }
    allDatoCmsCustomerProfile {
      edges {
        node {
          featuredImage {
            gatsbyImageData
          }
          title
          logo {
            gatsbyImageData(width: 100)
          }
          slug
          shortDescription
        }
      }
    }
    allDatoCmsService {
      edges {
        node {
          slug
          logo {
            url
          }
        }
      }
    }
    allDatoCmsSector {
      edges {
        node {
          title
          shortDescription
          icon {
            url
          }
          slug
        }
      }
    }
  }
`;
