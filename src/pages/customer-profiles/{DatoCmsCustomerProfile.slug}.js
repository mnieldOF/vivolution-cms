import * as React from "react";
import { StructuredText } from "react-datocms";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Hero from "../../components/hero";
import QuoteBlock from "../../components/quote-block";

const CustomerProfile = ({ data }) => {
  const {
    quote,
    logo,
    profileQuote,
    featuredText,
  } = data.datoCmsCustomerProfile;
  console.log(profileQuote);
  return (
    <Layout>
      <Hero
        title={data.datoCmsCustomerProfile.title}
        image={data.datoCmsCustomerProfile.featuredImage}
      />
      <QuoteBlock data={profileQuote} companyImage={logo} quote={quote} />
      <section className="case-about">
        <StructuredText className="case-about" data={featuredText} />
      </section>
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
      featuredText {
        value
      }
      featuredImage {
        gatsbyImageData
      }
      profileQuote {
        links {
          person
          role
          quote
        }
      }
    }
  }
`;
