import React from "react";
import PortfolioItem from "../components/portfolio-item";

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
        } = item.node;
        return (
          <PortfolioItem
            key={"pi_" + i}
            image={featuredImage}
            title={title}
            slug={slug}
            logo={logo}
            shortText={shortDescription || excerpt}
          />
        );
      })}
    </>
  );
};

export default ProfileList;
