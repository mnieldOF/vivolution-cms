import React from "react";
import PortfolioItem from "./portfolio-item";

const ProfileList = ({ profiles }) => {
  return (
    <>
      {profiles.map((item, i) => {
        const {
          featuredImage,
          title,
          slug,
          logo,
          excerpt,
          shortDescription,
          customerCategory,
        } = item.node;
        return (
          <PortfolioItem
            key={"pi_" + i}
            image={featuredImage}
            title={title}
            slug={slug}
            logo={logo}
            shortText={shortDescription || excerpt}
            categories={customerCategory}
          />
        );
      })}
    </>
  );
};

export default ProfileList;
