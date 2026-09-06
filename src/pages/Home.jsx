import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import '../styles/home.css';
import EditionExplorer, { ProductImage } from '../components/EditionExplorer';

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, ease: [.2, .7, .2, 1], delay }}>{children}</motion.div>;
}
function Hero({ openWaitlist, edition, setEdition }) {
  const ref = useRef(null), reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  return <section className={'h-hero h-hero-'+edition} ref={ref}>
    <motion.div className="h-hero-art" style={{ y: reduce ? 0 : imageY }}><ProductImage key={edition} edition={edition} view="front" priority alt={edition==='cloud'?'Cloud design study: a shaggy pink four-legged robot with floppy ears and cyan screen eyes':'Titan design study: a silver four-legged robot with upright ears, segmented metal panels and amber screen eyes'} /></motion.div>
    <div className="wrap h-hero-inner">
      <motion.div className="h-hero-copy" style={{ y: reduce ? 0 : textY }}>
        <p className="eyebrow h-hero-label"><span className="status-dot" /> A companion robot in the making</p>
        <h1>A little more<br /><span>company.</span></h1>
        <p className="h-hero-description">Two distinct characters. One idea: a companion that loves, connects and protects, with a place in everyday life.</p>
        <div className="h-hero-editions" role="group" aria-label="Preview an edition"><button type="button" className={edition==='cloud'?'is-active':''} aria-pressed={edition==='cloud'} onClick={()=>setEdition('cloud')}><i/>Cloud <span>Soft & playful</span></button><button type="button" className={edition==='titan'?'is-active':''} aria-pressed={edition==='titan'} onClick={()=>setEdition('titan')}><i/>Titan <span>Metal & curious</span></button></div>
        <div className="h-hero-actions"><a className="button button-primary" href="#editions">Explore the editions <ArrowDown size={17}/></a><button onClick={openWaitlist} className="text-link">Follow the build <ArrowRight size={18}/></button></div>
      </motion.div>
      <div className="h-hero-bottom"><a href="#discover" className="h-discover"><span className="h-scroll-icon"><ArrowDown size={17}/></span> Get to know Woffy</a><span>{edition==='cloud'?'Cloud':'Titan'} · Design study</span></div>
    </div>
  </section>;
}
const visionStories = [
  {name:'Loves',label:'Companionship',title:'Good company,\nin the small moments.',copy:'A playful question. A familiar hello. A gentle reminder. We want Woffy to take part in the everyday, with room for different people and routines.',items:[['Kids','Shared games, stories and curious conversations with controls for parents.'],['Companion','A friendly presence for conversation, play and familiar daily rituals.'],['Care','Simple reminders and check-ins, with people in control.']],image:'cloud-home',alt:'Cloud design concept beside a sofa in a warm home'},
  {name:'Connects',label:'Home routines',title:'A familiar routine.\nA friendlier interface.',copy:'Our smart-home background shapes the vision: one approachable companion that can help you interact with your space.',items:[['Good morning','Explore reminders, curtains and lighting as part of a morning routine.'],['Movie time','Bring favourite lighting and entertainment settings into a simple request.'],['Heading out','Review home status and leave the final action with you.']],image:'cloud-home',alt:'Cloud in a concept home, illustrating intended everyday routines'},
  {name:'Protects',label:'Awareness & control',title:'Awareness,\nwith clear boundaries.',copy:'We’re exploring a helpful view of the home, with understandable alerts and controls. Woffy should make it clear when it is observing, listening or taking an action.',items:[['Notice','Investigate helpful environmental cues and events around the home.'],['Let you know','Explore useful notifications and check-ins with clear context.'],['Stay in control','Design visible sensing states, privacy controls and an easy way to stop.']],image:'titan-explore',alt:'Titan concept on a calm garden terrace'}
];
function EverydayVision() {
  const [selected,setSelected]=useState(0);
  const story=visionStories[selected];
  return <section className="h-everyday wrap" aria-labelledby="everyday-heading"><div className="h-vision-header"><div><p className="eyebrow">The experiences we’re building towards</p><h2 id="everyday-heading" className="section-title">More ways<br/>to be together.</h2></div><div className="h-vision-tabs" role="group" aria-label="Explore Woffy’s intended experiences">{visionStories.map((item,index)=><button type="button" key={item.name} aria-pressed={selected===index} onClick={()=>setSelected(index)}>{item.name}<span>{item.label}</span></button>)}</div></div><div className="h-vision-layout"><figure><img key={story.image} src={'/images/'+story.image+'.webp'} srcSet={'/images/'+story.image+'-800.webp 800w, /images/'+story.image+'.webp 1536w'} sizes="(max-width:900px) 100vw,50vw" width="1536" height="1024" loading="lazy" alt={story.alt}/><figcaption>Future experience · Design study</figcaption></figure><div className="h-vision-copy" aria-live="polite"><h3>{story.title.split('\n').map((line,index)=><span key={line}>{index>0&&<br/>}{line}</span>)}</h3><p>{story.copy}</p><dl>{story.items.map(([title,copy])=><div key={title}><dt>{title}</dt><dd>{copy}</dd></div>)}</dl><p className="h-vision-note">These are intended experiences under development. Care does not replace professional or human support.</p><Link to="/chat" className="text-link">Ask Woffy about the vision <ArrowUpRight size={17}/></Link></div></div></section>;
}
function ConceptFilm() {
  return <section className="h-film"><div className="wrap"><div className="h-film-heading"><div><p className="eyebrow">Character studies</p><h2 className="section-title">A little movement.<br/>A lot of personality.</h2></div><p>See the original concept animation that inspired the two editions: Cloud’s soft expressions and Titan’s more alert, articulated form.</p></div><video controls playsInline preload="none" poster="/images/titan-front.webp" aria-label="Concept animation showing Cloud and Titan moving and changing expressions"><source src="/woffy-video.mp4" type="video/mp4"/>Your browser does not support this animation.</video><p className="h-film-caption">Concept animation · Cloud and Titan interact, move and change their screen expressions. Not prototype footage.</p></div></section>;
}
function AnatomyTeaser() {
  return <section className="h-anatomy-teaser wrap"><div><p className="eyebrow">Design, from the inside out</p><h2 className="section-title">There’s more<br/>beneath the surface.</h2><p>Expression. Perception. Power. Movement. Explore how the proposed systems connect, through illustrated cutaways of both editions.</p><Link to="/specs?edition=titan#anatomy" className="text-link">Explore the cutaways <ArrowUpRight size={18}/></Link><span>Illustrative architecture, still in development.</span></div><figure><ProductImage edition="titan" view="cutaway" alt="Titan conceptual cutaway showing proposed electronics, structure, power and joints"/><figcaption>Titan / Internal architecture study</figcaption></figure></section>;
}
function HomeScene() {
  const ref = useRef(null), reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  return <section className="h-home-scene" ref={ref}>
    <motion.img src="/images/cloud-home.webp" srcSet="/images/cloud-home-800.webp 800w, /images/cloud-home.webp 1536w" sizes="100vw" width="1536" height="1024" loading="lazy" alt="Cloud quadruped concept beside a terracotta sofa in a quiet sunlit home" style={{ y: reduce ? 0 : y }} />
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
  const [edition,setEdition] = useState('cloud');
  return <div className="home-page">
    <Hero openWaitlist={openWaitlist} edition={edition} setEdition={setEdition} />
    <section className="h-intro wrap" id="discover"><Reveal><p className="eyebrow">A different kind of presence</p><h2 className="section-title">A home is more than<br />the things inside it.</h2></Reveal><Reveal className="h-intro-copy" delay={.1}><p className="body-copy">It’s the familiar faces. The daily rituals. The feeling of being together. Woffy began with a question: could a little robot become a meaningful part of that?</p><Link className="text-link" to="/about">The story behind Woffy <ArrowUpRight size={18} /></Link></Reveal></section>
    <div id="editions"><EditionExplorer compact selectedEdition={edition} onEditionChange={setEdition} /></div>
    <EverydayVision />
    <ConceptFilm />
    <HomeScene />
    <AnatomyTeaser />
    <section className="h-build wrap"><Reveal className="h-build-title"><p className="eyebrow">From idea to movement</p><h2 className="section-title">Good things<br />take building.</h2><Link to="/roadmap" className="text-link">Follow our progress <ArrowUpRight size={18} /></Link></Reveal><div className="h-build-notes"><Reveal><span className="h-stage-label"><span className="status-dot" /> Where we are now</span><h3>Learning with real hardware.</h3><p>Robot-arm training and hands-on experiments are helping us understand how robots can learn from people. That work sits alongside Woffy’s early design exploration.</p></Reveal><Reveal><span className="h-stage-label">Where we’re heading</span><h3>A companion, built step by step.</h3><p>Bringing movement, conversation and a thoughtful physical design together will take testing. We’ll share what works, what changes, and what comes next.</p><Link to="/investors" className="text-link">Build with us <ArrowUpRight size={18} /></Link></Reveal></div></section>
    <section className="h-questions wrap"><div><p className="eyebrow">A few good questions</p><h2 className="section-title">Curious?<br />So are we.</h2></div><div className="h-faq-list">{questions.map(([q,a]) => <details key={q}><summary>{q}<Plus size={20} aria-hidden="true" /></summary><p>{a}</p></details>)}</div></section>
    <section className="h-invite"><div className="wrap h-invite-inner"><Reveal><p className="eyebrow">Come along for the build</p><h2>A little curiosity.<br />A lot to look forward to.</h2><p>Occasional build notes. Honest progress. A first look at what’s next.</p><button className="button button-primary" onClick={openWaitlist}>Keep me in the loop <ArrowUpRight size={18} /></button><span className="h-invite-note">No preorder. Just a place on the journey.</span></Reveal><div className="h-invite-eyes" aria-hidden="true"><i /><i /></div></div></section>
  </div>;
}
