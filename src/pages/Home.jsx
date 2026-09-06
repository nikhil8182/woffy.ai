import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import '../styles/home.css';

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, ease: [.2, .7, .2, 1], delay }}>{children}</motion.div>;
}
function Hero({ openWaitlist }) {
  const ref = useRef(null), reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  return <section className="h-hero" ref={ref}>
    <motion.div className="h-hero-art" style={{ y: reduce ? 0 : imageY }}><img src="/images/woffy-studio.webp" srcSet="/images/woffy-studio-800.webp 800w, /images/woffy-studio.webp 1536w" sizes="100vw" width="1536" height="1024" fetchPriority="high" alt="Woffy concept, an ivory and pink companion robot with floppy ears and bright expressive eyes" /></motion.div>
    <div className="wrap h-hero-inner">
      <motion.div className="h-hero-copy" style={{ y: reduce ? 0 : textY }}>
        <p className="eyebrow h-hero-label"><span className="status-dot" /> A companion robot in the making</p>
        <h1>A little more<br /><span>company.</span></h1>
        <p className="h-hero-description">Meet Woffy. We’re exploring a friendlier relationship with technology, one small robot at a time.</p>
        <div className="h-hero-actions"><Link className="button button-primary" to="/chat">Say hello to Woffy <ArrowUpRight size={18} /></Link><button onClick={openWaitlist} className="text-link">Follow the build <ArrowRight size={18} /></button></div>
      </motion.div>
      <div className="h-hero-bottom"><a href="#discover" className="h-discover"><span className="h-scroll-icon"><ArrowDown size={17} /></span> Get to know Woffy</a><span>Design concept · by Onwords</span></div>
    </div>
  </section>;
}
function DesignStory() {
  const ref = useRef(null), reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  return <section className="h-design wrap" ref={ref} aria-labelledby="h-design-title">
    <div className="h-design-visual"><div className="h-detail-frame"><motion.img src="/images/woffy-detail.webp" srcSet="/images/woffy-detail-640.webp 640w, /images/woffy-detail.webp 1200w" sizes="(max-width: 760px) 100vw, 50vw" width="1200" height="900" loading="lazy" alt="Close-up concept render of Woffy’s soft pink ear, textured face and expressive screen" style={{ scale: reduce ? 1 : scale }} /><div className="h-detail-label"><span>Character, considered.</span><span>Woffy / Design study</span></div></div><p className="concept-caption">Material and character exploration. Design concept.</p></div>
    <div className="h-design-chapters">
      <Reveal className="h-chapter"><p className="eyebrow">A familiar face</p><h2 id="h-design-title">You had me<br />at hello.</h2><p>Soft ears. Curious eyes. A slight tilt of the head. We’re exploring the small details that make a robot feel approachable before it says a word.</p><Link className="text-link" to="/specs">Explore the design <ArrowUpRight size={18} /></Link></Reveal>
      <Reveal className="h-chapter"><p className="eyebrow">Room for personality</p><h2>Less instruction.<br />More interaction.</h2><p>A conversation. A playful moment. A familiar routine. These are the everyday experiences we want to build towards.</p><Link className="text-link" to="/chat">Try the conversation demo <ArrowUpRight size={18} /></Link></Reveal>
      <Reveal className="h-chapter"><p className="eyebrow">Thoughtful by design</p><h2>Your home.<br />Your boundaries.</h2><p>Useful companionship starts with trust. Clear controls, understandable behaviour and privacy are design priorities as we develop Woffy.</p><p className="h-small-note">Local processing and home integrations are goals under exploration, not confirmed features.</p></Reveal>
    </div>
  </section>;
}
function HomeScene() {
  const ref = useRef(null), reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  return <section className="h-home-scene" ref={ref}>
    <motion.img src="/images/woffy-home.webp" srcSet="/images/woffy-home-800.webp 800w, /images/woffy-home.webp 1536w" sizes="100vw" width="1536" height="1024" loading="lazy" alt="Concept render of Woffy sitting beside a terracotta sofa in a quiet sunlit home" style={{ y: reduce ? 0 : y }} />
    <div className="h-scene-heading wrap"><p className="eyebrow">The place we’re designing for</p><h2>Life happens here.</h2><p>Our vision is a companion that belongs<br className="desktop-break" /> in the everyday, alongside you.</p></div>
    <span className="h-scene-caption">Home experience illustration · Design concept</span>
  </section>;
}
const questions = [
  ['Can I buy a Woffy today?', 'Not yet. Woffy is in research and development. You can join the update list to follow progress; it isn’t a preorder and no payment is required.'],
  ['What is working right now?', 'We’re training robot arms and exploring robot learning alongside Woffy’s design. You can also try the AI conversation demo here on the website. A complete autonomous Woffy robot has not been demonstrated.'],
  ['Are these photos of the robot?', 'The imagery on this site is generated concept artwork. It shows the design direction we’re exploring, not a finished or available product.'],
  ['When will it be ready?', 'We haven’t confirmed a launch date or price. The roadmap sets out the work and validation needed before future pilots. We’ll share progress as it happens.']
];
export default function Home({ openWaitlist }) {
  return <div className="home-page">
    <Hero openWaitlist={openWaitlist} />
    <section className="h-intro wrap" id="discover"><Reveal><p className="eyebrow">A different kind of presence</p><h2 className="section-title">A home is more than<br />the things inside it.</h2></Reveal><Reveal className="h-intro-copy" delay={.1}><p className="body-copy">It’s the familiar faces. The daily rituals. The feeling of being together. Woffy began with a question: could a little robot become a meaningful part of that?</p><Link className="text-link" to="/about">The story behind Woffy <ArrowUpRight size={18} /></Link></Reveal></section>
    <DesignStory />
    <HomeScene />
    <section className="h-build wrap"><Reveal className="h-build-title"><p className="eyebrow">From idea to movement</p><h2 className="section-title">Good things<br />take building.</h2><Link to="/roadmap" className="text-link">Follow our progress <ArrowUpRight size={18} /></Link></Reveal><div className="h-build-notes"><Reveal><span className="h-stage-label"><span className="status-dot" /> Where we are now</span><h3>Learning with real hardware.</h3><p>Robot-arm training and hands-on experiments are helping us understand how robots can learn from people. That work sits alongside Woffy’s early design exploration.</p></Reveal><Reveal><span className="h-stage-label">Where we’re heading</span><h3>A companion, built step by step.</h3><p>Bringing movement, conversation and a thoughtful physical design together will take testing. We’ll share what works, what changes, and what comes next.</p><Link to="/investors" className="text-link">Build with us <ArrowUpRight size={18} /></Link></Reveal></div></section>
    <section className="h-questions wrap"><div><p className="eyebrow">A few good questions</p><h2 className="section-title">Curious?<br />So are we.</h2></div><div className="h-faq-list">{questions.map(([q,a]) => <details key={q}><summary>{q}<Plus size={20} aria-hidden="true" /></summary><p>{a}</p></details>)}</div></section>
    <section className="h-invite"><div className="wrap h-invite-inner"><Reveal><p className="eyebrow">Come along for the build</p><h2>A little curiosity.<br />A lot to look forward to.</h2><p>Occasional build notes. Honest progress. A first look at what’s next.</p><button className="button button-primary" onClick={openWaitlist}>Keep me in the loop <ArrowUpRight size={18} /></button><span className="h-invite-note">No preorder. Just a place on the journey.</span></Reveal><div className="h-invite-eyes" aria-hidden="true"><i /><i /></div></div></section>
  </div>;
}
