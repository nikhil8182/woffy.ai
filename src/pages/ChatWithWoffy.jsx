import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight, RotateCcw, Sparkles } from "lucide-react";
import { chatWithWoffy } from "../ai";
import { WoffyMark } from "../components/Navbar";
const prompts = [
  "What is Woffy?",
  "What are you building now?",
  "When can I buy Woffy?",
  "How can I collaborate?",
];
export default function ChatWithWoffy() {
  const [messages, setMessages] = useState([]),
    [input, setInput] = useState(""),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(""),
    [retry, setRetry] = useState("");
  const scroll = useRef(null);
  useEffect(() => {
    if (messages.length || loading)
      scroll.current?.scrollTo({
        top: scroll.current.scrollHeight,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
  }, [messages, loading]);
  async function send(text, isRetry = false) {
    const value = text.trim();
    if (!value || loading) return;
    const history = isRetry ? messages.slice(0, -1) : messages;
    setError("");
    setLoading(true);
    setInput("");
    if (!isRetry) setMessages([...history, { role: "user", text: value }]);
    try {
      const result = await chatWithWoffy(value, history);
      setMessages([
        ...history,
        { role: "user", text: value },
        { role: "model", text: result.response, mode: result.mode },
      ]);
      setRetry("");
    } catch (err) {
      setError(err.message || "The connection dropped. Please try again.");
      setRetry(value);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="chat-page page-width">
      <aside className="chat-intro">
        <p className="eyebrow">A conversation starter</p>
        <h1>
          Curiosity <br />
          looks good <br />
          on you.
        </h1>
        <p>Ask about Woffy, our research, or building together.</p>
        <div className="chat-aside-image">
          <img
            src="/images/woffy-concept.webp"
            width="1000"
            height="1000"
            alt="Woffy robot dog design concept"
          />
          <span>Design concept</span>
        </div>
        <Link className="text-link" to="/roadmap">
          See the build journal <ArrowUpRight size={16} />
        </Link>
      </aside>
      <section className="chat-panel" aria-label="Woffy project assistant">
        <div className="chat-header">
          <div>
            <WoffyMark />
            <span>
              <strong>Ask Woffy</strong>
              <small>Website assistant · not a physical robot</small>
            </span>
          </div>
          <button
            className="icon-button"
            title="Clear conversation"
            aria-label="Clear conversation"
            disabled={loading || !messages.length}
            onClick={() => {
              setMessages([]);
              setError("");
              setRetry("");
            }}
          >
            <RotateCcw size={19} />
          </button>
        </div>
        <div
          className="chat-messages"
          ref={scroll}
          role="log"
          aria-label="Conversation"
          aria-live="polite"
          aria-relevant="additions"
        >
          <div className="chat-welcome">
            <span className="welcome-icon">
              <Sparkles size={24} />
            </span>
            <h2>Hello, curious human.</h2>
            <p>
              I can help you explore the Woffy project. Where would you like to
              start?
            </p>
          </div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                "chat-message " +
                (message.role === "user" ? "from-user" : "from-woffy")
              }
            >
              <span className="message-label">
                {message.role === "user"
                  ? "You"
                  : message.mode === "project-faq"
                    ? "Woffy · Project FAQ"
                    : "Woffy · AI response"}
              </span>
              <p>{message.text}</p>
              {message.mode === "project-faq" && (
                <small>
                  From our project notes. Live AI is temporarily unavailable.
                </small>
              )}
            </div>
          ))}
          {loading && (
            <div className="thinking" role="status">
              <span />
              <span />
              <span />
              <span className="sr-only">Woffy is thinking</span>
            </div>
          )}
        </div>
        {!messages.length && (
          <div className="chat-prompts">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                disabled={loading}
                onClick={() => send(prompt)}
              >
                {prompt} <ArrowUpRight size={14} />
              </button>
            ))}
          </div>
        )}
        {error && (
          <div className="chat-error" role="alert">
            <span>{error}</span>
            <button onClick={() => send(retry, true)} disabled={loading}>
              Try again
            </button>
          </div>
        )}
        <form
          className="chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <label className="sr-only" htmlFor="chat-message">
            Your message
          </label>
          <input
            id="chat-message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about Woffy…"
            maxLength={1500}
            autoComplete="off"
            disabled={loading}
          />
          <button
            className="chat-send"
            type="submit"
            aria-label="Send message"
            disabled={loading || !input.trim()}
          >
            <ArrowUp size={22} />
          </button>
        </form>
        <p className="chat-privacy">
          AI can make mistakes. Keep personal details out of chat.{" "}
          <Link to="/privacy">How chat data is used</Link>
        </p>
      </section>
    </div>
  );
}
