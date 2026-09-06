import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const directions = {
  cloud: { name: 'Cloud', index: '01', subtitle: 'A gentler kind of company.', description: 'An indoor companion concept, shaped around a soft presence, expressive interaction, and the small rhythms of life at home.', focus: 'Gentle indoor companionship', materials: 'Exploring soft-touch materials', interaction: 'Expressive and approachable', environment: 'Indoor use is the design target' },
  titan: { name: 'Titan', index: '02', subtitle: 'Curiosity with a useful side.', description: 'An exploration concept, shaped around useful actions, a durable construction, and room for people who like to build and experiment.', focus: 'Utility and exploration', materials: 'Exploring durable construction', interaction: 'Useful actions and builder controls', environment: 'Suitability needs validation' },
};
const comparison = [
  ['Purpose', 'Gentle companionship', 'Utility and exploration'],
  ['Setting', 'Indoor design target', 'Environments to be validated'],
  ['Interaction', 'Friendly, expressive behavior', 'Useful actions and programmable ideas'],
  ['Materials', 'Soft-touch direction', 'Durable construction direction'],
  ['Development status', 'Design concept', 'Design concept'],
];

export default function SpecsPage({ openWaitlist }) {
  const [selected, setSelected] = useState('cloud');
  const direction = directions[selected];
  return (
    <div className="p-page p-design">
      <header className="wrap p-intro">
        <p className="eyebrow">Design &amp; architecture</p>
        <h1>One curiosity.<br />Two directions.</h1>
        <div className="p-intro-bottom"><p className="p-intro-copy">Meet Cloud and Titan. Two ways we are exploring the character, form, and purpose of a companion robot.</p><span className="p-status"><span aria-hidden="true" />Design concepts · In development</span></div>
      </header>

      <section className="wrap p-direction-section" aria-label="Explore the two Woffy design directions">
        <div className="p-direction-visual">
          <div className="p-direction-image"><img src="/images/woffy-studio.webp" srcSet="/images/woffy-studio-800.webp 800w, /images/woffy-studio.webp 1536w" sizes="(max-width: 800px) calc(100vw - 40px), 50vw" alt="Woffy character design study with a white body and soft pink accents" width="1536" height="1024" fetchPriority="high" decoding="async" /><span className="p-image-label">Woffy / Character study</span></div>
          <p className="concept-caption">Design concept. The character study is not a final model-specific design.</p>
        </div>
        <div className="p-direction-controls">
          <fieldset className="p-selector"><legend>Explore a design direction</legend><div className="p-selector-options">{Object.entries(directions).map(([key, value]) => <label key={key} className={selected === key ? 'is-selected' : ''}><input type="radio" name="woffy-direction" value={key} checked={selected === key} onChange={() => setSelected(key)} /><span>{value.name}</span><span className="p-selector-number" aria-hidden="true">{value.index}</span></label>)}</div></fieldset>
          <div className="p-direction-description" aria-live="polite" aria-atomic="true">
            <p className="eyebrow">{direction.name} direction</p>
            <h2>{direction.subtitle}</h2>
            <p>{direction.description}</p>
            <dl className="p-details-list"><div><dt>Focus</dt><dd>{direction.focus}</dd></div><div><dt>Materials</dt><dd>{direction.materials}</dd></div><div><dt>Interaction</dt><dd>{direction.interaction}</dd></div><div><dt>Setting</dt><dd>{direction.environment}</dd></div></dl>
          </div>
        </div>
      </section>

      <section className="p-ink-section" aria-labelledby="research-heading">
        <div className="wrap p-research-layout">
          <div><p className="eyebrow">On the bench today</p><h2 id="research-heading">Perception.<br />Learning.<br /><span>Action.</span></h2></div>
          <div className="p-research-copy"><p className="p-large-copy">We are training robot arms and exploring the connection between what an AI observes and what a machine does.</p><p>The research helps us learn about demonstrations, control, and repeatable physical tasks. It informs the Woffy vision; it does not yet demonstrate a complete companion robot.</p><Link className="text-link" to="/roadmap">See the next milestones <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="wrap p-comparison-section" aria-labelledby="comparison-heading">
        <div className="p-section-heading"><div><p className="eyebrow">Side by side</p><h2 id="comparison-heading">Different characters.<br />The same careful process.</h2></div><p>Design intentions, not promises of available features. Both directions will develop through testing.</p></div>
        <div className="p-table-scroll" tabIndex="0" role="region" aria-label="Compare Cloud and Titan design directions"><table className="p-comparison"><caption className="p-visually-hidden">Comparison of Cloud and Titan design intentions</caption><thead><tr><th scope="col">Design consideration</th><th scope="col">Cloud <span>01</span></th><th scope="col">Titan <span>02</span></th></tr></thead><tbody>{comparison.map(([label, cloud, titan]) => <tr key={label}><th scope="row">{label}</th><td>{cloud}</td><td>{titan}</td></tr>)}</tbody></table></div>
      </section>

      <section className="wrap p-unconfirmed" aria-labelledby="specification-heading"><p className="eyebrow">Before a specification sheet</p><h2 id="specification-heading">We will publish what we can measure.</h2><div className="p-unconfirmed-columns"><p>Hardware, dimensions, weight, battery life, sensors, connectivity, and pricing are not confirmed. We will publish specifications when we have a tested configuration.</p><p>Navigation, autonomous charging, and home control remain proposed capabilities. Certifications and product availability will be announced when confirmed.</p></div><Link to="/gesture-demo" className="text-link">Explore the browser gesture experiment <ArrowRight size={19} aria-hidden="true" /></Link><p className="p-fine-print">The browser experiment uses your camera with permission. It does not control a physical Woffy robot.</p></section>

      <section className="wrap p-page-cta" aria-labelledby="design-updates-heading"><div><p className="eyebrow">As the design develops</p><h2 id="design-updates-heading">See what takes shape.</h2><p>Get occasional updates from the people building Woffy.</p></div><button type="button" className="button button-primary" onClick={openWaitlist}>Get build updates <ArrowUpRight size={18} aria-hidden="true" /></button></section>
    </div>
  );
}
