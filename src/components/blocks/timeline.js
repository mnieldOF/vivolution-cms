import "./timeline.scss";
import React from "react";

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-inner">
        {/* <p className="timeline-eyebrow">Our milestones</p> */}
        {/* <h2 className="timeline-headline">Key moments in our journey.</h2> */}
        <svg width="100%" viewBox="0 0 680 1320" role="img">
          <title>Vivolution company timeline 2011–2021</title>
          <desc>Key milestones in Vivolution's history from founding in February 2011 through to 2021.</desc>
          <line x1="340" y1="40" x2="340" y2="1280" stroke="#D0CCC8" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Feb 2011 — founded (left) */}
          <circle cx="340" cy="80" r="7" fill="#E8336A"/>
          <path d="M333 80 Q280 80 240 80" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="228" y="74" textAnchor="end">February 2011</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="91" textAnchor="end">Vivolution founded</text>
          {/* Feb 2011 — VivoInnovate (right) */}
          <circle cx="340" cy="160" r="7" fill="#E8336A"/>
          <path d="M347 160 Q400 160 440 160" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fontStyle="italic" fill="#E8336A" x="395" y="143" textAnchor="middle">VivoInnovate</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="452" y="154">February 2011</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="171">Awarded first contract.</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="185">VivoInnovate was born.</text>
          {/* May 2011 — team grew to 5 (left) */}
          <circle cx="340" cy="250" r="7" fill="#E8336A"/>
          <path d="M333 250 Q280 250 240 250" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="228" y="244" textAnchor="end">May 2011</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="261" textAnchor="end">Team grew to 5</text>
          {/* July 2016 — VivoTech (right) */}
          <circle cx="340" cy="340" r="7" fill="#E8336A"/>
          <path d="M347 340 Q400 340 440 340" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fontStyle="italic" fill="#E8336A" x="395" y="323" textAnchor="middle">VivoTech</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="452" y="334">July 2016</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="351">Sister company Open Frequency</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="365">was born. VivoTech was born.</text>
          {/* Dec 2017 — IBM / VivoConnect (left) */}
          <circle cx="340" cy="440" r="7" fill="#E8336A"/>
          <path d="M333 440 Q280 440 240 440" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fontStyle="italic" fill="#E8336A" x="290" y="418" textAnchor="middle">VivoConnect</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="228" y="428" textAnchor="end">December 2017</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="445" textAnchor="end">First corporate partnership</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="459" textAnchor="end">with IBM. VivoConnect was born.</text>
          {/* Feb 2018 — team grew to 16 (right) */}
          <circle cx="340" cy="520" r="7" fill="#E8336A"/>
          <path d="M347 520 Q400 520 440 520" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="452" y="514">February 2018</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="531">Team grew to 16</text>
          {/* Jun 2018 — Fintech Scotland (left) */}
          <circle cx="340" cy="610" r="7" fill="#E8336A"/>
          <path d="M333 610 Q280 610 240 610" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="228" y="598" textAnchor="end">June 2018</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="615" textAnchor="end">Appointed Fintech Scotland</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="629" textAnchor="end">Cluster developers by</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="643" textAnchor="end">Scottish Enterprise.</text>
          {/* Nov 2018 — VivoStudios (right) */}
          <circle cx="340" cy="700" r="7" fill="#E8336A"/>
          <path d="M347 700 Q400 700 440 700" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fontStyle="italic" fill="#E8336A" x="395" y="683" textAnchor="middle">VivoStudios</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="452" y="694">November 2018</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="711">Bought property in Glasgow.</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="725">VivoStudios was born.</text>
          {/* Jan 2019 — Edinburgh office (left) */}
          <circle cx="340" cy="790" r="7" fill="#E8336A"/>
          <path d="M333 790 Q280 790 240 790" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="228" y="784" textAnchor="end">January 2019</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="801" textAnchor="end">Edinburgh office opened</text>
          {/* Mar 2019 — VivoVentures (right) */}
          <circle cx="340" cy="870" r="7" fill="#E8336A"/>
          <path d="M347 870 Q400 870 440 870" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fontStyle="italic" fill="#E8336A" x="395" y="853" textAnchor="middle">VivoVentures</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="452" y="864">March 2019</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="881">VivoVentures is incorporated.</text>
          {/* May 2019 — team grew to 25 (left) */}
          <circle cx="340" cy="960" r="7" fill="#E8336A"/>
          <path d="M333 960 Q280 960 240 960" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="228" y="954" textAnchor="end">May 2019</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="971" textAnchor="end">Team grew to 25</text>
          {/* Sep 2020 — Embark Group (right) */}
          <circle cx="340" cy="1050" r="7" fill="#E8336A"/>
          <path d="M347 1050 Q400 1050 440 1050" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="452" y="1044">September 2020</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="1061">Corporate partnership</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="452" y="1075">with Embark Group.</text>
          {/* Jun 2021 — Arrow ECS (left) */}
          <circle cx="340" cy="1150" r="7" fill="#E8336A"/>
          <path d="M333 1150 Q280 1150 240 1150" fill="none" stroke="#D0CCC8" strokeWidth="1.5"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="13" fontWeight="600" fill="#111118" x="228" y="1144" textAnchor="end">June 2021</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="1161" textAnchor="end">Corporate partnership</text>
          <text fontFamily="DM Sans,sans-serif" fontSize="12" fill="#888" x="228" y="1175" textAnchor="end">with Arrow ECS.</text>
        </svg>
      </div>
    </section>
  );
};

export default Timeline;
