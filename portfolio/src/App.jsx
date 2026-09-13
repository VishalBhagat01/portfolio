import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Links from './components/Links';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      // Smooth scroll back to top of hero on home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Smoothly scroll down to details section when switching to any tab
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById('details-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      });
    }
  };

  // Keyboard shortcut: Escape to return to home tab
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleTabChange('home');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-layout">
      {/* Floating Navbar */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="main-content">
        {/* Persistent Hero Section */}
        <Hero onNavigate={handleTabChange} />

        {/* Tab Content Panels with Smooth Fade-in */}
        <div className="tab-panels-wrapper" id="details-section">
          {activeTab === 'home' && (
            <div className="tab-pane active-pane fade-in">
              <section className="home-highlights-section">
                <div className="section-header">
                  <div className="section-label-tag">
                    <span className="label-dot"></span>
                    <span className="font-mono">AT A GLANCE</span>
                  </div>
                  <h2 className="section-main-title">Engineering Highlights &amp; Systems</h2>
                </div>

                <div className="home-cards-grid">
                  {/* Highlight 1: Quant Pilot */}
                  <div
                    className="highlight-card"
                    onClick={() => handleTabChange('work')}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleTabChange('work');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="highlight-tag font-mono">FEATURED SYSTEM &bull; FINANCE</div>
                    <h3 className="highlight-title">Quant Pilot &bull; Agentic Trading Graph</h3>
                    <p className="highlight-desc">
                      Autonomous trading terminal with stateful multi-agent reasoning, Alpaca API live execution, and persistent PostgreSQL memory.
                    </p>
                    <div className="highlight-meta font-mono">
                      <span>LangGraph &bull; FastAPI &bull; Alpaca &bull; Postgres</span>
                      <span className="highlight-arrow">&rarr;</span>
                    </div>
                  </div>

                  {/* Highlight 2: Open Source Agent */}
                  <div
                    className="highlight-card"
                    onClick={() => handleTabChange('work')}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleTabChange('work');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="highlight-tag font-mono">AUTONOMOUS SWE AGENT</div>
                    <h3 className="highlight-title">Open Source Agent &bull; Code Patch Engine</h3>
                    <p className="highlight-desc">
                      Autonomous software engineering agent analyzing GitHub issues, planning AST edits, and synthesizing production patches with Ollama.
                    </p>
                    <div className="highlight-meta font-mono">
                      <span>LangGraph &bull; Ollama &bull; FastAPI &bull; Git</span>
                      <span className="highlight-arrow">&rarr;</span>
                    </div>
                  </div>

                  {/* Highlight 3: Developer Tool */}
                  <div
                    className="highlight-card"
                    onClick={() => handleTabChange('work')}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleTabChange('work');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="highlight-tag font-mono">DEVELOPER TOOLING</div>
                    <h3 className="highlight-title">EiziAPI &bull; AI Endpoint Synthesis</h3>
                    <p className="highlight-desc">
                      Natural language to production FastAPI endpoints with Pydantic validation, zero hallucination, and downloadable PDF documentation.
                    </p>
                    <div className="highlight-meta font-mono">
                      <span>Groq &bull; Gemini &bull; FastAPI &bull; LangGraph</span>
                      <span className="highlight-arrow">&rarr;</span>
                    </div>
                  </div>
                </div>

                {/* Quick Navigation Prompts */}
                <div className="home-explore-strip font-mono">
                  <span className="explore-text">QUICK EXPLORE:</span>
                  <div className="explore-chips">
                    <button onClick={() => handleTabChange('about')} className="explore-chip">
                      <span>// Read Engineering Philosophy</span>
                    </button>
                    <button onClick={() => handleTabChange('work')} className="explore-chip">
                      <span>// View All 5 Case Studies</span>
                    </button>
                    <button onClick={() => handleTabChange('resume')} className="explore-chip">
                      <span>// Download Official Resume</span>
                    </button>
                    <button onClick={() => handleTabChange('links')} className="explore-chip">
                      <span>// Connect &amp; Channels</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="tab-pane active-pane fade-in">
              <About />
            </div>
          )}

          {activeTab === 'work' && (
            <div className="tab-pane active-pane fade-in">
              <Work />
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="tab-pane active-pane fade-in">
              <Resume />
            </div>
          )}

          {activeTab === 'links' && (
            <div className="tab-pane active-pane fade-in">
              <Links />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-inner font-mono">
          <div className="footer-left">
            <span>Vishal Kumar Bhagat</span>
            <span className="footer-sep">&bull;</span>
            <span className="accent-rose">Full Stack AI Engineer</span>
          </div>
          <div className="footer-right">
            <span>&copy; 2026 &bull; Built with React &amp; Vite</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
