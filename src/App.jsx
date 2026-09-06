import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import Home from './pages/Home';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SpecsPage = lazy(() => import('./pages/SpecsPage'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'));
const InvestorPage = lazy(() => import('./pages/InvestorPage'));
const ChatWithWoffy = lazy(() => import('./pages/ChatWithWoffy'));
const GestureDemo = lazy(() => import('./pages/GestureDemo'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
function RouteScroll() {
  const { pathname, hash, search, key } = useLocation();
  useEffect(() => {
    let anchor = hash.slice(1);
    try { anchor = decodeURIComponent(anchor); } catch { /* Treat malformed fragments as literal IDs. */ }
    const target = anchor ? document.getElementById(anchor) : null;
    if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, search, key]);
  return null;
}
function Site() {
  const { pathname } = useLocation();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const openWaitlist = () => setIsWaitlistOpen(true);
  const isChat = pathname === '/chat';
  useEffect(() => {
    const titles = { '/': 'Woffy | A little more company', '/about': 'Our story | Woffy', '/specs': 'Design & details | Woffy', '/roadmap': 'The build | Woffy', '/investors': 'Build with us | Woffy', '/chat': 'Meet Woffy | Conversation demo', '/gesture-demo': 'Gesture experiment | Woffy', '/privacy': 'Privacy | Woffy', '/terms': 'Terms | Woffy', '/cookies': 'Cookies | Woffy' };
    document.title = titles[pathname] || 'Page not found | Woffy';
    document.querySelector('link[rel=canonical]')?.setAttribute('href', 'https://woffy.ai' + pathname);
  }, [pathname]);
  return <MotionConfig reducedMotion="user">
    <a href="#main" className="skip-link">Skip to content</a>
    {!isChat && <Navbar onJoinWaitlist={openWaitlist} />}
    <main id="main" tabIndex={-1}>
      <Suspense fallback={<div className="route-loading" role="status"><span className="loading-eyes" aria-hidden="true"><i /><i /></span><p>Just a moment.</p></div>}>
        <Routes>
          <Route path="/" element={<Home openWaitlist={openWaitlist} />} />
          <Route path="/about" element={<AboutPage openWaitlist={openWaitlist} />} />
          <Route path="/specs" element={<SpecsPage openWaitlist={openWaitlist} />} />
          <Route path="/roadmap" element={<RoadmapPage openWaitlist={openWaitlist} />} />
          <Route path="/investors" element={<InvestorPage openWaitlist={openWaitlist} />} />
          <Route path="/chat" element={<ChatWithWoffy />} />
          <Route path="/gesture-demo" element={<div className="gesture-shell"><div className="gesture-note">Browser experiment · Camera access is optional. This demo does not control a robot.</div><GestureDemo /></div>} />
          <Route path="/privacy" element={<LegalPage kind="privacy" />} />
          <Route path="/terms" element={<LegalPage kind="terms" />} />
          <Route path="/cookies" element={<LegalPage kind="cookies" />} />
          <Route path="*" element={<div className="not-found wrap"><p className="eyebrow">A small detour</p><h1>Nothing here. Yet.</h1><p>Let’s get you back to Woffy.</p><Link className="button button-primary" to="/">Back home</Link></div>} />
        </Routes>
        <RouteScroll />
      </Suspense>
    </main>
    {!isChat && <Footer />}
    <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
  </MotionConfig>;
}
export default function App() { return <BrowserRouter><Site /></BrowserRouter>; }
