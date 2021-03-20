import * as React from "react";
import { StructuredText } from "react-datocms";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import QuoteBlock from "../../components/quote-block";
import FullwidthImage from "../../components/fullwidth-image";
import TwocolText from "../../components/twocol-text";

const CustomerProfile = ({ data }) => {
  const { quote, logo, profileQuote } = data.datoCmsCustomerProfile;
  return (
    <Layout>
      <Hero
        title={data.datoCmsCustomerProfile.title}
        image={data.datoCmsCustomerProfile.featuredImage}
      />
      {profileQuote ? (
        <QuoteBlock data={profileQuote} companyImage={logo} quote={quote} />
      ) : null}

      {data.datoCmsCustomerProfile.blocks.map((block) => {
        if (block.model.name === "Customer Profile Details") {
          return (
            <>
              <FullwidthImage image={block.image} />
              <TwocolText data={block} />
            </>
          );
        } else if (block.model.name === "Three column text") {
          return (
            <section className="case-about">
              <div className="content-container column">
                <div className="meta">
                  <h5 className="section-title">
                    {data.datoCmsCustomerProfile.blocks[0].sectionTitle}
                  </h5>
                  <h3 className="title">
                    {data.datoCmsCustomerProfile.blocks[0].title}
                  </h3>
                </div>
                <div className="grid">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsCustomerProfile.blocks[0].column1,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsCustomerProfile.blocks[0].column2,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.datoCmsCustomerProfile.blocks[0].column3,
                    }}
                  />
                </div>
              </div>
            </section>
          );
        }
      })}
    </Layout>
  );
};

export default CustomerProfile;

export const query = graphql`
  query($id: String!) {
    datoCmsCustomerProfile(id: { eq: $id }) {
      title
      logo {
        gatsbyImageData(width: 200)
      }
      featuredImage {
        gatsbyImageData
      }
      blocks {
        ... on DatoCmsThreeColumnText {
          id
          model {
            name
          }
          sectionTitle
          title
          column1
          column2
          column3
        }
        ... on DatoCmsCustomerProfileDetail {
          id
          model {
            name
          }
          text
          title
          image {
            gatsbyImageData
          }
          highlightedText
        }
      }
      profileQuote {
        links {
          person
          company
          quote
          role
        }
      }
    }
  }
`;
