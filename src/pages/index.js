import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import ImageText from "../components/image-text"
import Hero from "../components/hero"
import TextBlock from "../components/text-block";
import Partners from "../components/partners";
import HelpBlock from "../components/help-block";
import GrowthBlock from "../components/growth-block";
import Testimonial from "../components/testimonial";
import ImageGallery from "../components/image-gallery";
import Slider from "../components/slider";
import ContentReveal from "../components/content-reveal"
import SubFooter from "../components/sub-footer";
import Footer from "../components/footer";

const IndexPage = ({ data }) => (
  <Layout> 
    <Hero title='Building ventures that make a difference' />
    <TextBlock 
      title='We give our clients the team they need, when they need it most - at the start of the journey.'  
      text='From Devs to Directors, bringing you a wealth of experience and expertise to build your business. On your terms. Invested in your business and there for the long term, no matter how bumpy the ride.'
    />
    <HelpBlock />
    <GrowthBlock />
    <Testimonial />
    <Partners />
    <Slider />
    {/* <Layout>
      <Masonry className="showcase">
        {data.allDatoCmsWork.edges.map(({ node: work }) => (
          <div key={work.id} className="showcase__item">
            <figure className="card">
              <Link to={`/works/${work.slug}`} className="card__image">
                <Img fluid={work.coverImage.fluid} />
              </Link>
              <figcaption className="card__caption">
                <h6 className="card__title">
                  <Link to={`/works/${work.slug}`}>{work.title}</Link>
                </h6>
                <div className="card__description">
                  <p>{work.excerpt}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </Masonry>
    </Layout> */}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
