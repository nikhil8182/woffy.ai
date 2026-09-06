import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowUp, ArrowUpRight, Check, Loader2, Plus, RotateCcw } from 'lucide-react';
import { chatWithWoffy } from '../ai';
import '../styles/chat.css';

const suggestions = [
  { title: 'What is Woffy?', detail: 'Start with the idea', prompt: 'What is Woffy?' },
  { title: 'What works today?', detail: 'See where we are', prompt: 'What can Woffy do today?' },
  { title: 'How will it help at home?', detail: 'Explore the possibilities', prompt: 'How do you hope Woffy will help at home?' },
  { title: 'What comes next?', detail: 'A look at the roadmap', prompt: 'What are you working on next?' },
];

function inlineText(text) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\((?:https?:\/\/|\/)[^)\s]+\))/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} rel="noopener noreferrer">{link[1]}</a>;
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function MessageText({ text }) {
  const blocks = [];
  let list = [];
  const flushList = () => {
    if (list.length) {
      blocks.push(<ul key={`list-${blocks.length}`}>{list.map((item, index) => <li key={index}>{inlineText(item)}</li>)}</ul>);
      list = [];
    }
  };
  for (const line of text.split('\n')) {
    if (/^\s*[-*]\s+/.test(line)) list.push(line.replace(/^\s*[-*]\s+/, ''));
    else {
      flushList();
      if (line.trim()) blocks.push(<p key={`paragraph-${blocks.length}`}>{inlineText(line)}</p>);
    }
  }
  flushList();
  return <div className="c-message-copy">{blocks}</div>;
}

function ConceptPortrait({ className = '' }) {
  return <img className={className} src="/images/cloud-front.webp" alt="Cloud design study with a plush body and expressive face" width="1536" height="1024" decoding="async" onError={(event) => {
    if (!event.currentTarget.dataset.fallback) {
      event.currentTarget.dataset.fallback = 'true';
      event.currentTarget.src = '/images/cloud-front.webp';
    }
  }} />;
}

