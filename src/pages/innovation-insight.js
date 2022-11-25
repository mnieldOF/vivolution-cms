import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Hero from "../components/hero";
import FullwidthImage from "../components/fullwidth-image";
import { StructuredText } from "react-datocms";
import { Link } from "gatsby";
import DatoBlocks from "../components/dato-blocks";
import HubspotForm from 'react-hubspot-form';


const Grid = styled.div`
  display: grid;
  padding: 30px 0;
  grid-gap: 20px;
  @media screen and (min-width: 900px) {
    padding: 100px 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TextBlock = styled.div`
  padding: 30px 0;
  background: var(--color-primary-white);
  max-width: 875px;
  margin: 0 auto;
  @media screen and (min-width: 900px) {
    padding: 60px 0;
  }
`;

const Section = styled.div`
  background: var(--color-primary-white);
  padding: 30px 0;
  @media screen and (min-width: 900px) {
    padding: 60px 0;
  }
`;

const Portfolio = ({ data }) => {


  const { intro, description } = data.datoCmsInnovationInsight;
  return (
    <Layout>
      <Hero title={intro[0].title} image={intro[0].background} />
      <FullwidthImage image={data.datoCmsInnovationInsight.partners[0].image}>
      </FullwidthImage>
      <div className="content-container blog">
        <StructuredText
          data={data.datoCmsInnovationInsight.about}
        />
        <div class="sub-footer">
          <div className="container">
            <div className="box">
              <button>
                <Link to={`#participate`}>
                  {data.datoCmsInnovationInsight.participate}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FullwidthImage image={data.datoCmsInnovationInsight.screenshot[0].image}>
      </FullwidthImage>

      <DatoBlocks blocks={data.datoCmsInnovationInsight.detail} />
      <section className="case-about" id="participate">
        <div class="content-container column">
          <div class="grid">
            <div></div>
            <div>
              <StructuredText
                data={data.datoCmsInnovationInsight.dataCaptureText}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div class="content-container column">
          <div class="grid">
            <div></div>            
            <div>
            <HubspotForm
                portalId='25192533'
                region='eu1'
                formId='0c3401ed-4978-4db4-b9f1-704115faf685'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
              
             
              <div></div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Portfolio;

export const query = graphql`
  {
    datoCmsInnovationInsight {
      intro {
        background {
          gatsbyImageData
        }
        title      
      }
      partners {        
        ... on DatoCmsImageBlock {          
          image {
            gatsbyImageData
          }
        }
      }
      screenshot {        
        ... on DatoCmsImageBlock {          
          image {
            gatsbyImageData
          }
        }
      }
      about {
        value        
      }
      dataCaptureText {
        value        
      }
      description
      participate
      detail{
        ... on DatoCmsCustomerProfileDetail {
          id
          model {
            name
          }
          highlightedText
          image {
            gatsbyImageData
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
          title
        }

      }
    }
    
  }
`;
