import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WoffyMark } from "./Navbar";
export default function Footer({ onJoinWaitlist }) {
  return (
    <footer className="site-footer">
      <div className="footer-top page-width">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <WoffyMark />
            <span>woffy.</span>
          </Link>
          <p>
            Small steps.
            <br />
            Extraordinary possibilities.
          </p>
          <span className="footer-origin">
            A robotics project by Onwords
            <br />
            Coimbatore, India
          </span>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/specs">Meet Woffy</Link>
          <Link to="/about">Our story</Link>
          <Link to="/roadmap">Build journal</Link>
          <Link to="/chat">Ask Woffy</Link>
        </div>
        <div>
          <h2>Build together</h2>
          <Link to="/investors">Partners & investors</Link>
          <a href="mailto:hello@woffy.ai">
            hello@woffy.ai <ArrowUpRight size={14} />
          </a>
          <a href="https://onwords.in" target="_blank" rel="noreferrer">
            Onwords <ArrowUpRight size={14} />
          </a>
          <button className="footer-link" onClick={onJoinWaitlist}>
            Get Woffy updates <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
      <div className="footer-bottom page-width">
        <span>© {new Date().getFullYear()} Woffy by Onwords</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
        <span className="footer-status">
          <i /> Currently in research & development
        </span>
      </div>
    </footer>
  );
}
