import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const directions = [
  {
    area: "Perception",
    direction: "Understand useful cues from people and nearby objects.",
    status: "Research direction",
  },
  {
    area: "Movement",
    direction: "Explore controlled motion and learning from demonstrations.",
    status: "Robot-arm experiments",
  },
  {
    area: "Interaction",
    direction:
      "Develop a friendly character through expression, sound, and movement.",
    status: "Concept exploration",
  },
  {
    area: "Home integration",
    direction: "Explore useful connections with everyday home routines.",
    status: "Proposed capability",
  },
  {
    area: "Human control",
    direction:
      "Design clear controls, predictable behavior, and ways to stop an action.",
    status: "Design requirement",
  },
];

export default function SpecsPage({ openWaitlist }) {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">Architecture &amp; design direction</p>
        <h1>
          A thoughtful robot.
          <br />
          Built one layer at a time.
        </h1>
        <p className="page-lead">
          Our focus is the connection between understanding, movement, and
          useful interaction. Here is what we are exploring.
        </p>
        <span className="status-pill">Research &amp; development</span>
      </header>

      <section className="split-section" aria-labelledby="research-heading">
        <div>
          <p className="eyebrow">On the bench today</p>
          <h2 id="research-heading" className="section-heading">
            Teach. Try. Observe.
            <br />
            Then try again.
          </h2>
        </div>
        <div className="prose">
          <p>
            We are training robot arms and exploring how AI turns a
            demonstration into a physical action. The SO-101 learning bench
            helps us study that loop.
          </p>
          <p>
            This work informs the larger Woffy vision. It does not yet
            demonstrate a complete companion robot or production-ready home
            features.
          </p>
          <Link to="/roadmap" className="text-link">
            Follow the development path{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="architecture-heading">
        <div className="section-note">
          <p className="eyebrow">The pieces we are exploring</p>
          <h2 id="architecture-heading" className="section-heading">
            From sensing to doing.
          </h2>
          <p>
            These are development directions. Availability and implementation
            will depend on testing.
          </p>
        </div>
        <div
          className="spec-table-wrap"
          tabIndex="0"
          role="region"
          aria-label="Architecture directions table"
        >
          <table className="spec-table">
            <caption className="sr-only">
              Woffy architecture areas, intended direction, and current status
            </caption>
            <thead>
              <tr>
                <th scope="col">Layer</th>
                <th scope="col">Design direction</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {directions.map(({ area, direction, status }) => (
                <tr key={area}>
                  <th scope="row">{area}</th>
                  <td>{direction}</td>
                  <td>
                    <span className="label">{status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="split-section" aria-labelledby="specs-heading">
        <div>
          <p className="eyebrow">Before a spec sheet</p>
          <h2 id="specs-heading" className="section-heading">
            Measure first.
            <br />
            Publish what holds up.
          </h2>
        </div>
        <div className="prose">
          <p>
            Production hardware, dimensions, weight, battery life, sensors,
            connectivity, and pricing are not confirmed. We will publish
            specifications when we have a tested configuration.
          </p>
          <p>
            Home navigation, autonomous charging, and smart-home control remain
            proposed features. Certifications and availability will be announced
            only when confirmed.
          </p>
          <p>
            Images of the Woffy character are concept illustrations. The final
            product may look and work differently.
          </p>
        </div>
      </section>

      <section className="callout" aria-labelledby="specs-join-heading">
        <div>
          <p className="eyebrow">Follow the experiments</p>
          <h2 id="specs-join-heading">See the idea take shape.</h2>
          <p>Get updates as the hardware and the software develop together.</p>
        </div>
        <button className="button button-primary" onClick={openWaitlist}>
          Get build updates <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>
    </div>
  );
}
