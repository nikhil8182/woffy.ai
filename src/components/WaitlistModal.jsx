import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Loader2, X } from "lucide-react";
import { joinWaitlist } from "../lib/waitlist";
export default function WaitlistModal({ isOpen, onClose }) {
  const dialog = useRef(null),
    email = useRef(null);
  const [status, setStatus] = useState("idle"),
    [error, setError] = useState("");
  useEffect(() => {
    if (!isOpen) {
      dialog.current?.close();
      return;
    }
    const previous = document.activeElement;
    const modal = dialog.current;
    setStatus("idle");
    setError("");
    modal.showModal();
    email.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = original;
      previous?.focus();
    };
  }, [isOpen]);
  const submit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    const data = new FormData(e.currentTarget);
    setStatus("loading");
    setError("");
    try {
      await joinWaitlist({
        email: data.get("email"),
        name: data.get("name"),
        consent: true,
        website: data.get("website"),
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err.message || "We couldn’t save your signup. Please try again.",
      );
    }
  };
  return (
    <dialog
      ref={dialog}
      className="waitlist-dialog"
      aria-labelledby="signup-title"
      aria-describedby="signup-description"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialog.current && status !== "loading") onClose();
      }}
    >
      <div className="dialog-body">
        <button
          className="icon-button dialog-close"
          aria-label="Close signup"
          onClick={onClose}
        >
          <X size={22} />
        </button>
        {status === "success" ? (
          <div className="signup-success" role="status">
            <span className="success-mark">
              <Check size={32} />
            </span>
            <p className="eyebrow">You’re part of the journey</p>
            <h2 id="signup-title">Thanks for joining.</h2>
            <p id="signup-description">
              Your email is on our updates list. We’ll share build progress and
              future pilot news when there’s something ready.
            </p>
            <button className="button button-primary" onClick={onClose}>
              Back to exploring <ArrowUpRight size={18} />
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Join Waitlist</p>
            <h2 id="signup-title">
              Join the Woffy Pack
            </h2>
            <p id="signup-description">
              Get occasional build notes and future pilot news. No deposit or
              purchase required.
            </p>
            <form onSubmit={submit}>
              <label htmlFor="signup-email">
                Email address <span>(required)</span>
              </label>
              <input
                ref={email}
                id="signup-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
                disabled={status === "loading"}
              />
              <label htmlFor="signup-name">
                Your name <span>(optional)</span>
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                placeholder="What should we call you?"
                autoComplete="given-name"
                maxLength={80}
                disabled={status === "loading"}
              />
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="signup-website">Leave this blank</label>
                <input
                  id="signup-website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>
              <label className="checkbox-label">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  disabled={status === "loading"}
                />
                <span>
                  I’d like Woffy product updates by email. I can unsubscribe
                  anytime.{" "}
                  <Link to="/privacy" onClick={onClose}>
                    Privacy policy
                  </Link>
                </span>
              </label>
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="button button-primary signup-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="spin" /> Saving your signup…
                  </>
                ) : (
                  <>
                    Join Waitlist <ArrowUpRight size={18} />
                  </>
                )}
              </button>
              <p className="form-footnote">
                Woffy is in development. Joining does not reserve a product.
              </p>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
