import { useState } from 'react';
import ProjectCard from './ProjectCard';
import SkillsMatrix from './SkillsMatrix';

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: 6 },
    { id: 'ai', label: 'AI & Multi-Agent', count: 3 },
    { id: 'devtools', label: 'Developer Tooling', count: 1 },
    { id: 'systems', label: 'Backend & Systems', count: 2 },
  ];

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
      title: 'Quant Pilot',
      filterType: 'ai',
      category: 'Autonomous Agentic Finance',
      subtitle: 'AI-powered financial analysis platform using LangGraph, Alpaca API live trading terminal, and PostgreSQL memory.',
      description:
        'Architected a full-scale AI-powered financial analysis platform implementing a stateful multi-agent reasoning workflow for real-time stock market analysis. Features a Trading Terminal with Alpaca Trading API integration for live portfolio synchronization and one-click execution.',
      highlights: [
        'Architected an AI-powered financial analysis platform using LangGraph and FastAPI implementing a stateful multi-agent reasoning workflow for real-time stock market analysis.',
        'Developed a Trading Terminal integrating the Alpaca Trading API to enable live portfolio synchronization and one-click BUY/SELL execution.',
        'Implemented persistent AI memory using PostgreSQL and LangGraph PostgresSaver, ensuring durable execution history and audit-ready conversations.',
        'Designed a predictive inference pipeline generating confidence-scored BUY/SELL recommendations with automated technical reasoning across 5,000+ ticker symbols.',
      ],
      architectureFlow: [
        'Market Data Feed',
        'LangGraph Multi-Agent',
        'PostgresSaver Memory',
        'Confidence Predictor',
        'Alpaca Order Terminal',
      ],
      challenge:
        'Coordinating multiple analytical agents (technicals, sentiment, risk constraints) with stateful memory across sessions without circular reasoning or uncontrolled hallucination.',
      solution:
        'Constructed a deterministic state machine using LangGraph with cyclical validation nodes and PostgreSQL PostgresSaver durable persistence, binding all trade recommendations to strict risk constraints.',
      techStack: ['React', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Alpaca API', 'Python', 'Tailwind CSS'],
      githubUrl: 'https://github.com/VishalBhagat01/QuantPilot',
      demoUrl: 'https://quant-pilot-delta.vercel.app/',
    },
    {
      number: '02',
      title: 'Open Source Agent',
      filterType: 'ai',
      category: 'Autonomous AI Software Engineering',
      subtitle: 'Autonomous AI software engineering agent analyzing GitHub issues and generating production-ready code patches.',
      description:
        'Built an autonomous AI software engineering agent capable of analyzing complex GitHub issues, performing automated repository cloning, semantic file retrieval, multi-step patch planning, patch application, and regression test execution.',
      highlights: [
        'Built an autonomous AI software engineering agent capable of analyzing GitHub issues and generating production-ready code patches.',
        'Implemented repository cloning, semantic file retrieval, planning, patch generation, validation, patch application, and automated test execution.',
        'Integrated LangGraph orchestration with local LLMs using Ollama to perform multi-step reasoning over large repositories.',
        'Designed validation pipelines ensuring modifications include both production code and regression tests before execution.',
      ],
      architectureFlow: [
        'GitHub Issue Input',
        'Repo Clone & AST Index',
        'Semantic Retrieval',
        'LangGraph Planner (Ollama)',
        'Patch Synthesis',
        'Regression Test Runner',
      ],
      challenge:
        'Navigating sprawling multi-file repositories with local LLMs without hallucinating dependencies or breaking existing test suites.',
      solution:
        'Built hierarchical semantic file retrieval with AST symbol indexing and integrated LangGraph cyclical planning loops with local Ollama LLMs and isolated test verification pipelines.',
      techStack: ['React', 'Node.js', 'FastAPI', 'LangGraph', 'Ollama', 'Git', 'Python'],
      githubUrl: 'https://github.com/VishalBhagat01/osca',
      demoUrl: null,
    },
    {
      number: '03',
      title: 'EiziAPI',
      filterType: 'devtools',
      category: 'Developer Tooling & API Synthesis',
      subtitle: 'AI-powered REST API generation platform generating validated endpoints, request schemas, and downloadable PDF docs.',
      description:
        'Developed an AI-powered API generation platform converting natural language prompts into production-ready REST endpoints, request schemas, sample payloads, validation rules, and HTTP status codes with interactive dark-mode preview and downloadable PDF documentation.',
      highlights: [
        'Developed an AI-powered API generation platform capable of generating REST endpoints, request schemas, sample payloads, validation rules, and HTTP status codes.',
        'Integrated Groq and Gemini LLMs to produce production-ready backend specifications directly from natural language prompts.',
        'Implemented downloadable professional PDF API documentation with a modern dark-themed interface.',
        'Enforced strict Pydantic model verification to eliminate syntax errors and hallucinated schemas.',
      ],
      architectureFlow: [
        'Natural Language Prompt',
        'Groq / Gemini LLM Parsing',
        'Pydantic Schema Validation',
        'PDF Docs Generation',
        'Deployable Endpoint',
      ],
      challenge:
        'Preventing syntax hallucinations and ensuring generated endpoints adhere strictly to valid HTTP response standards and type contracts.',
      solution:
        'Integrated LangGraph decision chains with strict Pydantic model verification, enforcing schema correctness and automated code formatting before streaming to the client.',
      techStack: ['React', 'FastAPI', 'Groq', 'Gemini API', 'LangGraph', 'Python', 'Tailwind CSS'],
      githubUrl: 'https://github.com/VishalBhagat01/EiziAPI',
      demoUrl: null,
    },
    {
      number: '04',
      title: 'SmoURL',
      filterType: 'systems',
      category: 'Full-Stack Systems & Telemetry',
      subtitle: 'URL shortening infrastructure platform with real-time analytics telemetry and programmatic APIs.',
      description:
        'Constructed a reliable high-throughput link management and redirection engine. Features comprehensive click telemetry, geolocation tracking, custom aliases, and developer API key management.',
      highlights: [
        'Constructed high-throughput URL shortening service featuring click telemetry, geolocation tracking, and developer API key access.',
        'Implemented atomic database increments to prevent race conditions during high concurrent traffic.',
      ],
      architectureFlow: [
        'Short URL Request',
        'Routing Engine',
        'Atomic Increment',
        'MongoDB Persistence',
        'Analytics Telemetry',
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
      title: 'Untold India AI Chatbot',
      filterType: 'ai',
      category: 'RAG & Conversational Systems',
      subtitle: 'Asynchronous conversational system with contextual retrieval, LRU caching, and session persistence.',
      description:
        'Engineered an end-to-end intelligent conversational assistant focused on high-accuracy domain retrieval. The system implements multi-tier caching and persistent session state to maintain conversational context while optimizing token latency and API overhead.',
      highlights: [
        'Designed an AI conversational architecture combining RAG, session management, asynchronous FastAPI endpoints, and multi-tier caching (LRU/TTL).',
        'Implemented database persistence with SQLAlchemy and PostgreSQL, preventing redundant LLM token expenditures and optimizing query latency.',
      ],
      architectureFlow: [
        'User Query',
        'Session Management',
        'Cache (LRU/TTL)',
        'RAG Retrieval',
        'LLM Inference',
        'Response Stream',
      ],
      challenge:
        'Maintaining conversational continuity across multi-turn queries while minimizing inference latency and repeated LLM calls on frequent queries.',
      solution:
        'Architected an asynchronous pipeline in FastAPI combining an LRU/TTL query cache with vector retrieval and SQLAlchemy session pooling, preventing redundant embedding lookups.',
      techStack: ['Python', 'FastAPI', 'RAG', 'PostgreSQL', 'SQLAlchemy', 'LRU Cache', 'Embeddings'],
      githubUrl: 'https://github.com/VishalBhagat01/untold-india',
      demoUrl: null,
    },
    {
      number: '06',
      title: 'DevChat',
      filterType: 'systems',
      category: 'Distributed Collaborative Workspace',
      subtitle: 'Real-time collaborative browser IDE with multi-file code execution and a distributed pub/sub backend.',
      description:
        'Built, stress-tested, and scaled a real-time browser IDE supporting multi-file code execution and asynchronous state sync, backed by a Redis-adapter pub/sub layer with JWT security.',
      highlights: [
        'Built a real-time browser IDE using React and Node.js supporting multi-file code execution and asynchronous AJAX/HTTP state sync.',
        'Architected a distributed pub/sub backend using Node.js, Socket.IO, and Redis Adapter with JWT security, sustaining 50 concurrent clients at 11.64ms P95 RTT with zero timeouts.',
        'Optimized database throughput with compound indexes and cursor pagination, achieving 0% HTTP error rate and 239.81-380.71ms P95 latency across 220 concurrent requests.',
      ],
      architectureFlow: [
        'React Client',
        'Socket.IO Gateway',
        'Redis Adapter Pub/Sub',
        'Node.js Services',
        'MongoDB Persistence',
      ],
      challenge:
        'Keeping multi-user editing state consistent across server instances under concurrent load.',
      solution:
        'Used a Redis pub/sub adapter behind Socket.IO with JWT auth, and compound indexes with cursor pagination for stable database throughput.',
      techStack: ['React', 'Node.js', 'Socket.IO', 'Redis', 'MongoDB', 'Express', 'JavaScript'],
      githubUrl: 'https://github.com/VishalBhagat01/DevChat',
      demoUrl: null,
    },
  ];

  const displayedProjects =
    selectedFilter === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) => p.filterType === selectedFilter);

  return (
    <section className="work-section" id="work">
      {/* Top Header & Filter Strip */}
      <div className="work-section-header">
        <div className="section-header-title-block">
          <div className="section-label-tag">
            <span className="label-dot"></span>
            <span className="font-mono">PORTFOLIO // FEATURED SYSTEMS</span>
          </div>
          <h2 className="section-main-title">Real Systems. Built, Tested &amp; Deployed.</h2>
        </div>

        {/* Category Filter Pills */}
        <div className="work-filter-pills font-mono" role="tablist" aria-label="Project Categories">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`work-filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedFilter(tab.id)}
                role="tab"
                aria-selected={isActive}
              >
                <span>{tab.label}</span>
                <span className="filter-count-badge">{tab.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Side-by-Side 2-Column Projects Grid */}
      <div className="projects-grid-2col">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>

      {/* Engineering Ecosystem Section: Focus & Progression on Left, Skills Matrix on Right */}
      <div className="work-ecosystem-section">
        <div className="ecosystem-header">
          <div className="section-label-tag">
            <span className="label-dot"></span>
            <span className="font-mono">ENGINEERING ECOSYSTEM // TECH STACK</span>
          </div>
          <h3 className="ecosystem-title">Current Focus, Progression &amp; Verified Skills</h3>
        </div>

        <div className="work-ecosystem-2col">
          {/* Left Column: Currently Building & Progression */}
          <div className="ecosystem-col-card current-building-col">
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

          {/* Right Column: Skills & Technical Stack Matrix */}
          <div className="ecosystem-col-card skills-matrix-col">
            <SkillsMatrix />
          </div>
        </div>
      </div>
    </section>
  );
}
