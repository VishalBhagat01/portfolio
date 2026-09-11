import React from 'react';
import ProjectCard from './ProjectCard';
import SkillsMatrix from './SkillsMatrix';

export default function Work() {
  const progressionSteps = [
    { label: 'Computer Science Foundation', period: 'Academic & Algorithms', type: 'Core' },
    { label: 'Full Stack Web Development', period: 'React, Node, REST APIs', type: 'Systems' },
    { label: 'Machine Learning & Models', period: 'Scikit-learn, Classification', type: 'Data' },
    { label: 'LLM Systems & Prompt Eng.', period: 'Groq, Gemini, Token Ops', type: 'AI' },
    { label: 'RAG & Agentic Architectures', period: 'LangGraph, ChromaDB, State', type: 'Orchestration' },
    { label: 'Production AI Engineering', period: 'FastAPI, Caching, Asynchronous', type: 'Current Focus' },
  ];

  const currentFocusAreas = [
    'AI Systems Engineering',
    'LLM Application Backends',
    'Agentic Systems with LangGraph',
    'Low-Latency RAG Pipelines',
    'Asynchronous FastAPI Backends',
    'Open Source Developer Tooling',
  ];

  const featuredProjects = [
    {
      number: '01',
      title: 'Untold India AI Chatbot',
      category: 'RAG & Conversational Systems',
      subtitle: 'Asynchronous conversational system with contextual retrieval, LRU caching, and session persistence.',
      description:
        'Engineered an end-to-end intelligent conversational assistant focused on high-accuracy domain retrieval. The system implements multi-tier caching and persistent session state to maintain conversational context while optimizing token latency and API overhead.',
      architectureFlow: [
        'User Query',
        'Session Management',
        'Cache (LRU/TTL)',
        'RAG Retrieval',
        'Context Construction',
        'LLM Inference',
        'Response Stream',
      ],
      challenge:
        'Maintaining conversational continuity across multi-turn queries while minimizing inference latency and repeated LLM calls on frequent queries.',
      solution:
        'Architected an asynchronous pipeline in FastAPI combining an LRU/TTL query cache with vector retrieval and SQLAlchemy session pooling, preventing redundant embedding lookups and keeping response times sub-second for cached contexts.',
      techStack: ['Python', 'FastAPI', 'RAG', 'PostgreSQL', 'SQLAlchemy', 'LRU Cache', 'Embeddings'],
      githubUrl: 'https://github.com/VishalBhagat01',
      demoUrl: null,
    },
    {
      number: '02',
      title: 'EiziAPI',
      category: 'Developer Tooling & Code Generation',
      subtitle: 'AI-powered REST API generator transforming natural language specifications into validated Python endpoints.',
      description:
        'Developed an automated developer tool that synthesizes production-ready FastAPI and Node.js endpoints directly from plain English prompts, with integrated Pydantic schema validation and interactive preview generation.',
      architectureFlow: [
        'Natural Language Prompt',
        'Agentic Parsing',
        'Code Synthesis',
        'Pydantic Validation',
        'Production Endpoint',
      ],
      challenge:
        'Preventing syntax hallucinations and ensuring generated endpoints adhere strictly to valid HTTP response standards and type contracts.',
      solution:
        'Integrated LangGraph decision chains with strict Pydantic model verification, enforcing schema correctness and automated code formatting before streaming to the client.',
      techStack: ['Python', 'FastAPI', 'LangGraph', 'Groq', 'Gemini API', 'React', 'Vite'],
      githubUrl: 'https://github.com/VishalBhagat01/EiziAPI',
      demoUrl: null,
    },
    {
      number: '03',
      title: 'Quant Pilot',
      category: 'Agentic Finance Simulation',
      subtitle: 'Autonomous AI trading research system built on multi-agent orchestration and market intelligence graphs.',
      description:
        'Designed a multi-agent financial research and simulated trading assistant. Orchestrates specialized autonomous agents for live market data extraction, technical indicator synthesis, news sentiment analysis, and disciplined algorithmic order simulation.',
      architectureFlow: [
        'Market Data Feed',
        'LangGraph Multi-Agent',
        'Risk & Sentiment Graph',
        'Simulated Order Engine',
      ],
      challenge:
        'Coordinating multiple interdependent analytical agents (news, technicals, risk tolerance) without circular reasoning or uncontrolled hallucination.',
      solution:
        'Constructed a deterministic state machine using LangGraph with cyclical validation nodes, ensuring risk parameters strictly bound all agent trade recommendations prior to simulated execution.',
      techStack: ['LangGraph', 'Python', 'FastAPI', 'Groq LPU', 'Alpaca API', 'HuggingFace', 'React'],
      githubUrl: 'https://github.com/VishalBhagat01/QuantPilot',
      demoUrl: 'https://quant-pilot-delta.vercel.app/',
    },
    {
      number: '04',
      title: 'SmoURL',
      category: 'Full-Stack Systems & Telemetry',
      subtitle: 'URL shortening infrastructure platform with real-time analytics telemetry and programmatic APIs.',
      description:
        'Constructed a reliable high-throughput link management and redirection engine. Features comprehensive click telemetry, geolocation tracking, custom aliases, and developer API key management.',
      architectureFlow: [
        'Short URL Request',
        'Routing Engine',
        'Atomic Increment',
        'MongoDB Persistence',
        'Analytics Dashboard',
      ],
      challenge:
        'Capturing detailed analytics per redirect without introducing measurable latency to the end-user redirect cycle.',
      solution:
        'Decoupled redirection response headers from telemetry logging via asynchronous event dispatches and atomic database increments.',
      techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'REST APIs'],
      githubUrl: 'https://github.com/VishalBhagat01/Smourl',
      demoUrl: null,
    },
    {
      number: '05',
      title: 'Movie Recommender',
      category: 'Machine Learning & Containerization',
      subtitle: 'Containerized recommendation engine blending collaborative filtering with Random Forest classification.',
      description:
        'Implemented a content and collaborative filtering movie recommendation model trained on IMDB dataset features, packaged into a Docker container for reproducible inference.',
      architectureFlow: [
        'IMDB Dataset',
        'Feature Extraction',
        'Random Forest Model',
        'Dockerized Container',
        'Inference Endpoint',
      ],
      challenge:
        'Transitioning a raw Jupyter notebook model pipeline into a portable, reproducible microservice.',
      solution:
        'Serialized the trained model with joblib, wrapped inference in a clean REST layer, and built a lightweight multi-stage Docker image minimizing runtime footprint.',
      techStack: ['Python', 'Scikit-learn', 'Random Forest', 'Docker', 'HuggingFace'],
      githubUrl: 'https://github.com/VishalBhagat01/Movie',
      demoUrl: null,
    },
  ];

  return (
    <section className="work-section" id="work">
      <div className="section-header">
        <div className="section-label-tag">
          <span className="label-dot"></span>
          <span className="font-mono">WORK &amp; ENGINEERING</span>
        </div>
        <h2 className="section-main-title">Real Systems. Built, Tested &amp; Deployed.</h2>
      </div>

      <div className="work-grid-3col">
        {/* COLUMN 1: Currently Building & Progression */}
        <div className="work-col-card current-building-col">
          <div className="card-header-bar">
            <span className="card-index-pill font-mono">01 // FOCUS</span>
            <span className="card-sub-pill font-mono">STATUS</span>
          </div>

          <div className="building-content">
            <div className="currently-building-banner">
              <div className="status-live-indicator">
                <span className="pulse-green-dot"></span>
                <span className="font-mono">CURRENTLY BUILDING</span>
              </div>
              <h4 className="building-title">AI Systems &amp; Agent Infrastructure</h4>
              <p className="building-desc">
                Focusing on agentic workflows with LangGraph, production RAG evaluation, and asynchronous FastAPI backends with robust caching.
              </p>
            </div>

            {/* Active Focus Checkpoints */}
            <div className="focus-list-wrap">
              <div className="focus-title-label font-mono">PRIMARY DOMAINS</div>
              <div className="focus-items">
                {currentFocusAreas.map((area) => (
                  <div key={area} className="focus-item font-mono">
                    <span className="bullet-dash">&mdash;</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Progression Timeline */}
            <div className="progression-timeline">
              <div className="timeline-header font-mono">
                <span>ENGINEERING PROGRESSION</span>
              </div>
              <div className="timeline-steps">
                {progressionSteps.map((step, idx) => (
                  <div key={step.label} className="timeline-step-item">
                    <div className="step-marker-col">
                      <div className={`step-dot ${idx === progressionSteps.length - 1 ? 'active' : ''}`}></div>
                      {idx < progressionSteps.length - 1 && <div className="step-connector-line"></div>}
                    </div>
                    <div className="step-content">
                      <div className="step-name">{step.label}</div>
                      <div className="step-meta font-mono">
                        <span className="step-period">{step.period}</span>
                        <span className="step-type-badge">{step.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Featured Project Case Studies */}
        <div className="work-col-card projects-stream-col">
          <div className="card-header-bar">
            <span className="card-index-pill font-mono">02 // CASE STUDIES</span>
            <span className="card-sub-pill font-mono">PROJECTS ({featuredProjects.length})</span>
          </div>

          <div className="case-studies-list">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </div>
        </div>

        {/* COLUMN 3: Skills & Technical Stack Matrix */}
        <div className="work-col-card skills-stream-col">
          <SkillsMatrix />
        </div>
      </div>
    </section>
  );
}
