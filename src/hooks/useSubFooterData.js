import { useStaticQuery, graphql } from "gatsby";

export const useSubFooterData = () => {
  return useStaticQuery(graphql`
    {
      datoCmsCtaContact {
        title
        subtext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
        mainText
      }
    }
  `);
};
