import { graphql } from "gatsby";

export const toolCardFragment = graphql`
  fragment ToolCard on DatoCmsTool {
    title
    slug
    shortDescription
  }
`;
