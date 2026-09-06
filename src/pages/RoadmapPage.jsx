import React from "react";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    number: "01",
    status: "Current focus",
    title: "Learn on the bench",
    description:
      "Train robot arms, collect demonstrations, and study the connection between AI and physical action.",
    evidence:
      "Next evidence: repeatable tasks with clear test conditions and visible results.",
    current: true,
  },
  {
    number: "02",
    status: "Next milestone",
    title: "Bring the pieces together",
    description:
      "Develop an integrated prototype that combines the chosen hardware, control system, and interaction design.",
    evidence:
      "Gate: a working demonstration, documented limitations, and reliable human stop controls.",
  },
  {
    number: "03",
    status: "After prototype validation",
    title: "Learn in controlled pilots",
    description:
      "Evaluate the prototype with a small group in supervised environments, then improve it from observed use.",
    evidence:
      "Gate: repeatable behavior, participant feedback, and a review of safety and reliability.",
  },
  {
    number: "04",
    status: "After pilot validation",
    title: "Prepare for real homes",
    description:
      "Confirm the product configuration, manufacturing plan, support, and any required certifications.",
    evidence:
      "Gate: verified specifications, clear pricing, and a confirmed availability plan.",
  },
];

export default function RoadmapPage({ openWaitlist }) {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">The road to Woffy</p>
        <h1>
          Small steps.
          <br />
          Real progress.
        </h1>
        <p className="page-lead">
          We are at the research and development stage. Each step forward needs
          something we can demonstrate.
        </p>
        <p className="section-note">
          Status updated <time dateTime="2026-09-06">6 September 2026</time>
        </p>
      </header>

      <section aria-labelledby="roadmap-heading">
        <h2 id="roadmap-heading" className="sr-only">
          Development milestones
        </h2>
        <ol className="timeline">
          {stages.map((stage) => (
            <li
              key={stage.number}
              className={`timeline-item${stage.current ? " is-current" : ""}`}
              aria-current={stage.current ? "step" : undefined}
            >
              <span className="timeline-marker" aria-hidden="true">
                {stage.number}
              </span>
              <div className="timeline-content">
                <span className={stage.current ? "status-pill" : "eyebrow"}>
                  {stage.status}
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <p className="section-note">{stage.evidence}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="split-section" aria-labelledby="timing-heading">
        <div>
          <p className="eyebrow">How we will share progress</p>
          <h2 id="timing-heading" className="section-heading">
            The next demo matters.
          </h2>
        </div>
        <div className="prose">
          <p>
            We will share what we have tried, what worked, and what still needs
            work. Future milestones will move as we learn.
          </p>
          <p>
            There is no confirmed launch date or preorder window. Joining the
            update list does not reserve a product or commit you to a purchase.
          </p>
        </div>
      </section>

      <section className="callout" aria-labelledby="roadmap-join-heading">
        <div>
          <p className="eyebrow">From the workshop to your inbox</p>
          <h2 id="roadmap-join-heading">Be here for the next step.</h2>
          <p>
            Occasional notes on the experiments, prototypes, and people behind
            Woffy.
          </p>
        </div>
        <button className="button button-primary" onClick={openWaitlist}>
          Get build updates <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>
    </div>
  );
}
