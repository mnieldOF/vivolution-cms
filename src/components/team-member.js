import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamMember = ({ role, description, image, name }) => {
  const profileImg = getImage(image);
  return (
    <div className="item">
      <GatsbyImage className="profile-img" image={profileImg} alt="test" />
      <p>{name}</p>
    </div>
  );
};

export default TeamMember;
