import React from "react";
import ServiceItem from "./service-item";

const ServiceList = ({ services }) => {
  return (
    <>
      {services.map((item, i) => {
        const { title, slug, shortDescription } = item.node;
        return (
          <ServiceItem
            key={"si_" + i}
            title={title}
            slug={slug}
            shortText={shortDescription}
          />
        );
      })}
    </>
  );
};

export default ServiceList;
