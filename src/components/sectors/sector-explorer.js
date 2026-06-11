import React from "react";
import { Link } from "gatsby";
import { normaliseTitle, slugifyTitle } from "../../utils/slugify-title";
import "../../styles/sector-explorer.scss";

const MAP_CENTER = 50;
const FALLBACK_NODE_RADIUS = 39;

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

const SectorDetailPanel = ({
  block,
  className,
  sectorTitle,
  sectorSlug,
  serviceSlug,
}) => (
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
    <Link
      className="sector-detail-link"
      to={`/how-we-help/${serviceSlug}?sector=${encodeURIComponent(sectorSlug)}`}
    >
      View service
    </Link>
  </article>
);

const SectorExplorer = ({ sector, serviceCards }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const blocks = sector.blocks;
  const activeBlock = blocks[activeIndex];
  const sectorTitle = sector.hero.title;
  const sectorSlug = sector.slug || slugifyTitle(sectorTitle);
  const serviceSlugByTitle = getServiceSlugByTitle(serviceCards);
  const activeServiceSlug =
    serviceSlugByTitle[normaliseTitle(activeBlock.title)] ||
    slugifyTitle(activeBlock.title);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [sector.id]);

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
    <div className="sector-explorer-layout">
      <div className="sector-map" aria-label={`${sectorTitle} service map`}>
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
                style={{
                  ...getNodePosition(i),
                  "--node-wobble-duration": `${5.4 + (i % 4) * 0.4}s`,
                  "--node-wobble-delay": `${i * -0.34}s`,
                }}
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
                  sectorSlug={sectorSlug}
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
        sectorSlug={sectorSlug}
        serviceSlug={activeServiceSlug}
      />
    </div>
  );
};

export default SectorExplorer;
