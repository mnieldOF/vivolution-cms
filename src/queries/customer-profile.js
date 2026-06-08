import { graphql } from "gatsby";

export const customerProfileCardFragment = graphql`
  fragment CustomerProfileCard on DatoCmsCustomerProfile {
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
`;
