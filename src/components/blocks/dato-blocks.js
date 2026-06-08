import React from "react";
import FullwidthImage from "./fullwidth-image";
import TwocolText from "./twocol-text";
import QuoteBlock from "./quote-block";
import DetailQuote from "./detail-quote";
import Hero from "./hero";
import TextBlock from "./text-block";
import Values from "./values";
import History from "./history";
import ImageGallery from "./image-gallery";

const DatoBlocks = ({ blocks, dark, detail }) => {
  return blocks.map((block, i) => {
    if (block.model.name === "Customer Profile Details") {
      return (
        <>
          <TwocolText key={`tct-${i}`} data={block} />
        </>
      );
    } else if (block.model.name === "Three column text") {
      return (
        <section className="case-about" key={`tct-${i}`}>
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
      return block.quote.links.map((data, i) => {
        if (detail) {
          return (
            <DetailQuote
              key={`dq-${i}`}
              quote={data.quote}
              person={data.person}
              role={data.role}
              company={data.company}
            />
          );
        }
        return (
          <QuoteBlock
            key={`qb-${i}`}
            data={data}
            companyImage={data.logo}
            quote={data.quote}
          />
        );
      });
    } else if (block.model.name === "Values Block") {
      return <Values key={`v-${i}`} data={block} />;
    } else if (block.model.name === "Hero Banner") {
      return (
        <Hero
          key={`h-${i}`}
          title={block.title}
          subtitle={block.subtitle}
          subtext={block.subText}
          image={block.background}
          dark={dark}
        />
      );
    } else if (block.model.name === "Title Text") {
      return (
        <TextBlock
          key={`tb-${i}`}
          title={block.title}
          text={block.subText}
          textHtml={block.subTextNode?.childMarkdownRemark?.html}
        />
      );
    } else if (block.model.name === "Image block") {
      return <FullwidthImage key={`fwi-${i}`} image={block.image} />;
    } else if (block.model.name === "History") {
      return <History key={`hb-${i}`} data={block} />;
    } else if (block.model.name === "Image Gallery") {
      return <ImageGallery key={`ig-${i}`} data={block} />;
    } else return null;
  });
};

export default DatoBlocks;
