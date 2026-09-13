import deskSetupImg from '../assets/desk_setup.jpg';
import AudioPlayer from './AudioPlayer';
import { IconCpu } from './Icons';

export default function About() {
  const workstationTags = ['CUDA', 'PYTHON', 'FASTAPI', 'DOCKER', 'POSTGRES', 'LLM'];

  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <div className="section-label-tag">
          <span className="label-dot"></span>
          <span className="font-mono">ABOUT ME</span>
        </div>
        <h2 className="section-main-title">Engineering Systems Behind The Intelligence</h2>
      </div>

      <div className="about-grid-3col">
        {/* COLUMN 1: Narrative & Engineering Philosophy */}
        <div className="about-col-card philosophy-card">
          <div className="card-header-bar">
            <span className="card-index-pill font-mono">01 // NARRATIVE</span>
            <span className="card-sub-pill font-mono">PHILOSOPHY</span>
          </div>

          <div className="philosophy-body">
            <p className="intro-paragraph">
              I am a <strong>Computer Science student</strong> and <strong>Full Stack AI Engineer</strong> passionate about bridging theoretical machine learning models with real-world, high-throughput software systems.
            </p>

            <p className="narrative-paragraph">
              My engineering focus centers on building practical AI systems where reliability, low latency, and deterministic behavior matter. Rather than relying on black-box wrappers, I build end-to-end architectures—from designing robust asynchronous APIs in <strong>FastAPI</strong> and structuring vector retrieval pipelines in <strong>RAG systems</strong>, to coordinating multi-step agent reasoning with <strong>LangGraph</strong>.
            </p>

            {/* Core Philosophy Callout */}
            <div className="philosophy-callout">
              <div className="callout-indicator"></div>
              <blockquote>
                "I care about what happens beyond the model — retrieval quality, latency, caching, session state, APIs, observability, and how the entire system behaves in production."
              </blockquote>
            </div>

            {/* Hands-on Stack Badges */}
            <div className="philosophy-stack-section">
              <div className="stack-heading font-mono">HANDS-ON PRODUCTION TECH</div>
              <div className="stack-badge-wrap font-mono">
                {['Python', 'FastAPI', 'LLMs', 'RAG', 'LangGraph', 'PostgreSQL', 'Docker', 'Caching', 'REST APIs'].map((tech) => (
                  <span key={tech} className="mini-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="fun-fact-box">
              <span className="fun-fact-badge font-mono">SYSTEM HABIT</span>
              <p className="fun-fact-text">
                <strong>Fun fact:</strong> I tend to understand a system best by tracing the entire request flow — from the API endpoint to the model and back.
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Engineering Rig / Workspace */}
        <div className="about-col-card rig-card">
          <div className="card-header-bar">
            <span className="card-index-pill font-mono">02 // RIG &amp; SETUP</span>
            <span className="card-sub-pill font-mono">WORKSTATION</span>
          </div>

          <div className="rig-visual-wrapper">
            <img
              src={deskSetupImg}
              alt="Engineering Workstation & Telemetry Monitors"
              className="rig-image"
              loading="lazy"
            />
            <div className="rig-image-overlay"></div>

            {/* Overlay Technical Badges */}
            <div className="rig-badges-overlay font-mono">
              {workstationTags.map((tag) => (
                <span key={tag} className="rig-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rig-details-content">
            <div className="rig-status-line font-mono">
              <IconCpu size={14} className="accent-rose" />
              <span>TERMINAL-FIRST // CUDA EXPERIMENTATION</span>
            </div>

            <p className="rig-description">
              Terminal-first workflow. Multiple displays. GPU-backed experimentation. APIs, logs, documentation, and research papers always open.
            </p>

            <div className="rig-specs-list font-mono">
              <div className="spec-row">
                <span className="spec-label">ENV</span>
                <span className="spec-val">Linux / WSL2 &bull; VS Code &bull; Neovim</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">GPU COMPUTE</span>
                <span className="spec-val">NVIDIA CUDA &bull; Groq LPU Inference</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">DATABASE</span>
                <span className="spec-val">PostgreSQL &bull; Redis &bull; ChromaDB</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">TELEMETRY</span>
                <span className="spec-val">Docker Containers &bull; Fast Logging</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: On Repeat — Audio Widget */}
        <div className="about-col-card audio-col-card">
          <div className="card-header-bar">
            <span className="card-index-pill font-mono">03 // FLOW STATE</span>
            <span className="card-sub-pill font-mono">AUDIO</span>
          </div>
          <AudioPlayer />
        </div>
      </div>
    </section>
  );
}
