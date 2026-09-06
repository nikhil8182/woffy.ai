import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";
import Home from "./pages/Home";
const AboutPage = lazy(() => import("./pages/AboutPage"));
const RoadmapPage = lazy(() => import("./pages/RoadmapPage"));
const SpecsPage = lazy(() => import("./pages/SpecsPage"));
const InvestorPage = lazy(() => import("./pages/InvestorPage"));
const ChatWithWoffy = lazy(() => import("./pages/ChatWithWoffy"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const GestureDemo = lazy(() => import("./pages/GestureDemo"));
const titles = {
  "/": "Woffy | A little robot. A whole lot of possibility.",
  "/about": "Our story | Woffy",
  "/specs": "Inside Woffy | Research & design",
  "/roadmap": "Build journal | Woffy",
  "/investors": "Build with us | Woffy",
  "/chat": "Ask Woffy | Project assistant",
  "/privacy": "Privacy | Woffy",
  "/terms": "Website terms | Woffy",
  "/cookies": "Cookies | Woffy",
  "/gesture-demo": "Gesture experiment | Woffy",
};
function Site() {
  const { pathname } = useLocation();
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  useEffect(() => {
    document.title = titles[pathname] || "Page not found | Woffy";
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", "https://woffy.ai" + pathname);
    window.scrollTo(0, 0);
    setWaitlistOpen(false);
  }, [pathname]);
  const openWaitlist = () => setWaitlistOpen(true);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar onJoinWaitlist={openWaitlist} />
      <main id="main" tabIndex="-1">
        <Suspense
          fallback={
            <div className="page-shell loading-page" role="status">
              Opening the workshop…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home openWaitlist={openWaitlist} />} />
            <Route
              path="/about"
              element={<AboutPage openWaitlist={openWaitlist} />}
            />
            <Route
              path="/roadmap"
              element={<RoadmapPage openWaitlist={openWaitlist} />}
            />
            <Route
              path="/specs"
              element={<SpecsPage openWaitlist={openWaitlist} />}
            />
            <Route
              path="/investors"
              element={<InvestorPage openWaitlist={openWaitlist} />}
            />
            <Route path="/chat" element={<ChatWithWoffy />} />
            <Route
              path="/gesture-demo"
              element={
                <>
                  <div className="experiment-note">
                    Browser experiment: recognises gestures on your device. This
                    does not control a physical Woffy robot.
                  </div>
                  <GestureDemo />
                </>
              }
            />
            <Route path="/privacy" element={<LegalPage kind="privacy" />} />
            <Route path="/terms" element={<LegalPage kind="terms" />} />
            <Route path="/cookies" element={<LegalPage kind="cookies" />} />
            <Route
              path="*"
              element={
                <div className="page-shell page-intro">
                  <p className="eyebrow">404 / A small detour</p>
                  <h1>This page wandered off.</h1>
                  <p className="page-lead">Let’s get you back to Woffy.</p>
                  <Link className="button button-primary" to="/">
                    Back to home
                  </Link>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer onJoinWaitlist={openWaitlist} />
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
