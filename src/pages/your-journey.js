import React from "react";
import { graphql, navigate } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout/layout";
import Hero from "../components/blocks/hero";
import SectorExplorer from "../components/sectors/sector-explorer";
import "../components/portfolio/portfolio-filter.scss";

const SECTOR_ORDER = [
  "start-up",
  "scale-up",
  "growth",
  "exit",
  "portfolio-management-and-acquisition",
];

const sortSectors = (sectors) =>
  [...sectors].sort((a, b) => {
    const aIndex = SECTOR_ORDER.indexOf(a.node.slug);
    const bIndex = SECTOR_ORDER.indexOf(b.node.slug);

    if (aIndex === -1 && bIndex === -1) {
      return a.node.hero.title.localeCompare(b.node.hero.title);
    }

    if (aIndex === -1) {
      return 1;
    }

    if (bIndex === -1) {
      return -1;
    }

    return aIndex - bIndex;
  });

const getSelectedSlug = (location, sectors) => {
  const params = new URLSearchParams(location.search);
  const requestedSector = params.get("sector");

  if (sectors.some(({ node }) => node.slug === requestedSector)) {
    return requestedSector;
  }

  return sectors[0]?.node.slug;
};

const YourJourney = ({ data, location }) => {
  const sectors = React.useMemo(
    () => sortSectors(data.allDatoCmsSector.edges),
    [data.allDatoCmsSector.edges],
  );
  const [selectedSlug, setSelectedSlug] = React.useState(() =>
    getSelectedSlug(location, sectors),
  );
  const selectedSector =
    sectors.find(({ node }) => node.slug === selectedSlug)?.node ||
    sectors[0].node;

  React.useEffect(() => {
    setSelectedSlug(getSelectedSlug(location, sectors));
  }, [location.search, sectors]);

  const selectSector = (slug) => {
    setSelectedSlug(slug);
    navigate(`/your-journey?sector=${slug}`);
  };

  return (
    <Layout cta={selectedSector.cta}>
      <HelmetDatoCms seo={selectedSector.seo} />
      <Hero
        title={selectedSector.hero.title}
        subtitle={selectedSector.hero.subtitle}
        subtext={selectedSector.hero.subText}
        dark
      />
      <section className="sector-explorer">
        <div className="content-container column">
          <div className="portfolio-filter sector-filter">
            <div className="filter-tabs">
              {sectors.map(({ node }) => (
                <button
                  key={node.slug}
                  type="button"
                  className={`filter-tab${selectedSlug === node.slug ? " active" : ""}`}
                  onClick={() => selectSector(node.slug)}
                >
                  {node.hero.title}
                </button>
              ))}
            </div>
          </div>
          <SectorExplorer
            sector={selectedSector}
            serviceCards={data.allDatoCmsServiceCard.edges}
          />
        </div>
      </section>
    </Layout>
  );
};

export default YourJourney;

export const query = graphql`
  {
    allDatoCmsSector {
      edges {
        node {
          id
          slug
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
