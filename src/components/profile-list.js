import React from "react";
import PortfolioItem from "../components/portfolio-item";

const ProfileList = ({ profiles }) => {
  return (
    <>
      {profiles.map((item) => {
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
