import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { WoffyMark } from './Navbar';
export default function Footer() {
  return <footer className="site-footer"><div className="wrap">
    <div className="footer-top"><div><Link to="/" aria-label="Woffy home"><WoffyMark /></Link><p>A little more company.<br />A project by <a href="https://onwords.in" target="_blank" rel="noreferrer">Onwords <ArrowUpRight size={13} /></a></p></div>
      <nav aria-label="Explore Woffy"><span>Explore</span><Link to="/specs">Design & details</Link><Link to="/about">Our story</Link><Link to="/roadmap">The build</Link><Link to="/chat">Meet Woffy</Link></nav>
      <nav aria-label="Get in touch"><span>Get in touch</span><Link to="/investors">Investors & collaborators</Link><a href="mailto:hello@woffy.ai">hello@woffy.ai <ArrowUpRight size={15} /></a><Link to="/gesture-demo">Gesture experiment</Link></nav>
    </div>
    <div className="footer-concept"><span className="status-dot" />In research & development. Images show design concepts; final features and availability are unconfirmed.</div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Woffy.ai</span><nav aria-label="Website policies"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/cookies">Cookies</Link></nav><span>Curiosity, made tangible.</span></div>
  </div></footer>;
}
