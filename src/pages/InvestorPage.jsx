import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const collaborations = [
  { number: '01', title: 'Embodied AI', description: 'Learning from demonstrations, perception, robot control, and meaningful evaluation of physical tasks.', note: 'Connect intelligence with action.' },
  { number: '02', title: 'Hardware & product', description: 'Actuation, mechanical design, electronics, prototyping, and machines that can be built and maintained.', note: 'Make the idea work in the real world.' },
  { number: '03', title: 'Life at home', description: 'Thoughtful interactions, clear human controls, and useful connections with everyday home routines.', note: 'Give the technology a reason to belong.' },
];

export default function InvestorPage() {
  return (
    <div className="p-page p-partners">
      <header className="wrap p-intro"><p className="eyebrow">For builders, partners &amp; investors</p><h1>Good ideas need<br />hands-on builders.</h1><div className="p-intro-bottom"><p className="p-intro-copy">We are building a robotics company around friendly, useful physical intelligence. If your work connects with ours, we would like to meet.</p><a href="mailto:hello@woffy.ai?subject=Woffy%20partnership" className="button button-primary">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></a></div></header>

      <section className="wrap p-partner-overview" aria-labelledby="partner-overview-heading"><figure className="p-partner-image p-edition-study"><img src="/images/titan-front.webp" srcSet="/images/titan-front-800.webp 800w, /images/titan-front.webp 1536w" sizes="(max-width: 800px) calc(100vw - 40px), 50vw" alt="Titan, the silver four-legged Woffy explorer design, with upright ears and amber eyes" width="1536" height="1024" fetchPriority="high" decoding="async" /><figcaption className="concept-caption"><span>Titan / A different kind of presence.</span><span>Design study</span></figcaption></figure><div className="p-partner-summary"><p className="eyebrow">Project overview</p><h2 id="partner-overview-heading">A clear ambition.<br />Work to do.</h2><p>Woffy grows out of Onwords and its work in smart homes and gate automation across South India. That experience gives us a practical interest in how hardware, software, and everyday routines meet. Our ambition is a companion robot that earns a useful place in the home.</p><dl className="p-details-list"><div><dt>Stage</dt><dd>Research and development</dd></div><div><dt>Current work</dt><dd>Robot-arm training and AI experiments</dd></div><div><dt>Based in</dt><dd>South India</dd></div><div><dt>Next step</dt><dd>Repeatable demonstrations and prototype validation</dd></div></dl><Link to="/roadmap" className="text-link">Read the development path <ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>

      <section className="p-tinted-section p-edition-rationale" aria-labelledby="edition-rationale-heading">
        <div className="wrap">
          <div className="p-section-heading"><div><p className="eyebrow">Two forms of the same ambition</p><h2 id="edition-rationale-heading">Companionship<br />has more than one shape.</h2></div><p>A plush companion and a mechanical explorer respond to different interests. The distinction shapes the experience, the physical design, and what we need to learn.</p></div>
          <div className="p-rationale-grid">
            <figure><img src="/images/cloud-home.webp" srcSet="/images/cloud-home-800.webp 800w, /images/cloud-home.webp 1536w" sizes="(max-width: 800px) calc(100vw - 40px), 50vw" alt="Cloud's plush companion concept in an everyday home setting" width="1536" height="1024" loading="lazy" decoding="async" /><figcaption><span className="eyebrow">Cloud / The gentle companion</span><h3>Start with warmth.</h3><p>Stories, playful interaction, quiet company, and familiar routines. Cloud’s soft physical character is the starting point for an approachable indoor companion.</p><span className="concept-caption">Design study</span></figcaption></figure>
            <figure><img src="/images/titan-explore.webp" srcSet="/images/titan-explore-800.webp 800w, /images/titan-explore.webp 1536w" sizes="(max-width: 800px) calc(100vw - 40px), 50vw" alt="Titan's silver explorer concept in a setting for discovery and useful activity" width="1536" height="1024" loading="lazy" decoding="async" /><figcaption><span className="eyebrow">Titan / The curious explorer</span><h3>Make room for discovery.</h3><p>Useful actions, navigation, and ways for builders to experiment. Titan’s more structured form explores a companion with a practical, inquisitive side.</p><span className="concept-caption">Design study</span></figcaption></figure>
          </div>
          <Link className="text-link" to="/specs">Explore the designs from every angle <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="p-collaboration-section" aria-labelledby="collaboration-heading"><div className="wrap"><div className="p-section-heading"><div><p className="eyebrow">Where work can connect</p><h2 id="collaboration-heading">Different disciplines.<br />A shared direction.</h2></div><p>We welcome practical conversations with people working across the pieces that make a robot useful.</p></div><ol className="p-collaborations">{collaborations.map(({ number, title, description, note }) => <li key={number}><span className="p-collaboration-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><p className="p-collaboration-note">{note}</p></li>)}</ol></div></section>

      <section className="wrap p-partner-contact" aria-labelledby="partner-contact-heading"><p className="eyebrow">A conversation is a good start</p><h2 id="partner-contact-heading">Tell us what<br />you are building.</h2><div className="p-contact-bottom"><div><p>Share your work, your area of interest, and where you see a connection. For investment conversations, request the current project overview.</p><p className="p-fine-print">Product configuration, pricing, and launch plans are still being developed.</p></div><a href="mailto:hello@woffy.ai?subject=Woffy%20project%20overview" className="p-contact-address">hello@woffy.ai <ArrowUpRight aria-hidden="true" /></a></div></section>
    </div>
  );
}
