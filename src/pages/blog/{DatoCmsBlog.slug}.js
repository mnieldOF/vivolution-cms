import * as React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero
        title={data.datoCmsSector.heroBanner[0].title}
        image={data.datoCmsSector.heroBanner[0].background}
      />
      <ImageText
        title={data.datoCmsSector.imageText[0].title}
        text={data.datoCmsSector.imageText[0].subText}
        image={data.datoCmsSector.imageText[0].image}
      />
      <ContentReveal
        tabs={data.datoCmsSector.tabs}
        tabTitle={data.datoCmsSector.tabTitle}
      />
      <Partners />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    datoCmsBlog(id: { eq: $id }) {
      id
    }
  }
`;
