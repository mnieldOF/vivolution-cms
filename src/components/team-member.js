import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamMember = ({ role, description, image, name, categories, slug }) => {
  const profileImg = getImage(image);
  return (
    <div className="item">
      <GatsbyImage className="profile-img" image={profileImg} alt="test" />
      <p>{name}</p>
      {categories.map((cat) => {
        return (
          <>
            <div>{cat.category}</div>
          </>
        );
      })}
    </div>
  );
};

export default TeamMember;