export default function ChatWithWoffy() {
  const reducedMotion = useReducedMotion();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [showJump, setShowJump] = useState(false);
  const inputRef = useRef(null);
  const transcriptRef = useRef(null);
  const latestMessageRef = useRef(null);
  const inFlight = useRef(false);
  const failedRequest = useRef(null);
  const requestVersion = useRef(0);
  const messageId = useRef(0);
  const followMessages = useRef(true);

  useEffect(() => () => { requestVersion.current += 1; }, []);

  useLayoutEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.style.height = 'auto';
    inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 136)}px`;
  }, [input]);

  useLayoutEffect(() => {
    const transcript = transcriptRef.current;
    if (!transcript || !messages.length) return;
    if (!followMessages.current) {
      setShowJump(true);
      return;
    }
    const last = messages[messages.length - 1];
    const top = last.sender === 'woffy' && latestMessageRef.current
      ? Math.max(0, latestMessageRef.current.offsetTop - 24)
      : transcript.scrollHeight;
    transcript.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
  }, [messages, pending, error, reducedMotion]);

  const sendRequest = async (request) => {
    if (inFlight.current) return;
    inFlight.current = true;
    const version = ++requestVersion.current;
    followMessages.current = true;
    failedRequest.current = null;
    setError('');
    setPending(true);
    setShowJump(false);
    try {
      const result = await chatWithWoffy(request.text, request.history);
      if (version !== requestVersion.current) return;
      const reply = {
        id: ++messageId.current,
        sender: 'woffy',
        text: result.response,
        mode: result.mode,
        createdAt: new Date().toISOString(),
      };
      setMessages(previous => [...previous, reply]);
    } catch (reason) {
      if (version !== requestVersion.current) return;
      failedRequest.current = request;
      setError(reason instanceof Error ? reason.message : 'We could not reach Woffy. Please try again.');
    } finally {
      if (version === requestVersion.current) {
        inFlight.current = false;
        setPending(false);
        // Keep a mobile keyboard closed after a suggestion; never steal focus
        // when someone has moved to a link or another control while waiting.
        if (request.restoreInputFocus && document.activeElement === document.body) inputRef.current?.focus({ preventScroll: true });
      }
    }
  };

  const submit = (event, text = input) => {
    event?.preventDefault();
    if (inFlight.current || !text.trim()) return;
    const question = text.trim();
    const history = messages.slice(-12).map(message => ({ role: message.sender === 'user' ? 'user' : 'assistant', text: message.text }));
    const userMessage = { id: ++messageId.current, sender: 'user', text: question, createdAt: new Date().toISOString() };
    followMessages.current = true;
    setMessages(previous => [...previous, userMessage]);
    setInput('');
    sendRequest({ text: question, history, restoreInputFocus: document.activeElement === inputRef.current });
  };

  const retry = () => {
    if (failedRequest.current && !inFlight.current) sendRequest(failedRequest.current);
  };

  const reset = () => {
    if (inFlight.current) return;
    failedRequest.current = null;
    followMessages.current = true;
    setMessages([]);
    setError('');
    setShowJump(false);
    inputRef.current?.focus({ preventScroll: true });
  };

  const jumpToLatest = () => {
    followMessages.current = true;
    setShowJump(false);
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="c-page">
      <header className="c-topbar">
        <Link to="/" className="c-wordmark" aria-label="Woffy home">woffy<span aria-hidden="true">.</span></Link>
        <Link to="/" className="c-home-link"><ArrowLeft size={15} aria-hidden="true" /><span>Back to Woffy</span></Link>
      </header>

      <div className="c-workspace">
        <aside className="c-introduction" aria-label="Meet the Woffy project">
          <div className="c-intro-heading">
            <p className="c-eyebrow">A companion in the making</p>
            <h2>A little hello.<br />A closer look.</h2>
          </div>
          <motion.figure className="c-portrait" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <ConceptPortrait className="c-portrait-image" />
            <figcaption><span>Woffy</span><span>Design concept</span></figcaption>
          </motion.figure>
          <div className="c-intro-note">
            <p>We’re building a companion robot for everyday life. Get to know the idea, the work in progress, and the people behind it.</p>
            <Link to="/about" className="c-text-link">Meet the project <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="c-aside-footer"><span>Made with curiosity.</span><a href="https://onwords.in" rel="noopener noreferrer">By Onwords <ArrowUpRight size={13} aria-hidden="true" /></a></div>
        </aside>

        <section className="c-conversation" aria-labelledby="c-chat-title">
          <div className="c-conversation-header">
            <div className="c-identity">
              <div className="c-avatar c-avatar-header"><ConceptPortrait /></div>
              <div><h1 id="c-chat-title">Chat with Woffy</h1><p><span className="c-status-dot" aria-hidden="true" />AI project demo</p></div>
            </div>
            <button type="button" className="c-reset" onClick={reset} disabled={pending || !messages.length} aria-label="Start a new conversation" title="Start a new conversation"><Plus size={18} aria-hidden="true" /><span>New conversation</span></button>
          </div>

          <div ref={transcriptRef} className={`c-transcript${messages.length ? '' : ' c-transcript-empty'}`} onScroll={(event) => {
            const element = event.currentTarget;
            followMessages.current = element.scrollHeight - element.scrollTop - element.clientHeight < 120;
            if (followMessages.current) setShowJump(false);
          }}>
            {!messages.length ? (
              <motion.div className="c-welcome" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <span className="c-welcome-label">Nice to meet you</span>
                <h2>Say hello<br />to Woffy<span>.</span></h2>
                <p>A small introduction to the companion we’re building. What would you like to know?</p>
                <div className="c-suggestions" aria-label="Suggested questions">
                  {suggestions.map(suggestion => <button key={suggestion.title} type="button" className="c-suggestion" onClick={() => submit(null, suggestion.prompt)} disabled={pending}><span><strong>{suggestion.title}</strong><small>{suggestion.detail}</small></span><ArrowUpRight size={17} aria-hidden="true" /></button>)}
                </div>
              </motion.div>
            ) : (
              <div className="c-message-list" role="log" aria-label="Conversation with Woffy" aria-live="polite" aria-relevant="additions">
                {messages.map((message, index) => <motion.article key={message.id} ref={index === messages.length - 1 ? latestMessageRef : undefined} className={`c-message c-message-${message.sender}`} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} aria-label={message.sender === 'user' ? 'Your message' : 'Woffy reply'}>
                  <div className="c-message-meta"><span>{message.sender === 'user' ? 'You' : 'Woffy'}</span>{message.sender === 'woffy' && <span className={`c-mode${message.mode === 'project-faq' ? ' c-mode-faq' : ''}`}>{message.mode === 'project-faq' ? 'Project FAQ' : 'AI reply'}</span>}<time dateTime={message.createdAt}>{new Date(message.createdAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</time></div>
                  {message.sender === 'woffy' && message.mode === 'project-faq' && <p className="c-faq-note">Live AI is unavailable, so this answer comes from our project FAQ.</p>}
                  <div className="c-message-content"><MessageText text={message.text} /></div>
                </motion.article>)}
                {pending && <div className="c-thinking" role="status"><Loader2 size={16} aria-hidden="true" /><span>Woffy is thinking<span aria-hidden="true">…</span></span></div>}
                {error && <div className="c-error" role="alert"><div><strong>Your message is still here.</strong><p>{error}</p></div><button type="button" onClick={retry} disabled={pending} aria-label="Retry last message"><RotateCcw size={14} aria-hidden="true" />Retry</button></div>}
              </div>
            )}
          </div>

          <div className="c-composer-area">
            <AnimatePresence>{showJump && <motion.button type="button" className="c-jump" onClick={jumpToLatest} initial={reducedMotion ? false : { opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><ArrowDown size={14} aria-hidden="true" />Latest message</motion.button>}</AnimatePresence>
            <form onSubmit={submit} className={`c-composer${pending ? ' c-composer-busy' : ''}`} aria-label="Send a message to Woffy">
              <label htmlFor="c-message-input" className="c-sr-only">Message Woffy</label>
              <textarea ref={inputRef} id="c-message-input" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) submit(event);
              }} placeholder={messages.length ? 'Keep the conversation going…' : 'Ask Woffy anything about the project…'} maxLength={1000} rows={1} aria-describedby="c-compose-hint" />
              <button type="submit" className="c-send" disabled={!input.trim() || pending} aria-label={pending ? 'Waiting for Woffy’s reply' : 'Send message'}>{pending ? <Loader2 size={19} aria-hidden="true" /> : <ArrowUp size={21} strokeWidth={1.8} aria-hidden="true" />}</button>
            </form>
            <div className="c-composer-meta"><span id="c-compose-hint">{input.length > 800 ? `${1000 - input.length} characters left` : <><span className="c-desktop-hint">Enter to send <span aria-hidden="true">·</span> Shift + Enter for a new line</span><span className="c-mobile-hint">A text demo. Woffy is still in development.</span></>}</span><Link to="/privacy">Privacy <ArrowUpRight size={11} aria-hidden="true" /></Link></div>
            <p className="c-demo-note"><Check size={11} aria-hidden="true" />A project conversation, not a connected physical robot.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
