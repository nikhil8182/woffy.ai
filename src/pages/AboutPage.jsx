import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function AboutPage({ openWaitlist }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="p-page p-about">
      <header className="wrap p-intro p-intro-split">
        <div><p className="eyebrow">About Woffy</p><h1>A companion<br />starts with care.</h1></div>
        <p className="p-intro-copy">We are building a robotics company with a simple ambition: bring a little more warmth, curiosity, and usefulness into everyday life.</p>
      </header>

      <motion.figure className="wrap p-hero-media" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1] }}>
        <div className="p-image-frame p-image-frame-wide"><img src="/images/cloud-home.webp" srcSet="/images/cloud-home-800.webp 800w, /images/cloud-home.webp 1536w" sizes="(max-width: 800px) calc(100vw - 40px), (min-width: 1552px) 1440px, calc(100vw - 112px)" alt="Cloud, the shaggy pink Woffy companion design, sharing a calm home setting" width="1536" height="1024" fetchPriority="high" decoding="async" /></div>
        <figcaption className="concept-caption"><span>A place in everyday life.</span><span>Design study</span></figcaption>
      </motion.figure>

      <section className="wrap p-story" aria-labelledby="roddy-heading">
        <div className="p-section-index"><span>01 / The beginning</span></div>
        <div className="p-story-main">
          <h2 id="roddy-heading">First, there was Roddy.</h2>
          <div className="p-story-columns">
            <p>Roddy, a golden retriever, was the spark behind Woffy. The way he notices people. His curiosity. The quiet company. Ordinary moments that make a home feel different.</p>
            <p>We want to explore that feeling through robotics: a friendly presence that responds thoughtfully and shares a space with people. Roddy is our reminder to begin with the experience, then work out the engineering.</p>
          </div>
        </div>
      </section>

      <section className="p-tinted-section" aria-labelledby="building-heading">
        <div className="wrap p-editorial-split">
          <div className="p-editorial-copy">
            <p className="eyebrow">02 / Learning by building</p>
            <h2 id="building-heading">From an idea<br />to a physical action.</h2>
            <p>Founder Nikhil Deepak uses AI in the day-to-day work of running Onwords, from sales to team follow-ups. Woffy takes that curiosity into the physical world.</p>
            <p>Today, we are training robot arms and exploring how AI connects perception with action. This research is a step toward the companion we want to build.</p>
            <Link to="/roadmap" className="text-link">Follow the development <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
          <figure className="p-detail-media p-edition-study">
            <img src="/images/cloud-side.webp" srcSet="/images/cloud-side-800.webp 800w, /images/cloud-side.webp 1536w" sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1100px) calc(50vw - 84px), (min-width: 1552px) 670px, calc(50vw - 106px)" alt="Side view of Cloud showing its plush four-legged body, white face, and floppy ears" width="1536" height="1024" loading="lazy" decoding="async" />
            <figcaption className="concept-caption"><span>Cloud / A softer physical presence.</span><span>Design study</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="wrap p-story" aria-labelledby="onwords-heading">
        <div className="p-section-index"><span>03 / Our roots</span></div>
        <div className="p-story-main">
          <h2 id="onwords-heading">A new direction.<br />The same interest in home.</h2>
          <div className="p-story-columns">
            <p>Woffy grows out of Onwords and its work in smart homes and automation. Rooted in South India, we care about technology that earns a useful place in people’s lives.</p>
            <div><p>Our vision brings three things together: a companion that feels present, a useful connection to home routines, and thoughtful ways to stay aware of the home. Loves, Connects & Protects is the idea guiding the work.</p><Link to="/specs" className="text-link">Explore the design direction <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>

      <section className="wrap p-story p-story-separated" aria-labelledby="companion-place-heading">
        <div className="p-section-index"><span>04 / A different kind of companion</span></div>
        <div className="p-story-main">
          <h2 id="companion-place-heading">For the life<br />you actually lead.</h2>
          <div className="p-story-columns">
            <p>Some people love dogs but cannot take on full-time pet ownership. Travel, space, time, and everyday responsibilities can make it difficult. Woffy began with those people in mind.</p>
            <p>Woffy is not a replacement for a real pet. It is an exploration of another kind of company: a story at bedtime, a playful moment, a reminder to take a break, or a familiar presence nearby.</p>
          </div>
        </div>
      </section>

      <section className="p-ink-section p-ecosystem" aria-labelledby="ecosystem-heading">
        <div className="wrap">
          <div className="p-section-heading"><div><p className="eyebrow">The bigger idea</p><h2 id="ecosystem-heading">A personality.<br />A presence.<br />A physical companion.</h2></div><p>We are exploring an AI character that can feel familiar across conversation, digital experiences, and a body that shares your space.</p></div>
          <ol className="p-intent-list">
            <li><span>01 / Personality</span><h3>Someone to get to know.</h3><p>A warm conversational character, with room for preferences, playful moments, and everyday routines to develop.</p></li>
            <li><span>02 / Digital presence</span><h3>A connection across screens.</h3><p>The website conversation is an early way to meet the idea. A connected app and avatar are part of the wider vision.</p></li>
            <li><span>03 / Physical companion</span><h3>Company in your space.</h3><p>Cloud and Titan give that vision two physical directions. Bringing them to life means developing movement, sensing, interaction, and human control together.</p></li>
          </ol>
        </div>
      </section>

      <section className="wrap p-page-cta" aria-labelledby="about-updates-heading">
        <div><p className="eyebrow">From the workshop</p><h2 id="about-updates-heading">Stay close to the build.</h2><p>Occasional notes on experiments, design, and the next step for Woffy.</p></div>
        <button type="button" className="button button-primary" onClick={openWaitlist}>Get build updates <ArrowUpRight size={18} aria-hidden="true" /></button>
      </section>
    </div>
  );
}
