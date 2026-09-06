import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Layers, Plus } from 'lucide-react';
import '../styles/editions.css';

export const editions = {
  cloud: {name:'Cloud',type:'The gentle companion',title:'Soft on the outside.\nFull of character.',description:'A plush, approachable presence for the little moments at home. Cloud pairs expressive eyes and floppy ears with a four-legged body designed around gentle interaction.',finish:'Pastel pink · Cotton white',surface:'Plush exterior',stance:'Four articulated legs',eyes:'Cyan expressions',purpose:'Companionship, play and everyday routines',caption:'Soft panels, expressive face and jointed movement.',accent:'#A65B67'},
  titan: {name:'Titan',type:'The robust explorer',title:'A different kind\nof curiosity.',description:'A more structured expression of Woffy. Titan explores a protective metal exterior, an alert silhouette and articulated movement for people who like to explore and build.',finish:'Brushed silver · Gunmetal',surface:'Segmented metal exterior',stance:'Four articulated legs',eyes:'Amber expressions',purpose:'Exploration, useful actions and builder control',caption:'Protective panels, upright ears and an articulated stance.',accent:'#8B691E'}
};
const angles = [['front','Three-quarter'],['side','Side profile'],['rear','Rear view']];
export function ProductImage({edition='cloud',view='front',className='',priority=false,alt}) {
  const path='/images/'+edition+'-'+view;
  return <img className={className} src={path+'.webp'} srcSet={path+'-800.webp 800w, '+path+'.webp 1536w'} sizes="(max-width: 760px) 100vw, 65vw" width="1536" height="1024" loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async" alt={alt ?? (editions[edition].name+' design study, '+(angles.find(a=>a[0]===view)?.[1]||view))} />;
}
function EditionSwitch({value,onChange,label='Choose a Woffy edition'}) {
  return <div className="e-switch" role="group" aria-label={label}>{Object.entries(editions).map(([key,model])=><button key={key} type="button" className={value===key?'is-active':''} aria-pressed={value===key} onClick={()=>onChange(key)}><span className={'e-swatch e-swatch-'+key} />{model.name}<span className="e-switch-detail">{key==='cloud'?'Plush':'Metal'}</span></button>)}</div>;
}
export default function EditionExplorer({initialEdition='cloud',compact=false,selectedEdition,onEditionChange}) {
  const location=useLocation();
  const query=new URLSearchParams(location.search).get('edition');
  const [localEdition,setLocalEdition]=useState(query==='titan'?'titan':initialEdition);
  const edition=selectedEdition ?? localEdition;
  const setEdition=value=>{setLocalEdition(value);onEditionChange?.(value);};
  const [angle,setAngle]=useState('front');
  useEffect(()=>{ if(query==='cloud'||query==='titan')setLocalEdition(query); },[query]);
  const model=editions[edition];
  const changeAngle=delta=>{const current=angles.findIndex(x=>x[0]===angle);setAngle(angles[(current+delta+angles.length)%angles.length][0]);};
  return <section className={'e-explorer '+(compact?'e-compact':'')} aria-labelledby={compact?'edition-home-title':'edition-design-title'}>
    <div className="wrap">
      <div className="e-heading"><div><p className="eyebrow">Two editions. Distinct by design.</p><h2 id={compact?'edition-home-title':'edition-design-title'}>Meet your kind<br />of Woffy.</h2></div><p>Cloud brings softness. Titan brings structure. Explore the different forms, materials and personalities behind them.</p></div>
      <div className="e-product-layout">
        <div className="e-gallery">
          <figure className="e-product-stage" tabIndex={0} aria-label={model.name+' viewing angles. Use left and right arrow keys to change view.'} onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();changeAngle(event.key==='ArrowRight'?1:-1);}}}>
            <ProductImage key={edition+angle} edition={edition} view={angle} priority={false} className="e-main-image" />
            <figcaption aria-live="polite" aria-atomic="true"><span>{model.name} / {angles.find(x=>x[0]===angle)[1]}</span><span>Design study</span></figcaption>
            <div className="e-angle-arrows"><button type="button" aria-label="Previous viewing angle" onClick={()=>changeAngle(-1)}><ArrowLeft size={18}/></button><button type="button" aria-label="Next viewing angle" onClick={()=>changeAngle(1)}><ArrowRight size={18}/></button></div>
          </figure>
          <div className="e-angle-strip" role="group" aria-label="Viewing angle">{angles.map(([key,label])=><button type="button" key={key} className={angle===key?'is-active':''} aria-pressed={angle===key} onClick={()=>setAngle(key)}><ProductImage edition={edition} view={key} alt="" /><span>{label}</span></button>)}</div>
        </div>
        <div className="e-product-copy"><EditionSwitch value={edition} onChange={setEdition}/><div className="e-model-info" aria-live="polite" aria-atomic="true"><p className="eyebrow">{model.type}</p><h3>{model.title.split('\n').map((line,i)=><span key={line}>{i>0&&<br/>}{line}</span>)}</h3><p>{model.description}</p><dl><div><dt>Finish</dt><dd>{model.finish}</dd></div><div><dt>Body</dt><dd>{model.surface}</dd></div><div><dt>Movement</dt><dd>{model.stance}</dd></div><div><dt>Expression</dt><dd>{model.eyes}</dd></div></dl></div>{compact?<Link to={'/specs?edition='+edition} className="text-link">Look inside {model.name}<ArrowUpRight size={17}/></Link>:<Link to={'/specs?edition='+edition+'#anatomy'} className="text-link">Look beneath the surface <ArrowRight size={17}/></Link>}<p className="e-fine">Concept forms and materials. Final construction and capabilities will develop through testing.</p></div>
      </div>
    </div>
  </section>;
}
const anatomy = [
  {key:'expression',title:'Expression & sensing',lead:'A face with something to say.',text:'The display gives Woffy a readable expression. Cameras, microphones and touch sensing are being explored as ways to understand what is happening nearby.',module:'Face, display and sensing',cloud:[34,35],titan:[29,36]},
  {key:'compute',title:'Compute & connection',lead:'The thought behind the response.',text:'A compact control system would connect perception, conversation and motion. Local processing is a design goal, with clear boundaries for any connected services.',module:'Proposed control module',cloud:[62,48],titan:[61,44]},
  {key:'power',title:'Power & structure',lead:'Support for the everyday.',text:'A protected energy module and internal frame would support the outer body. Battery size, charging method and runtime depend on the chosen hardware and testing.',module:'Proposed energy and frame layout',cloud:[66,64],titan:[65,58]},
  {key:'movement',title:'Articulation & feedback',lead:'Small movements. Clear intent.',text:'Joint modules let the four-legged form move and respond. We’re exploring expressive head and body movement, touch feedback and human control over every action.',module:'Proposed joint and feedback system',cloud:[46,73],titan:[51,70]}
];
export function AnatomyExplorer({initialEdition='cloud'}) {
  const location=useLocation();
  const query=new URLSearchParams(location.search).get('edition');
  const [edition,setEdition]=useState(query==='titan'?'titan':initialEdition);
  useEffect(()=>{ if(query==='cloud'||query==='titan')setEdition(query); },[query]);
  const [layer,setLayer]=useState('cutaway');
  const [part,setPart]=useState(0);
  const detail=anatomy[part];
  return <section className="e-anatomy" id="anatomy" aria-labelledby="anatomy-title"><div className="wrap">
    <div className="e-heading"><div><p className="eyebrow">Beneath the personality</p><h2 id="anatomy-title">A closer look<br />inside.</h2></div><p>Expression, sensing, power and movement. An illustrated look at the systems a companion robot brings together.</p></div>
    <div className="e-anatomy-toolbar"><EditionSwitch value={edition} onChange={setEdition} label="Choose a cutaway edition"/><div className="e-layer-switch" role="group" aria-label="Choose exterior or cutaway view"><button type="button" aria-pressed={layer==='front'} onClick={()=>setLayer('front')}>Exterior</button><button type="button" aria-pressed={layer==='cutaway'} onClick={()=>setLayer('cutaway')}><Layers size={15}/>Cutaway</button></div></div>
    <div className="e-anatomy-layout"><figure className="e-cutaway-stage"><div className="e-cutaway-canvas"><ProductImage key={edition+layer} edition={edition} view={layer} className="e-cutaway-image" alt={editions[edition].name+(layer==='cutaway'?' conceptual cutaway showing an illustrative internal frame, power module, control electronics and joint mechanisms':' exterior design study')} />{layer==='cutaway'&&anatomy.map((item,index)=><button key={item.key} type="button" className={'e-hotspot '+(index===part?'is-active':'')} style={{left:item[edition][0]+'%',top:item[edition][1]+'%'}} aria-label={'Explore '+item.title} aria-pressed={index===part} onClick={()=>setPart(index)}>{index===part?String(index+1):<Plus size={15}/>}</button>)}</div><figcaption>Illustrative architecture · Component placement is a design study</figcaption></figure>
      <div className="e-anatomy-copy"><div className="e-part-list" role="group" aria-label="Explore a system">{anatomy.map((item,index)=><button type="button" key={item.key} className={index===part?'is-active':''} aria-pressed={index===part} onClick={()=>{setPart(index);setLayer('cutaway');}}><span>{String(index+1).padStart(2,'0')}</span>{item.title}<ArrowUpRight size={16}/></button>)}</div><div className="e-part-detail" aria-live="polite"><span>{detail.module}</span><h3>{detail.lead}</h3><p>{detail.text}</p></div></div>
    </div><p className="e-anatomy-note">These cutaways explain the proposed system, not a final manufacturing design. Hardware selection, dimensions and performance remain under development.</p>
  </div></section>;
}
