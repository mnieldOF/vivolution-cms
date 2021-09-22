import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import TextBlock from "../components/text-block";
import Partners from "../components/partners";
import HelpBlock from "../components/help-block";
import GrowthBlock from "../components/growth-block";
import Numbers from "../components/numbers";
import Testimonial from "../components/testimonial";
import Test from "../components/test";

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
      <Numbers data={datoCmsHome.numbers} />
      <GrowthBlock
        data={data.allDatoCmsService}
        title={datoCmsHome.content[2].title}
        text={datoCmsHome.content[2].subText}
      />
      <Testimonial image={datoCmsHome.image} />
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
          shortDescription
          cardImage {
            gatsbyImageData
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
