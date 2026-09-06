import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const milestones = [
  { number: '01', state: 'Current focus', title: 'Learn on the bench.', description: 'Train robot arms, study demonstrations, and explore how AI can guide useful physical actions.', work: 'Robot-arm training, task observations, and interaction concepts.', evidence: 'Repeatable tasks with clear test conditions and visible results.', current: true },
  { number: '02', state: 'Next milestone', title: 'Bring the pieces together.', description: 'Develop an integrated prototype that connects the chosen hardware, control system, and interaction design.', work: 'Articulated movement, expressive eyes, sensing, and clear human controls.', evidence: 'Documented limitations, repeatable behavior, and reliable human stop controls.' },
  { number: '03', state: 'After prototype validation', title: 'Learn through controlled use.', description: 'Evaluate the prototype with a small group in supervised environments and improve it through observation.', work: 'Participant feedback, useful routines, charging behavior, and reliability testing.', evidence: 'A safety and reliability review, with changes informed by observed use.' },
  { number: '04', state: 'After pilot validation', title: 'Prepare for real homes.', description: 'Confirm the product configuration, manufacturing approach, service, and required certifications.', work: 'Production planning, support, and verification of product specifications.', evidence: 'Clear pricing, verified specifications, and a confirmed availability plan.' },
];

export default function RoadmapPage({ openWaitlist }) {
  return (
    <div className="p-page p-roadmap">
      <header className="wrap p-intro p-intro-split"><div><p className="eyebrow">The development path</p><h1>Step by step.<br />With something<br />to show for it.</h1></div><div className="p-intro-copy"><p>Woffy is in research and development. Progress means an experiment we can learn from and a result we can demonstrate.</p><a href="#milestones" className="text-link">Explore the milestones <ArrowDown size={18} aria-hidden="true" /></a></div></header>

      <section className="wrap p-development-study" aria-labelledby="development-study-heading">
        <figure className="p-development-image">
          <img src="/images/cloud-cutaway.webp" srcSet="/images/cloud-cutaway-800.webp 800w, /images/cloud-cutaway.webp 1536w" sizes="(max-width: 800px) calc(100vw - 40px), 60vw" alt="Cloud sectional design study showing a proposed arrangement of expression, sensing, power, and movement systems" width="1536" height="1024" fetchPriority="high" decoding="async" />
          <figcaption className="concept-caption"><span>Cloud / From character to architecture.</span><span>Design study</span></figcaption>
        </figure>
        <div className="p-development-copy"><p className="eyebrow">The work behind the character</p><h2 id="development-study-heading">Make the inside<br />serve the experience.</h2><p>Softness and structure. Expression and motion. A place for power, perception, and controls. These pieces need to work together before a companion feels at home.</p><p>The sectional study is a way to explore that arrangement. Engineering choices and component packaging remain open.</p><Link to="/specs" className="text-link">Explore both designs <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </section>

      <section id="milestones" className="wrap p-roadmap-layout" aria-labelledby="milestones-heading">
        <aside className="p-roadmap-aside"><p className="eyebrow">Where we are</p><h2 id="milestones-heading">Research <br />comes first.</h2><span className="p-status"><span aria-hidden="true" />Actively exploring</span><p>Our current work includes training robot arms. The companion character on this website is a design concept.</p><p>Each future stage depends on what the previous one demonstrates.</p><Link to="/specs" className="text-link">See the design direction <ArrowUpRight size={18} aria-hidden="true" /></Link></aside>
        <ol className="p-milestones">{milestones.map((milestone) => <li key={milestone.number} className={`p-milestone${milestone.current ? ' p-milestone-current' : ''}`} aria-current={milestone.current ? 'step' : undefined}><div className="p-milestone-top"><span className="p-milestone-number">{milestone.number}</span><span className="p-milestone-state">{milestone.state}</span></div><h3>{milestone.title}</h3><p className="p-milestone-description">{milestone.description}</p><dl><div><dt>The work</dt><dd>{milestone.work}</dd></div><div><dt>Evidence to move forward</dt><dd>{milestone.evidence}</dd></div></dl></li>)}</ol>
      </section>

      <section className="p-tinted-section" aria-labelledby="progress-heading"><div className="wrap p-progress-note"><p className="eyebrow">How we will share progress</p><h2 id="progress-heading">What worked.<br />What changed.<br />What comes next.</h2><div><p>We will share experiments, development notes, and demonstrations as the work moves ahead. Future milestones may change as we learn.</p><p>There is no confirmed launch date or preorder window. The update list does not reserve a product or commit you to a purchase.</p></div></div></section>

      <section className="wrap p-page-cta" aria-labelledby="roadmap-updates-heading"><div><p className="eyebrow">Be part of the journey</p><h2 id="roadmap-updates-heading">The next step, in your inbox.</h2><p>Occasional build notes and opportunities to take part.</p></div><button type="button" className="button button-primary" onClick={openWaitlist}>Get build updates <ArrowUpRight size={18} aria-hidden="true" /></button></section>
    </div>
  );
}
