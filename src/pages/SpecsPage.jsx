import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EditionExplorer, { AnatomyExplorer } from '../components/EditionExplorer';
import '../styles/pages.css';

const comparison = [
  ['Purpose', 'Gentle companionship and quiet company', 'Exploration, useful actions, and curiosity'],
  ['Outer character', 'Shaggy pink plush and a soft silhouette', 'Angular silver shell and a more mechanical silhouette'],
  ['Face & ears', 'White face, cyan eyes, and floppy ears', 'Amber eyes and upright ears'],
  ['Physical form', 'Four-legged companion design', 'Four-legged explorer design'],
  ['Interaction ideas', 'Petting, stories, play, and familiar routines', 'Sensor interaction, navigation, and programmable ideas'],
  ['Haptic direction', 'Gentle purring and comfort feedback', 'Tactile feedback for attention and alerts'],
  ['Intended setting', 'Everyday indoor companionship', 'Exploration, with conditions to be validated'],
  ['Development status', 'Design study, in development', 'Design study, in development'],
];

export default function SpecsPage({ openWaitlist }) {
  return (
    <div className="p-page p-design">
      <header className="wrap p-intro">
        <p className="eyebrow">Design &amp; architecture</p>
        <h1>Soft company.<br />A curious explorer.</h1>
        <div className="p-intro-bottom">
          <p className="p-intro-copy">Cloud and Titan share the Woffy idea, with two distinct physical characters. Explore the plush companion and the silver explorer from the outside in.</p>
          <span className="p-status"><span aria-hidden="true" />Design studies · In development</span>
        </div>
      </header>

      <EditionExplorer />
      <AnatomyExplorer />

      <section className="wrap p-design-intent" aria-labelledby="design-intent-heading">
        <div className="p-section-heading">
          <div><p className="eyebrow">What the design is working towards</p><h2 id="design-intent-heading">A character you can read.<br />A robot you can understand.</h2></div>
          <p>The outer shell sets the tone. Expression, movement, and clear controls will determine how Woffy feels to live with.</p>
        </div>
        <ol className="p-intent-list">
          <li><span>01</span><h3>Expression with purpose.</h3><p>Curious eyes, a playful posture, a quieter presence. We are exploring how a display and physical body language can make Woffy’s state understandable.</p></li>
          <li><span>02</span><h3>Movement with character.</h3><p>Four articulated legs are central to both designs. Walking, stretching, playful motion, and returning to a charging place are development goals.</p></li>
          <li><span>03</span><h3>Human control, built in.</h3><p>Our direction includes a physical camera shutter, understandable privacy choices, and clear ways to stop an action. These controls need to be designed and tested alongside the robot.</p></li>
        </ol>
      </section>

      <section className="p-ink-section" aria-labelledby="research-heading">
        <div className="wrap p-research-layout">
          <div><p className="eyebrow">On the bench today</p><h2 id="research-heading">Perception.<br />Learning.<br /><span>Action.</span></h2></div>
          <div className="p-research-copy">
            <p className="p-large-copy">We are training robot arms and exploring the connection between what an AI observes and what a machine does.</p>
            <p>Demonstrations and repeatable physical tasks help us learn about control. That research informs the companion designs. The sectional studies above explain a proposed arrangement of functions, not a finalized production assembly.</p>
            <Link className="text-link" to="/roadmap">See the next milestones <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="wrap p-comparison-section" aria-labelledby="comparison-heading">
        <div className="p-section-heading">
          <div><p className="eyebrow">Side by side</p><h2 id="comparison-heading">More than<br />a material change.</h2></div>
          <p>Cloud begins with softness and companionship. Titan begins with structure and exploration. Both are ways to bring a friendly robot into everyday life.</p>
        </div>
        <div className="p-table-scroll" tabIndex="0" role="region" aria-label="Compare Cloud and Titan design directions">
          <table className="p-comparison">
            <caption className="p-visually-hidden">Comparison of Cloud and Titan design intentions, not confirmed product specifications</caption>
            <thead><tr><th scope="col">Design consideration</th><th scope="col">Cloud <span>01</span></th><th scope="col">Titan <span>02</span></th></tr></thead>
            <tbody>{comparison.map(([label, cloud, titan]) => <tr key={label}><th scope="row">{label}</th><td>{cloud}</td><td>{titan}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="wrap p-unconfirmed" aria-labelledby="specification-heading">
        <p className="eyebrow">Before a specification sheet</p>
        <h2 id="specification-heading">We will publish what we can measure.</h2>
        <div className="p-unconfirmed-columns">
          <p>Final materials, dimensions, weight, battery life, processors, and sensors are not confirmed. The design studies show the intended character and functional layout; component selection and engineering will develop through testing.</p>
          <p>Home routines, navigation, autonomous charging, and gesture interaction are proposed capabilities. Product pricing, certifications, and availability will be announced when confirmed.</p>
        </div>
        <Link to="/gesture-demo" className="text-link">Explore the browser gesture experiment <ArrowRight size={19} aria-hidden="true" /></Link>
        <p className="p-fine-print">The browser experiment uses your camera with permission. It does not control a physical Woffy robot.</p>
      </section>

      <section className="wrap p-page-cta" aria-labelledby="design-updates-heading">
        <div><p className="eyebrow">As the design develops</p><h2 id="design-updates-heading">See what takes shape.</h2><p>Get occasional updates from the people building Woffy.</p></div>
        <button type="button" className="button button-primary" onClick={openWaitlist}>Get build updates <ArrowUpRight size={18} aria-hidden="true" /></button>
      </section>
    </div>
  );
}
