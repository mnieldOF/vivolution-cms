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

const TemplateFour = () => {
    return(
        <Layout>
            <Hero 
                title='Portfolio'
            />
            <div className="content-container">
                <Grid>
                    <PortfolioItem />
                </Grid>
            </div>
        </Layout>
    )
}

export default TemplateFour;
