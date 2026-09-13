import avatarImg from '../assets/avatar.png';
import { IconArrowRight, IconTerminal } from './Icons';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left: Avatar Column */}
        <div className="hero-avatar-col">
          <div className="avatar-frame-wrap">
            <div className="avatar-rose-glow"></div>
            <div className="avatar-ambient-radial"></div>
            <div className="avatar-cutout-container">
              <img
                src={avatarImg}
                alt="Vishal Kumar Bhagat - Full Stack AI Engineer"
                className="avatar-portrait"
                loading="eager"
              />
            </div>
            <div className="avatar-floating-tag">
              <span className="terminal-prompt-sym">$</span>
              <span className="terminal-prompt-txt">ai-systems --active</span>
            </div>
          </div>
        </div>

        {/* Right: Typography & Introduction */}
        <div className="hero-content-col">
          {/* Status Badge */}
          <div className="status-badge" role="status">
            <span className="status-pulse-dot"></span>
            <span className="status-badge-text">
              AVAILABLE FOR AI ENGINEER &amp; AGENTIC SYSTEMS ROLES
            </span>
          </div>

          {/* Headline */}
          <div className="hero-headline">
            <div className="headline-greeting">Hi, I am</div>
            <h1 className="headline-name">
              <span className="accent-rose">Vishal,</span>
            </h1>
            <div className="headline-role-line">A Full Stack,</div>
            <div className="headline-specialization">
              <span className="accent-rose">AI Engineer.</span>
            </div>
          </div>

          {/* Supporting Positioning */}
          <p className="hero-positioning">
            Building intelligent systems with LLMs, RAG, agentic workflows, and scalable backend infrastructure.
          </p>

          {/* Interactive Technical Terminal Card */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="t-dot t-red"></span>
                <span className="t-dot t-yellow"></span>
                <span className="t-dot t-green"></span>
              </div>
              <div className="terminal-title">
                <IconTerminal size={13} className="t-icon" />
                <span>vishal@ai-systems:~</span>
              </div>
              <div className="terminal-badge">bash</div>
            </div>
            <div className="terminal-body font-mono">
              <div className="t-line">
                <span className="t-prompt">$</span> <span className="t-cmd">whoami</span>
              </div>
              <div className="t-out t-user">vishalbhagat@ai-engineer</div>
              <div className="t-line mt-2">
                <span className="t-muted">focus:</span>
              </div>
              <div className="t-indent">
                <div><span className="t-accent">↳</span> LLM Systems &amp; Prompt Orchestration</div>
                <div><span className="t-accent">↳</span> Agentic AI &amp; LangGraph</div>
                <div><span className="t-accent">↳</span> Production RAG &amp; Vector Embeddings</div>
                <div><span className="t-accent">↳</span> Asynchronous FastAPI &amp; Caching</div>
                <div><span className="t-accent">↳</span> Scalable Backend Infrastructure</div>
              </div>
              <div className="t-line mt-2">
                <span className="t-muted">status:</span> <span className="t-green">building...</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="hero-cta-group">
            <button
              onClick={() => onNavigate('resume')}
              className="btn btn-primary"
              aria-label="View Resume"
            >
              <span>View Resume</span>
              <IconArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigate('work')}
              className="btn btn-secondary"
              aria-label="Explore Projects"
            >
              <span>Explore Projects</span>
            </button>
            <button
              onClick={() => onNavigate('links')}
              className="btn btn-tertiary"
              aria-label="Let's Connect"
            >
              <span>Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
