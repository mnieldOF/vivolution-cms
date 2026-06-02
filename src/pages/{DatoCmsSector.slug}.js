import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from "../components/blocks/hero";
import "../styles/sector-explorer.scss";

const MAP_CENTER = 50;
const FALLBACK_NODE_RADIUS = 39;

const normaliseTitle = (title) =>
  (title || "").toLowerCase().replace(/&/g, "and").replace(/\s+/g, " ").trim();

const slugifyTitle = (title) =>
  normaliseTitle(title)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const sevenNodeLayout = [
  { left: 50, top: 13 },
  { left: 80, top: 28 },
  { left: 87, top: 58 },
  { left: 63, top: 85 },
  { left: 37, top: 85 },
  { left: 13, top: 58 },
  { left: 20, top: 28 },
];

const getServiceSlugByTitle = (services) =>
  services.reduce((serviceSlugs, { node }) => {
    serviceSlugs[normaliseTitle(node.title)] = node.slug;
    return serviceSlugs;
  }, {});

const SectorDetailPanel = ({ block, className, sectorTitle, serviceSlug }) => (
  <article className={className}>
    <span className="sector-detail-kicker">{sectorTitle}</span>
    <h2>{block.title}</h2>
    {block.descriptionNode?.childMarkdownRemark?.html && (
      <div
        className="sector-detail-copy"
        dangerouslySetInnerHTML={{
          __html: block.descriptionNode.childMarkdownRemark.html,
        }}
      />
    )}
    <Link className="sector-detail-link" to={`/services/${serviceSlug}`}>
      View service
    </Link>
  </article>
);

const SectorDetail = ({ data }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const blocks = data.sector.blocks;
  const activeBlock = blocks[activeIndex];
  const sectorTitle = data.sector.hero.title;
  const serviceSlugByTitle = getServiceSlugByTitle(
    data.allDatoCmsServiceCard.edges,
  );
  const activeServiceSlug =
    serviceSlugByTitle[normaliseTitle(activeBlock.title)] ||
    slugifyTitle(activeBlock.title);

  const getNodeCoordinates = (index) => {
    if (blocks.length === sevenNodeLayout.length) {
      return sevenNodeLayout[index];
    }

    const angle = -90 + (360 / blocks.length) * index;
    const radians = (angle * Math.PI) / 180;

    return {
      left: MAP_CENTER + Math.cos(radians) * FALLBACK_NODE_RADIUS,
      top: MAP_CENTER + Math.sin(radians) * FALLBACK_NODE_RADIUS,
    };
  };

  const getNodePosition = (index) => {
    const { left, top } = getNodeCoordinates(index);

    return {
      left: `${left}%`,
      top: `${top}%`,
    };
  };

  const getConnectorPath = (index) => {
    const { left, top } = getNodeCoordinates(index);
    const dx = left - MAP_CENTER;
    const dy = top - MAP_CENTER;
    const curve = index % 2 === 0 ? 1 : -1;
    const controlX = MAP_CENTER + dx * 0.52 - dy * 0.12 * curve;
    const controlY = MAP_CENTER + dy * 0.52 + dx * 0.12 * curve;

    return `M ${MAP_CENTER} ${MAP_CENTER} Q ${controlX} ${controlY} ${left} ${top}`;
  };

  return (
    <Layout cta={data.sector.cta}>
      <HelmetDatoCms seo={data.sector.seo} />
      <Hero
        title={data.sector.hero.title}
        subtitle={data.sector.hero.subtitle}
        subtext={data.sector.hero.subText}
        dark
      />
      <section className="sector-explorer">
        <div className="content-container">
          <div className="sector-explorer-layout">
            <div
              className="sector-map"
              aria-label={`${sectorTitle} service map`}
            >
              <svg
                className="sector-map-lines"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                {blocks.map((block, i) => (
                  <path
                    key={`line_${block.title}`}
                    d={getConnectorPath(i)}
                    className={i === activeIndex ? "is-active" : ""}
                  />
                ))}
              </svg>
              <div className="sector-centre-node">
                <span>Sector</span>
                <strong>{sectorTitle}</strong>
              </div>
              <div className="sector-node-list">
                {blocks.map((block, i) => (
                  <React.Fragment key={block.title}>
                    <button
                      type="button"
                      className={`sector-node ${i === activeIndex ? "is-active" : ""}`}
                      style={getNodePosition(i)}
                      onMouseEnter={() => setActiveIndex(i)}
                      onFocus={() => setActiveIndex(i)}
                      onClick={() => setActiveIndex(i)}
                      aria-pressed={i === activeIndex}
                    >
                      <span>{block.title}</span>
                    </button>
                    {i === activeIndex && (
                      <SectorDetailPanel
                        block={activeBlock}
                        className="sector-detail-panel sector-detail-panel-mobile"
                        sectorTitle={sectorTitle}
                        serviceSlug={activeServiceSlug}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <SectorDetailPanel
              block={activeBlock}
              className="sector-detail-panel sector-detail-panel-desktop"
              sectorTitle={sectorTitle}
              serviceSlug={activeServiceSlug}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SectorDetail;

export const query = graphql`
  query ($id: String!) {
    sector: datoCmsSector(id: { eq: $id }) {
      hero {
        title
        subtitle
        subText
      }
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      cta {
        title
        maintext
        subtext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
      }
      blocks {
        title
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allDatoCmsServiceCard {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
