import { graphql } from "gatsby";

export const serviceCardFragment = graphql`
  fragment ServiceCard on DatoCmsService {
    slug
    logo {
      url
    }
    shortDescription
    cardImage {
      gatsbyImageData
    }
  }
`;
