import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamMember = ({ role, image, name, slug }) => {
  const profileImg = getImage(image);
  return (
    <Link className="item" to={`/team/${slug}`}>
      <div className="image-container">
        <GatsbyImage className="profile-img" image={profileImg} alt="test" />
      </div>
      <div className="meta">
        <h4 className="name">{name}</h4>
        <p className="role">{role}</p>
      </div>
    </Link>
  );
};

export default TeamMember;
