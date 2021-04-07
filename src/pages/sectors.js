import React from "react";
import Layout from "../components/layout.js";
import Hero from "../components/hero";
import ImageText from "../components/image-text";
import ContentReveal from "../components/content-reveal";
import Partners from "../components/partners";

const Sectors = () => {
  return (
    <Layout>
      <Hero />
      <ImageText />
      <ContentReveal />
      <Partners />
    </Layout>
  );
};

export default Sectors;
