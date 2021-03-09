import React from 'react'
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
import Hero from "../components/hero"
import ImageText from "../components/image-text"
import Partners from "../components/partners"
import ContentReveal from '../components/content-reveal'
import Slider from '../components/slider'


const TemplateTwo = () => {
    return(
        <Layout>
            <Hero 
                title='Investing in startups that make a difference'
            />
            <ImageText 
                title="We help startups succeed and grow"
                text="Scaling a new business can be frustrating – your team of the future is also the team you need now to get you there. Vivolution can get you to that next level, by dropping in the right people for as long as you need them. From Execs to Devs, on terms that match the stage of your business."
            />
            <ContentReveal />
            <Partners />
            <Slider />
        </Layout>
    )
}

export default TemplateTwo;
