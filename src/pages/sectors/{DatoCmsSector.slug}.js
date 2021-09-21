import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import ImageText from "../../components/image-text";
import ContentReveal from "../../components/content-reveal";
import Partners from "../../components/partners";
import Test from "../../components/test";

const Sector = ({ data }) => {
  console.log("sector", data);
  const filter = data.datoCmsSector.title;
  const filteredData = data.allDatoCmsCustomerProfile.edges.filter((item) =>
    item.node.sectorCategory.some((x) => x.title === filter)
  );

  return (
    <Layout>
      <Hero
        title={data.datoCmsSector.heroBanner[0].title}
        image={data.datoCmsSector.heroBanner[0].background}
      />
      <ImageText
        title={data.datoCmsSector.imageText[0].title}
        text={data.datoCmsSector.imageText[0].subText}
        image={data.datoCmsSector.imageText[0].image}
      />
      <ContentReveal
        tabs={data.datoCmsSector.tabs}
        tabTitle={data.datoCmsSector.tabTitle}
      />
      <Partners />
      <Test data={filteredData} />
    </Layout>
  );
};

export default Sector;

export const query = graphql`
  query($id: String!) {
    datoCmsSector(id: { eq: $id }) {
      title
      tabTitle
      tabs {
        title
        tabContent {
          value
          links {
            __typename
            ... on DatoCmsSector {
              id: originalId
              slug
              title
            }
            ... on DatoCmsService {
              id: originalId
              slug
              title
            }
          }
        }
      }
      imageText {
        title
        subText
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
    }
    allDatoCmsCustomerProfile {
      edges {
        node {
          sectorCategory {
            title
          }
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
  }
`;
