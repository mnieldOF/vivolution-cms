import { graphql } from "gatsby";

export const serviceCardFragment = graphql`
  fragment ServiceCard on DatoCmsServiceCard {
    slug
    shortDescription
  }
`;
