import "./timeline.scss";
import React from "react";

const MILESTONES = [
  {
    date: "2011",
    lines: ["Awarded first contract,", "marking company launch"],
  },
  {
    date: "2016",
    lines: [
      "Software development capability",
      "established, broadening",
      "service offering",
    ],
  },
  {
    date: "2017",
    lines: ["Strategic corporate partnership", "with IBM formed"],
  },
  {
    date: "2018",
    lines: [
      "Appointed FinTech Scotland",
      "Network Integrator by",
      "Scottish Enterprise",
    ],
  },
  {
    date: "2018",
    lines: [
      "Vivolution Studios launched",
      "with first property acquisition",
      "in Glasgow",
    ],
  },
  {
    date: "2019",
    lines: ["Edinburgh office opened;", "team scaled rapidly to 25 people"],
  },
  {
    date: "2020",
    lines: ["Corporate partnership with", "Embark Group secured"],
  },
  {
    date: "2021",
    lines: [
      "Arrow ECS partnership",
      "established as IBM",
      "Global Distributor",
    ],
  },
  {
    date: "2022",
    lines: ["Healthtech Scotland founded,", "powered by Vivolution"],
  },
  {
    date: "2022",
    lines: ["Class4Kids successful exit", "to The Access Group"],
  },
  {
    date: "2023",
    lines: [
      "Portfolio company Exizent",
      "secured £3.2m investment",
      "with Vivolution support",
    ],
  },
  {
    date: "2025",
    lines: [
      "Vivolution Venture Investment",
      "Programme (ViP) launched with",
      "IBM, Deepbridge & TES",
    ],
  },
  {
    date: "2026",
    lines: [
      "Portfolio expanded to 14 fully",
      "remodelled office spaces",
      "at Mitchell Lane",
    ],
  },
];

const WIDTH = 680;
const CENTRE_X = WIDTH / 2;
const START_Y = 70;
const ITEM_GAP = 96;
const HEIGHT = START_Y * 2 + (MILESTONES.length - 1) * ITEM_GAP;

const Timeline = () => (
  <section className="timeline-section">
    <div className="timeline-inner">
      <svg
        width="100%"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby="timeline-title timeline-description"
      >
        <title id="timeline-title">Vivolution company timeline</title>
        <desc id="timeline-description">
          Key milestones in Vivolution&apos;s history from 2011 to 2026.
        </desc>
        <line
          x1={CENTRE_X}
          y1="30"
          x2={CENTRE_X}
          y2={HEIGHT - 30}
          stroke="#D0CCC8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {MILESTONES.map((milestone, index) => {
          const y = START_Y + index * ITEM_GAP;
          const isLeft = index % 2 === 0;
          const textX = isLeft ? 228 : 452;
          const lineEndX = isLeft ? 240 : 440;
          const anchor = isLeft ? "end" : "start";

          return (
            <g key={`${milestone.date}-${milestone.lines[0]}`}>
              <circle cx={CENTRE_X} cy={y} r="7" fill="#E8336A" />
              <path
                d={`M ${isLeft ? CENTRE_X - 7 : CENTRE_X + 7} ${y} Q ${
                  isLeft ? 280 : 400
                } ${y} ${lineEndX} ${y}`}
                fill="none"
                stroke="#D0CCC8"
                strokeWidth="1.5"
              />
              <text
                fontFamily="DM Sans,sans-serif"
                fontSize="13"
                fontWeight="600"
                fill="#111118"
                x={textX}
                y={y - 8}
                textAnchor={anchor}
              >
                {milestone.date}
              </text>
              <text
                fontFamily="DM Sans,sans-serif"
                fontSize="12"
                fill="#888"
                x={textX}
                y={y + 10}
                textAnchor={anchor}
              >
                {milestone.lines.map((line, lineIndex) => (
                  <tspan key={line} x={textX} dy={lineIndex === 0 ? 0 : 15}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  </section>
);

export default Timeline;
