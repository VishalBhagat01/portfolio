import React from 'react';
import { IconDownload, IconPrint, IconMail, IconGithub, IconLinkedin, IconExternalLink } from './Icons';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="resume-section" id="resume">
      <div className="resume-toolbar-header">
        <div className="resume-status-title">
          <span className="live-dot pulse-rose"></span>
          <span className="resume-title-text font-mono">RESUME // CURRICULUM VITAE</span>
        </div>

        <div className="resume-actions-group font-mono">
          <button onClick={handlePrint} className="resume-btn" title="Open Print Dialog">
            <IconPrint size={15} />
            <span>Print</span>
          </button>
          <button onClick={handlePrint} className="resume-btn primary-resume-btn" title="Save as PDF">
            <IconDownload size={15} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Embedded ATS-Friendly Dense Resume Sheet */}
      <div className="resume-sheet-container" id="resume-printable-area">
        {/* Header */}
        <header className="resume-sheet-header">
          <div className="resume-sheet-name-block">
            <h1 className="resume-sheet-name">Vishal Kumar Bhagat</h1>
            <p className="resume-sheet-role font-mono">Full Stack AI Engineer</p>
          </div>

          <div className="resume-sheet-contacts font-mono">
            <a href="mailto:vishalbhagattt01@gmail.com" className="resume-contact-item">
              <IconMail size={13} />
              <span>vishalbhagattt01@gmail.com</span>
            </a>
            <a
              href="https://github.com/VishalBhagat01"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-item"
            >
              <IconGithub size={13} />
              <span>github.com/VishalBhagat01</span>
            </a>
            <a
              href="https://linkedin.com/in/vishalbhagat01"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-item"
            >
              <IconLinkedin size={13} />
              <span>linkedin.com/in/vishalbhagat01</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <div className="resume-block">
          <h2 className="resume-block-title font-mono">PROFESSIONAL SUMMARY</h2>
          <p className="resume-summary-text">
            Computer Science student and Full Stack AI Engineer focused on building production-oriented AI applications, LLM workflows, RAG systems, agentic architectures, and scalable Python backends. Experienced in developing end-to-end systems involving FastAPI, PostgreSQL, asynchronous processing, caching, model APIs, and modern frontend applications.
          </p>
        </div>

        {/* Section: Core Competencies */}
        <div className="resume-block">
          <h2 className="resume-block-title font-mono">CORE COMPETENCIES</h2>
          <div className="resume-competencies-grid font-mono">
            <span>AI Engineering</span>
            <span>LLM Applications</span>
            <span>RAG Pipelines</span>
            <span>Agentic Systems</span>
            <span>Backend Engineering</span>
            <span>FastAPI &amp; REST</span>
            <span>PostgreSQL &amp; Caching</span>
            <span>System Design</span>
            <span>Machine Learning</span>
            <span>Performance Optimization</span>
          </div>
        </div>

        {/* Section: Featured Projects */}
        <div className="resume-block">
          <h2 className="resume-block-title font-mono">FEATURED ENGINEERING PROJECTS</h2>

          {/* Project 1 */}
          <div className="resume-project-item">
            <div className="resume-item-top">
              <div className="project-heading-wrap">
                <h3 className="resume-project-name">Untold India AI Chatbot</h3>
                <span className="resume-project-tech font-mono">
                  Python, FastAPI, RAG, PostgreSQL, SQLAlchemy, Caching, Embeddings
                </span>
              </div>
              <span className="resume-date font-mono">Independent Project</span>
            </div>
            <ul className="resume-bullets">
              <li>
                Designed an AI conversational architecture combining RAG, session management, asynchronous FastAPI endpoints, and multi-tier caching (LRU/TTL) to preserve contextual continuity across multi-turn sessions.
              </li>
              <li>
                Implemented database persistence with SQLAlchemy and PostgreSQL, preventing redundant LLM token expenditures and optimizing query response latency.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="resume-project-item">
            <div className="resume-item-top">
              <div className="project-heading-wrap">
                <h3 className="resume-project-name">EiziAPI — AI REST Endpoint Generator</h3>
                <span className="resume-project-tech font-mono">
                  Python, FastAPI, LangGraph, Groq, Gemini API, React, Vite
                </span>
              </div>
              <span className="resume-date font-mono">Developer Tooling</span>
            </div>
            <ul className="resume-bullets">
              <li>
                Built an AI-powered API generation workflow transforming natural-language requirements into structured, validated FastAPI endpoints with automated Pydantic schema validation.
              </li>
              <li>
                Implemented deterministic code synthesis guards to eliminate hallucinated endpoints, providing instant live test previews and syntax verification.
              </li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="resume-project-item">
            <div className="resume-item-top">
              <div className="project-heading-wrap">
                <h3 className="resume-project-name">Quant Pilot — Autonomous Trading Simulation Agent</h3>
                <span className="resume-project-tech font-mono">
                  LangGraph, Python, FastAPI, Groq LPU, Alpaca API, React
                </span>
              </div>
              <span className="resume-date font-mono">Research Project</span>
            </div>
            <ul className="resume-bullets">
              <li>
                Developed an agentic market-intelligence simulation workflow using LangGraph for multi-step reasoning, real-time indicator parsing, and news sentiment scoring.
              </li>
              <li>
                Enforced deterministic risk management constraints within agent decision loops before generating simulated algorithmic trades.
              </li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="resume-project-item">
            <div className="resume-item-top">
              <div className="project-heading-wrap">
                <h3 className="resume-project-name">SmoURL — Telemetry &amp; Link Management</h3>
                <span className="resume-project-tech font-mono">Node.js, Express, MongoDB, React</span>
              </div>
              <span className="resume-date font-mono">Full Stack Engineering</span>
            </div>
            <ul className="resume-bullets">
              <li>
                Constructed high-throughput URL shortening service featuring click telemetry, geolocation tracking, and developer API key access with atomic increments.
              </li>
            </ul>
          </div>

          {/* Project 5 */}
          <div className="resume-project-item">
            <div className="resume-item-top">
              <div className="project-heading-wrap">
                <h3 className="resume-project-name">Movie Recommender Microservice</h3>
                <span className="resume-project-tech font-mono">
                  Python, Scikit-learn, Random Forest, Docker
                </span>
              </div>
              <span className="resume-date font-mono">Machine Learning</span>
            </div>
            <ul className="resume-bullets">
              <li>
                Built and containerized a machine-learning recommendation engine combining classical Random Forest classifiers and collaborative filtering, packaged in Docker for reproducible sub-50ms inference.
              </li>
            </ul>
          </div>
        </div>

        {/* Section: Technical Skills */}
        <div className="resume-block">
          <h2 className="resume-block-title font-mono">TECHNICAL SKILLS</h2>
          <div className="resume-skills-list font-mono">
            <div className="skills-line">
              <strong className="skills-category">Languages:</strong> Python, JavaScript (ES6+), SQL, HTML5, CSS3
            </div>
            <div className="skills-line">
              <strong className="skills-category">AI &amp; ML:</strong> LLMs, RAG, LangGraph, PyTorch, HuggingFace, Embeddings, Prompt Engineering, Vector Retrieval
            </div>
            <div className="skills-line">
              <strong className="skills-category">Backend &amp; Systems:</strong> FastAPI, REST APIs, PostgreSQL, SQLAlchemy, MongoDB, Docker, Asynchronous Python, LRU/TTL Caching, Session Management
            </div>
            <div className="skills-line">
              <strong className="skills-category">Tools &amp; Frontend:</strong> React, Vite, Git, Linux / Bash, Postman, VS Code
            </div>
          </div>
        </div>

        {/* Section: Education */}
        <div className="resume-block">
          <h2 className="resume-block-title font-mono">EDUCATION</h2>
          <div className="resume-edu-item">
            <div className="resume-item-top">
              <div>
                <h3 className="resume-project-name">Bachelor of Technology (B.Tech)</h3>
                <p className="resume-edu-sub">Computer Science &amp; Engineering</p>
              </div>
              <span className="resume-date font-mono">Pursuing Degree</span>
            </div>
          </div>
        </div>

        {/* Section: Open Source */}
        <div className="resume-block">
          <h2 className="resume-block-title font-mono">OPEN SOURCE &amp; ACTIVITIES</h2>
          <p className="resume-summary-text">
            Active contributor and project builder on GitHub (<strong>@VishalBhagat01</strong>), developing open-source agentic workflows, API automation tools, and containerized ML pipelines for the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
