import React from "react";
import "./sub-footer.scss";

const SubFooter = ({ cta }) => {
  if (!cta) return null;
  return (
    <section className="sub-footer">
      <div className="cta-inner">
        {cta.subtext && <p className="cta-eyebrow">{cta.subtext}</p>}
        <h2 className="cta-headline">{cta.title}</h2>
        {cta.maintext && <p className="cta-subtext">{cta.maintext}</p>}
        <div className="cta-actions">
          <a href="mailto:hello@vivolution.co.uk">Let&apos;s chat</a>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
