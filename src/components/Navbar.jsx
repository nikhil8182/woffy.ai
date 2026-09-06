import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function WoffyMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
    </span>
  );
}
export default function Navbar({ onJoinWaitlist }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" aria-label="Woffy home">
          <WoffyMark />
          <span>
            woffy<span className="brand-dot">.</span>
          </span>
        </Link>
        <button
          id="menu-toggle"
          className="icon-button mobile-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={open ? "site-nav is-open" : "site-nav"}
        >
          <NavLink to="/specs">Meet Woffy</NavLink>
          <NavLink to="/about">Our story</NavLink>
          <NavLink to="/roadmap">Build journal</NavLink>
          <NavLink to="/chat">Ask Woffy</NavLink>
          <button
            className="button button-primary nav-cta"
            onClick={() => {
              setOpen(false);
              onJoinWaitlist();
            }}
          >
            Get updates <ArrowUpRight size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}
