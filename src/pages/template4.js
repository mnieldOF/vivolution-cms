import React from 'react'
import styled from '@emotion/styled'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"
import Hero from "../components/hero"
import PortfolioItem from "../components/portfolio-item"

const Grid = styled.div`
    display: grid;
    @media screen and (min-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
`
const Section = styled.div`
    background: var(--color-primary-white);
    padding: 30px 0;
    @media screen and (min-width: 900px) {
        padding: 60px 0;
    }
`

const TemplateFour = () => {
    return(
        <Layout>
            <Hero 
                title='Portfolio'
            />
            <Section>
                <div className="content-container">
                    <Grid>
                        <PortfolioItem />
                    </Grid>
                </div>
            </Section>
        </Layout>
    )
}

export default TemplateFour;
