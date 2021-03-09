import React from 'react'
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout";
import Hero from "../components/hero";
import QuoteBlock from "../components/quote-block";
import Cards from "../components/cards";
import FullwidthImage from "../components/fullwidth-image";
import TwocolText from "../components/twocol-text";

const TemplateSeven = () => {
    return(
        <Layout>
            <Hero />
            <QuoteBlock />
            <Cards />
            <section className="case-about">
                <div className="content-container column">
                    <div className="meta">
                        <h5 className="section-title">About</h5>  
                        <h2 className="title">Oxford Cancer Biomarkers</h2>
                    </div>    
                    <div className="grid">
                        <div>
                            <p>Oxford Cancer Biomarkers (OCB) provides personalised solutions that meet important needs across the cancer care pathway. Early detection of cancer risk and dramatically improving outcomes using personalised medicine and digital healthcare are core themes.  OCB achieves these aims by applying platforms that incorporate biomarker-based technology with digital solutions and integrated lifestyle advice.</p>
                        </div>
                        <div>
                            <p>OCB is a partner to the University Hospital Coventry and Warwickshire NHS Trust’s successful bid for the PathLAKE project; in which UK Research and Innovation will invest £10million as part of the Industrial Strategy Challenge Fund. OCB’s role is to provide cutting-edge expertise through its existing ColoProg® image analysis platform. The PathLAKE </p>
                        </div>
                        <div>
                            <p>resources will enable OCB and its IBM channel partner Meridian IT to identify novel diagnostic biomarkers in the tumour microenvironment to improve early diagnosis and individual patient risk stratification. Oxford Cancer Biomarkers is closely affiliated with The University of Oxford, where its founders lead research groups focused on translational cancer science.</p>
                        </div>
                    </div>
                </div>
            </section>
            <FullwidthImage />
            <TwocolText />
        </Layout>
    )
}

export default TemplateSeven;
