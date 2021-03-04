import React from 'react'
import styled from '@emotion/styled';
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Hero from "../components/Hero"
import  ImageGallery from "../components/image-gallery"

const SectionOne = styled.div`
  .grid{
    display: grid;
  }
  .title{
    font-weight: 700;
  }
  @media screen and (min-width: 900px){
    .grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

const About = ({ data: { about } }) => (
  <Layout>
    <Hero title="Here when you need us most" />
    <HelmetDatoCms seo={about.seoMetaTags} />
    <SectionOne>
      <div className="content-container">
        <div className="grid">
          <div className="left">
            <h2 className="title">Bringing a breadth of knowledge and expertise</h2>
            <p>With a wealth of cross-sector experience, we pride ourselves on rolling up our sleeves and working alongside our clients. Not telling them what to do, but being with them through the ups and downs</p>
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    </SectionOne>
    <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{about.title}</h1>
        <p className="sheet__lead">{about.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
    <ImageGallery />
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
