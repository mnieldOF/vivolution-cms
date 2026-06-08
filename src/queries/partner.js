import { graphql } from "gatsby";

export const partnerCardFragment = graphql`
  fragment PartnerCard on DatoCmsPartner {
    partnerImage {
      gatsbyImageData
    }
  }
`;
