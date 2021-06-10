import React from "react";
import { Link } from "gatsby";

const SubFooter = () => {
  return (
    <div className="sub-footer">
      <div className="container">
        <div className="box">
          <h2 className="title">Ready to kickstart your Venture?</h2>
          <p className="text">
            We’re passionate about working with businesses who want to make a
            difference. We don’t do contact forms. What we do have is a breadth
            of expertise within the team, so let us point you in the right
            direction.
          </p>
          <span>Do you have a question we can answer? </span>
          <button>
            <Link to={`/contact`}>Get in touch here</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
