import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export function WoffyMark() {
  return <span className="woffy-wordmark"><span className="woffy-symbol" aria-hidden="true"><i /><i /></span>woffy<span className="brand-stop">.</span></span>;
}
const links = [['/', 'Meet Woffy'], ['/specs', 'Design'], ['/about', 'Our story'], ['/roadmap', 'The build'], ['/investors', 'Investors']];
export default function Navbar({ onJoinWaitlist }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef(null);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const handleKey = e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const handleResize = () => { if (window.innerWidth > 1100) setOpen(false); };
    const before = document.body.style.overflow;
    const background = [...document.querySelectorAll('#main, .site-footer')];
    background.forEach(element => element.setAttribute('inert', ''));
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => { background.forEach(element => element.removeAttribute('inert')); document.body.style.overflow = before; window.removeEventListener('keydown', handleKey); window.removeEventListener('resize', handleResize); };
  }, [open]);
  const join = () => { setOpen(false); onJoinWaitlist(); };
  return <header className={'site-nav' + (open ? ' nav-open' : '')}>
    <div className="nav-inner wrap">
      <Link to="/" className="brand-link" aria-label="Woffy home"><WoffyMark /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, label]) => <NavLink key={href} to={href} end={href === '/'}>{label}</NavLink>)}</nav>
      <div className="nav-actions"><Link to="/chat" className="nav-chat">Say hello <ArrowUpRight size={16} /></Link><button className="button button-primary nav-join" onClick={onJoinWaitlist}>Get updates <ArrowUpRight size={16} /></button><button className="menu-toggle icon-button" ref={toggle} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      {links.map(([href,label]) => <NavLink key={href} to={href} end={href === '/'}>{label}<ArrowUpRight size={22} /></NavLink>)}
      <NavLink to="/chat">Say hello to Woffy <ArrowUpRight size={22} /></NavLink>
      <button className="button button-primary" onClick={join}>Get build updates <ArrowUpRight size={18} /></button>
      <p>A companion robot in the making.<br />By Onwords.</p>
    </nav>
  </header>;
}
