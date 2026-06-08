import "./team-member.scss";
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TeamMember = ({ role, image, name, slug }) => {
  const profileImg = getImage(image);
  return (
    <Link className="team-card" to={`/team/${slug}`}>
      <div className="team-photo">
        <GatsbyImage image={profileImg} alt={name} />
      </div>
      <p className="team-name">{name}</p>
      <p className="team-title">{role}</p>
    </Link>
  );
};

export default TeamMember;
