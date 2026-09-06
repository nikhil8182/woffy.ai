import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage({ openWaitlist }) {
  return (
    <div className="page-shell">
      <header className="page-intro">
        <p className="eyebrow">The story behind Woffy</p>
        <h1>
          A little curiosity.
          <br />A lot of heart.
        </h1>
        <p className="page-lead">
          We are building a robotics company around a simple idea: technology
          should feel at home with people.
        </p>
      </header>

      <section className="split-section" aria-labelledby="roddy-heading">
        <div>
          <p className="eyebrow">Our first inspiration</p>
          <h2 id="roddy-heading" className="section-heading">
            It started with Roddy.
          </h2>
        </div>
        <div className="prose">
          <p>
            Roddy, a golden retriever, reminded us how much the small things
            matter. The way a dog notices you. The curiosity. The quiet company.
          </p>
          <p>
            That feeling is the inspiration for Woffy: a companion robot with a
            friendly presence, built to share everyday spaces with people.
          </p>
          <p>
            We are exploring how thoughtful movement, expressive interaction,
            and useful actions can bring that idea into the real world.
          </p>
        </div>
      </section>

      <section className="split-section" aria-labelledby="workshop-heading">
        <figure className="panel bench-figure">
          <img
            src="/images/so101-bench.webp"
            alt="SO-101 robot-arm learning bench used for robotics experiments"
            className="bench-image"
            width="1000"
            height="1251"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            From the workshop: our SO-101 learning bench. This is research
            equipment, not the finished Woffy robot.
          </figcaption>
        </figure>
        <div className="prose">
          <p className="eyebrow">Built in Coimbatore, India</p>
          <h2 id="workshop-heading" className="section-heading">
            Learning by building.
          </h2>
          <p>
            Founder Nikhil Deepak uses AI in the day-to-day work of running
            Onwords, from sales to team follow-ups. With Woffy, that curiosity
            extends into physical machines.
          </p>
          <p>
            Today, the work includes training robot arms and exploring how AI
            can connect perception with action. Woffy is in research and
            development.
          </p>
          <Link to="/roadmap" className="text-link">
            See where we are <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="split-section" aria-labelledby="onwords-heading">
        <div>
          <p className="eyebrow">From the Onwords family</p>
          <h2 id="onwords-heading" className="section-heading">
            Made for life at home.
          </h2>
        </div>
        <div className="prose">
          <p>
            Woffy grows out of Onwords and its work in smart homes and
            automation. The same interest in useful technology for everyday life
            shapes this new direction.
          </p>
          <p>
            Our ambition is a robot that belongs in a home. Getting there means
            testing the basics carefully: movement, interaction, reliability,
            and human control.
          </p>
        </div>
      </section>

      <section className="callout" aria-labelledby="about-join-heading">
        <div>
          <p className="eyebrow">Come along for the build</p>
          <h2 id="about-join-heading">
            Good things start with curious people.
          </h2>
          <p>
            Get occasional progress notes, experiments, and opportunities to
            take part.
          </p>
        </div>
        <button className="button button-primary" onClick={openWaitlist}>
          Keep me in the loop <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>
    </div>
  );
}
