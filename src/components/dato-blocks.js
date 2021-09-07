import React from "react";
import FullwidthImage from "./fullwidth-image";
import TwocolText from "./twocol-text";
import QuoteBlock from "./quote-block";
import Hero from "./hero";
import TextBlock from "./text-block";
import Values from "./values";

const DatoBlocks = ({ blocks }) => {
  console.log("blocks", blocks);
  return blocks.map((block) => {
    if (block.model.name === "Customer Profile Details") {
      return (
        <>
          <FullwidthImage image={block.image} />
          <TwocolText data={block} />
        </>
      );
    } else if (block.model.name === "Three column text") {
      return (
        <section className="case-about">
          <div className="content-container column">
            <div className="meta">
              <h5 className="section-title">{block.sectionTitle}</h5>
              <h3 className="title">{block.title}</h3>
            </div>
            <div className="grid">
              <div
                dangerouslySetInnerHTML={{
                  __html: block.column1,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: block.column2,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: block.column3,
                }}
              />
            </div>
          </div>
        </section>
      );
    } else if (block.model.name === "Quote select") {
      return block.quote.links.map((data) => {
        const { logo, quote } = data;
        return <QuoteBlock data={data} companyImage={logo} quote={quote} />;
      });
    } else if (block.model.name === "Values Block") {
      return <Values data={block} />;
    } else if (block.model.name === "Hero Banner") {
      return <Hero title={block.title} image={block.background} />;
    } else if (block.model.name === "Title Text") {
      return <TextBlock title={block.title} text={block.subText} />;
    } else if (block.model.name === "Image block") {
      return <FullwidthImage image={block.image} />;
    } else return null;
  });
};

export default DatoBlocks;
