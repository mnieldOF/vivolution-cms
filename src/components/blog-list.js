import React from "react";
import BlogItem from "./blog-item";

const ProfileList = ({ profiles }) => {
  return (
    <>
      {profiles.map((item, i) => {
        const { featuredImage, title, slug, logo, excerpt, shortDescription } =
          item.node;
        return (
          <BlogItem
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
