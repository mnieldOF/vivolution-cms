import React from "react";
import ServiceItem from "./service-item";

const ServiceList = ({ services }) => {
  return (
    <>
      {services.map((item, i) => {
        const { title, slug, shortDescription, shortDescriptionNode } = item.node;
        return (
          <ServiceItem
            key={"si_" + i}
            title={title}
            slug={slug}
            shortText={shortDescription}
            shortTextHtml={shortDescriptionNode?.childMarkdownRemark?.html}
          />
        );
      })}
    </>
  );
};

export default ServiceList;
