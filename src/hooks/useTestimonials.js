import { useStaticQuery, graphql } from "gatsby";

export const useTestimonials = () => {
  return useStaticQuery(graphql`
    {
      allDatoCmsQuote {
        edges {
          node {
            person
            role
            quote
            company
          }
        }
      }
    }
  `);
};
