import React from "react";
import ToolItem from "./tool-item";

const ToolList = ({ tools }) => {
  return (
    <>
      {tools.map((item, i) => {
        const { title, slug, shortDescription, subtitle, available, iconName } = item.node;
        return (
          <ToolItem
            key={"ti_" + i}
            title={title}
            slug={slug}
            shortText={shortDescription}
            subtitle={subtitle}
            available={available}
            iconName={iconName}
          />
        );
      })}
    </>
  );
};

export default ToolList;
