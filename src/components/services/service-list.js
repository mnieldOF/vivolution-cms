import React from "react";
import { Link } from "gatsby";
import ServiceItem from "./service-item";
import MarkdownText from "../blocks/markdown-text";
import "./service-item.scss";

const getPlainText = (text = "") =>
  text
    .replace(/\*\*/g, "")
    .replace(/[_#>*-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const getExcerpt = (text) => {
  const plainText = getPlainText(text);

  if (plainText.length <= 130) {
    return plainText;
  }

  return `${plainText.slice(0, 130).trim()}...`;
};

const ServiceDetailPanel = ({ service, className = "" }) => (
  <article className={`service-detail-preview ${className}`}>
    <span className="service-detail-preview-kicker">Selected Service</span>
    <h2>{service.title}</h2>
    <MarkdownText
      className="service-detail-preview-copy"
      html={service.shortDescriptionNode?.childMarkdownRemark?.html}
      text={service.shortDescription}
    />
    <Link
      className="service-detail-preview-link"
      to={`/services/${service.slug}`}
    >
      Read more
      <svg
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  </article>
);

const ServiceList = ({ services }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeService = services[activeIndex]?.node;

  return (
    <div className="service-selector-layout">
      <div className="service-selector-list">
        {services.map((item, i) => {
          const { title, shortDescription } = item.node;
          return (
            <React.Fragment key={"si_" + i}>
              <ServiceItem
                title={title}
                teaser={getExcerpt(shortDescription)}
                isActive={i === activeIndex}
                onSelect={() => setActiveIndex(i)}
              />
              {i === activeIndex && (
                <ServiceDetailPanel
                  service={activeService}
                  className="service-detail-preview-mobile"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      {activeService && (
        <ServiceDetailPanel
          service={activeService}
          className="service-detail-preview-desktop"
        />
      )}
    </div>
  );
};

export default ServiceList;
