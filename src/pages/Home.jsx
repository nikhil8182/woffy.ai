import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Home as House,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Home({ openWaitlist }) {
  return (
    <>
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="live-dot" /> Made of curiosity. Built in India.
          </div>
          <h1 id="hero-title">
            A little robot.
            <br />A whole lot of
            <br />
            <span>possibility.</span>
            <Sparkles className="hero-spark" aria-hidden="true" />
          </h1>
          <p className="hero-description">
            Meet Woffy. We’re building a curious companion for a more connected
            home, one real experiment at a time.
          </p>
        </div>
        <figure className="hero-visual">
          <div className="orbit-label">
            <span className="orbit-cross">+</span> Hello, human.
          </div>
          <img
            src="/images/woffy-concept.webp"
            alt="Woffy design concept: a white robot dog with amber ears and a curious expression"
            width="1000"
            height="1000"
            fetchPriority="high"
          />
          <figcaption>
            <span className="concept-dot" /> Design concept{" "}
            <span>Form will evolve as we build.</span>
          </figcaption>
          <span className="visual-coordinate" aria-hidden="true">
            W / 01
          </span>
        </figure>
        <div className="hero-actions">
          <button className="button button-primary" onClick={openWaitlist}>
            Follow the build <ArrowUpRight size={19} />
          </button>
          <Link className="text-link" to="/roadmap">
            See what’s happening <ArrowRight size={17} />
          </Link>
          <p>No preorders. Just progress worth sharing.</p>
        </div>
      </section>
      <div className="status-strip">
        <div className="page-width">
          <span>
            <span className="live-dot" /> Research in progress
          </span>
          <span>Robot learning. Real hardware. Small steps.</span>
          <Link to="/roadmap">
            Inside the workshop <ArrowDown size={15} />
          </Link>
        </div>
      </div>
      <section className="vision-section page-width">
        <div className="section-heading">
          <p className="eyebrow">01 / The idea</p>
          <h2>
            Technology with
            <br />a little more <span className="scribble">heart.</span>
          </h2>
          <p>
            A home is more than devices. Our ambition is a robot that feels
            approachable, understands everyday interactions, and belongs in your
            world.
          </p>
        </div>
        <div className="vision-list">
          <article>
            <span className="feature-symbol">
              <Heart size={25} />
            </span>
            <div>
              <span className="label">Companionship</span>
              <h3>A familiar little presence.</h3>
              <p>
                Exploring expressive movement and playful interactions that make
                a robot feel easy to be around.
              </p>
            </div>
            <span className="vision-number">01</span>
          </article>
          <article>
            <span className="feature-symbol">
              <House size={25} />
            </span>
            <div>
              <span className="label">A connected home</span>
              <h3>Part of the everyday.</h3>
              <p>
                A longer-term direction: helpful interactions with the home,
                informed by our work at Onwords.
              </p>
            </div>
            <span className="vision-number">02</span>
          </article>
          <article>
            <span className="feature-symbol">
              <MoveUpRight size={25} />
            </span>
            <div>
              <span className="label">Robot learning</span>
              <h3>Learning starts on the bench.</h3>
              <p>
                Working with robot arms to understand how machines can learn
                useful physical actions.
              </p>
            </div>
            <span className="vision-number">03</span>
          </article>
          <Link className="text-link" to="/specs">
            Explore our design direction <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="workshop-section">
        <div className="workshop-grid page-width">
          <figure className="bench-figure">
            <img
              src="/images/so101-bench.webp"
              width="1000"
              height="1251"
              alt="Our assembled SO-101 robot arm on the workbench, with its controller"
              loading="lazy"
            />
            <figcaption>
              <span>From our workbench</span>
              <span>SO-101 learning setup</span>
            </figcaption>
          </figure>
          <div className="workshop-copy">
            <p className="eyebrow">02 / From the workshop</p>
            <span className="status-pill">Building, testing, learning</span>
            <h2>
              Big ideas.
              <br />
              Hands-on beginnings.
            </h2>
            <p>
              Right now, we’re working with real robot arms and learning how to
              train them. This is the groundwork for the robotics company we’re
              building.
            </p>
            <p className="workshop-note">
              The arm is our learning platform. The Woffy companion above is a
              design concept, with an integrated prototype still ahead.
            </p>
            <Link className="button button-light" to="/roadmap">
              Open the build journal <ArrowUpRight size={18} />
            </Link>
            <div className="workshop-signature">
              <span className="signature-line" />
              <span>
                Made with curiosity
                <br />
                in Coimbatore, India
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="story-section page-width">
        <p className="eyebrow">03 / Why we’re here</p>
        <div>
          <h2>
            It began with a dog.
            <br />
            <span>And a feeling that stayed.</span>
          </h2>
          <p>
            Roddy, a golden retriever, inspired the question behind Woffy: could
            technology bring a little of that warmth into everyday life?
          </p>
          <Link className="text-link" to="/about">
            Read our story <ArrowRight size={17} />
          </Link>
        </div>
        <div className="story-doodle" aria-hidden="true">
          <Heart strokeWidth={1} />
          <span>
            More feeling.
            <br />
            More possibility.
          </span>
        </div>
      </section>
      <section className="faq-section page-width">
        <div>
          <p className="eyebrow">A few good questions</p>
          <h2>
            Curious?
            <br />
            Good. So are we.
          </h2>
          <Link className="text-link" to="/chat">
            Ask Woffy <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="faq-list">
          <details>
            <summary>Can I buy Woffy today?</summary>
            <p>
              Not yet. Woffy is in research and development. We haven’t
              announced a price, preorder, or release date. Join the updates
              list to follow the project.
            </p>
          </details>
          <details>
            <summary>Is the robot in the pictures real?</summary>
            <p>
              The white and amber Woffy is a design concept. The SO-101
              workbench photograph shows real hardware used in our
              robot-learning work. They’re different stages of the project.
            </p>
          </details>
          <details>
            <summary>What can Woffy do right now?</summary>
            <p>
              We’re developing the foundations through robot-arm training and
              interaction experiments. Companion behaviour, home integration,
              and independent movement are development directions, not shipping
              features.
            </p>
          </details>
          <details>
            <summary>Can I collaborate with the team?</summary>
            <p>
              Yes. We’d love to connect with people building embodied AI, robot
              hardware, and connected-home experiences.{" "}
              <Link to="/investors">See how we can build together.</Link>
            </p>
          </details>
        </div>
      </section>
      <section className="join-section page-width">
        <div className="join-inner">
          <div>
            <p className="eyebrow">You’re early. Come along.</p>
            <h2>
              Be part of Woffy’s
              <br />
              first steps.
            </h2>
            <p>Build notes, real experiments, and future pilot news.</p>
          </div>
          <button className="button button-primary" onClick={openWaitlist}>
            Keep me in the loop <ArrowUpRight size={20} />
          </button>
        </div>
        <span className="join-footnote">
          No deposit. No launch promises. You can unsubscribe anytime.
        </span>
      </section>
    </>
  );
}
