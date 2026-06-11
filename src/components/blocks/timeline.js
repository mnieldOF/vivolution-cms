import "./timeline.scss";
import React, { useCallback, useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    date: "2011",
    text: "Awarded first contract, marking company launch",
  },
  {
    date: "2016",
    text: "Software development capability established, broadening service offering",
  },
  {
    date: "2017",
    text: "Strategic corporate partnership with IBM formed",
  },
  {
    date: "2018",
    text: "Appointed FinTech Scotland Network Integrator by Scottish Enterprise",
  },
  {
    date: "2018",
    text: "Vivolution Studios launched with first property acquisition in Glasgow",
  },
  {
    date: "2019",
    text: "Edinburgh office opened; team scaled rapidly to 25 people",
  },
  {
    date: "2020",
    text: "Corporate partnership with Embark Group secured",
  },
  {
    date: "2021",
    text: "Arrow ECS partnership established as IBM Global Distributor",
  },
  {
    date: "2022",
    text: "Healthtech Scotland founded, powered by Vivolution",
  },
  {
    date: "2022",
    text: "Class4Kids successful exit to The Access Group",
  },
  {
    date: "2023",
    text: "Portfolio company Exizent secured £3.2m investment with Vivolution support",
  },
  {
    date: "2025",
    text: "Vivolution Venture Investment Programme (ViP) launched with IBM, Deepbridge & TES",
  },
  {
    date: "2026",
    text: "Portfolio expanded to 14 fully remodelled office spaces at Mitchell Lane",
  },
];

const Timeline = () => {
  const viewportRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const maximumScroll = viewport.scrollWidth - viewport.clientWidth;
    const nextProgress =
      maximumScroll > 0 ? (viewport.scrollLeft / maximumScroll) * 100 : 100;
    const viewportCentre =
      viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
    const milestones = Array.from(
      viewport.querySelectorAll(".timeline-milestone"),
    );
    const closestMilestone = milestones.reduce(
      (closest, milestone, index) => {
        const bounds = milestone.getBoundingClientRect();
        const distance = Math.abs(
          bounds.left + bounds.width / 2 - viewportCentre,
        );

        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    setProgress(Math.min(100, Math.max(0, nextProgress)));
    setCanScrollBack(viewport.scrollLeft > 4);
    setCanScrollForward(viewport.scrollLeft < maximumScroll - 4);
    setActiveIndex(closestMilestone.index);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return undefined;
    }

    updateScrollState();
    viewport.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      viewport.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const focusMilestone = (index) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const milestones = viewport.querySelectorAll(".timeline-milestone");
    const milestone = milestones[index];

    if (!milestone) {
      return;
    }

    viewport.scrollTo({
      left:
        milestone.offsetLeft -
        viewport.clientWidth / 2 +
        milestone.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const moveTimeline = (direction) => {
    const nextIndex = Math.min(
      MILESTONES.length - 1,
      Math.max(0, activeIndex + direction),
    );

    focusMilestone(nextIndex);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTimeline(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTimeline(1);
    }
  };

  return (
    <section className="timeline-section" aria-labelledby="timeline-title">
      <div className="timeline-heading">
        <div>
          <p className="timeline-eyebrow">Our journey</p>
          <h4 id="timeline-title">Milestones along the way</h4>
        </div>
        <div className="timeline-controls" aria-label="Timeline controls">
          <button
            type="button"
            onClick={() => moveTimeline(-1)}
            disabled={!canScrollBack}
            aria-label="View earlier milestones"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => moveTimeline(1)}
            disabled={!canScrollForward}
            aria-label="View later milestones"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        className="timeline-viewport"
        ref={viewportRef}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        aria-label="Vivolution company timeline. Scroll horizontally to explore."
      >
        <ol className="timeline-track">
          {MILESTONES.map((milestone, index) => (
            <li
              className={`timeline-milestone ${
                activeIndex === index ? "is-active" : ""
              } ${Math.abs(activeIndex - index) === 1 ? "is-near" : ""}`}
              key={`${milestone.date}-${milestone.text}`}
              aria-current={activeIndex === index ? "step" : undefined}
              aria-label={`${milestone.date}: ${milestone.text}`}
              onClick={() => focusMilestone(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  focusMilestone(index);
                }
              }}
              role="button"
              tabIndex={activeIndex === index ? "0" : "-1"}
            >
              <div className="timeline-content">
                <span className="timeline-date">{milestone.date}</span>
                <p>{milestone.text}</p>
              </div>
              <span className="timeline-connector" aria-hidden="true" />
              <span className="timeline-dot" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>

      <div className="timeline-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
};

export default Timeline;
