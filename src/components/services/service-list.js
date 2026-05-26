import React from "react";
import ServiceItem from "./service-item";

const ServiceList = ({ services }) => {
  return (
    <>
      {services.map((item, i) => {
        const { title, slug, shortDescription, serviceCategory } = item.node;
        return (
          <ServiceItem
            key={"si_" + i}
            title={title}
            slug={slug}
            shortText={shortDescription}
            category={serviceCategory?.category}
          />
        );
      })}
    </>
  );
};

export default ServiceList;
