import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const opportunities = [
  {
    title: "Embodied AI",
    description:
      "Learning from demonstrations, perception, robot control, and careful evaluation of physical tasks.",
  },
  {
    title: "Hardware & product",
    description:
      "Actuation, mechanical design, electronics, prototyping, and designs that can be built and maintained.",
  },
  {
    title: "Life at home",
    description:
      "Useful home interactions, intuitive controls, and thoughtful integration with everyday routines.",
  },
];

export default function InvestorPage() {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">For builders, partners &amp; investors</p>
        <h1>
          Build something
          <br />
          that belongs.
        </h1>
        <p className="page-lead">
          Woffy brings together a love of robotics and Onwords' experience with
          technology in homes. We would like to meet people who want to help
          shape the next step.
        </p>
        <a
          className="button button-primary"
          href="mailto:hello@woffy.ai?subject=Woffy%20partnership"
        >
          Start a conversation <ArrowRight size={18} aria-hidden="true" />
        </a>
      </header>

      <section
        className="split-section"
        aria-labelledby="partner-stage-heading"
      >
        <div>
          <p className="eyebrow">Where we are</p>
          <h2 id="partner-stage-heading" className="section-heading">
            An early idea.
            <br />
            Hands-on work.
          </h2>
        </div>
        <div className="prose">
          <p>
            We are building a robotics company in Coimbatore, India. Our current
            work includes training robot arms and exploring AI that can act in
            the physical world.
          </p>
          <p>
            The longer-term ambition is a friendly companion robot for the home.
            We are still in research and development, with product configuration
            and launch plans to be established through testing.
          </p>
          <Link className="text-link" to="/roadmap">
            Read the development roadmap{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section
        className="split-section"
        aria-labelledby="opportunities-heading"
      >
        <div>
          <p className="eyebrow">Places to contribute</p>
          <h2 id="opportunities-heading" className="section-heading">
            Different skills.
            <br />
            Shared curiosity.
          </h2>
        </div>
        <ol className="numbered-list">
          {opportunities.map(({ title, description }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="callout" aria-labelledby="partner-contact-heading">
        <div>
          <p className="eyebrow">Let us compare notes</p>
          <h2 id="partner-contact-heading">What would you like to build?</h2>
          <p>
            Tell us about your work and where you see a connection. For
            investment conversations, request the current project overview.
          </p>
        </div>
        <a
          className="button button-primary"
          href="mailto:hello@woffy.ai?subject=Woffy%20partnership"
        >
          <Mail size={18} aria-hidden="true" /> hello@woffy.ai
        </a>
      </section>
      <p className="section-note">
        This is a public project overview. It is not an offer of securities or a
        promise of investment returns.
      </p>
    </div>
  );
}
