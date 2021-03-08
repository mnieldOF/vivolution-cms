import React from 'react'
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout";
import Hero from "../components/hero";
import QuoteBlock from "../components/quote-block";

const TemplateSeven = () => {
    return(
        <Layout>
            <Hero />
            <QuoteBlock />
        </Layout>
    )
}

export default TemplateSeven;
