import { graphql } from "gatsby";

export const sectorCardFragment = graphql`
  fragment SectorCard on DatoCmsSector {
    title
    shortDescription
    icon {
      url
    }
    slug
  }
`;
