import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Hero from "../../components/blocks/hero";
import MarkdownText from "../../components/blocks/markdown-text";
import { slugifyTitle } from "../../utils/slugify-title";
import "../../components/portfolio/portfolio-filter.scss";
import "../../styles/customer-profile.scss";

const getSectorParam = (location) => {
  const params = new URLSearchParams(location?.search || "");
  return params.get("sector");
};

const ServiceDetail = ({ data, location }) => {
  const blocks = data.service.blocks || [];
  const sectorTabs = React.useMemo(
    () =>
      blocks.map((block, index) => ({
        ...block,
        id: block.title ? slugifyTitle(block.title) : `section-${index}`,
      })),
    [blocks],
  );

  const getSelectedSector = React.useCallback(() => {
    const requestedSector = getSectorParam(location);
    const requestedTab = sectorTabs.find((tab) => tab.id === requestedSector);

    return requestedTab?.id || sectorTabs[0]?.id;
  }, [location, sectorTabs]);

  const [selectedSector, setSelectedSector] = React.useState(getSelectedSector);

  React.useEffect(() => {
    setSelectedSector(getSelectedSector());
  }, [getSelectedSector]);

  const activeBlock =
    sectorTabs.find((tab) => tab.id === selectedSector) || sectorTabs[0];

  const selectSector = (sectorId) => {
    setSelectedSector(sectorId);
    window.history.replaceState(
      window.history.state,
      "",
      `${location.pathname}?sector=${encodeURIComponent(sectorId)}`,
    );
  };

  return (
    <Layout cta={data.datoCmsServicePage.cta}>
      <HelmetDatoCms seo={data.service.seo} />
      <Hero
        title={data.service.hero.title}
        subtitle={data.service.hero.subtitle}
        subtext={data.service.hero.subText}
        subtextHtml={data.service.hero.subTextNode?.childMarkdownRemark?.html}
        dark
      />
      <section className="detail-body">
        <div className="detail-body-inner">
          {sectorTabs.length > 1 && (
            <div className="portfolio-filter service-detail-filter">
              <div className="filter-tabs">
                {sectorTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`filter-tab${selectedSector === tab.id ? " active" : ""}`}
                    onClick={() => selectSector(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeBlock && (
            <div className="detail-text-block">
              {activeBlock.title && (
                <h2 className="detail-section-headline">{activeBlock.title}</h2>
              )}
              <MarkdownText
                className="detail-prose"
                html={activeBlock.descriptionNode?.childMarkdownRemark?.html}
                text={activeBlock.description}
                clean
              />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;

export const query = graphql`
  query ($id: String!) {
    datoCmsServicePage {
      cta {
        title
        subtext
        maintext
        contactNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    service: datoCmsServiceCard(id: { eq: $id }) {
      hero {
        title
        subtitle
        subText
        subTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
      title
      slug
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      blocks {
        title
        description
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
