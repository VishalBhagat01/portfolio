import React, { useState, useEffect } from 'react';
import avatarImg from './assets/avatar.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">

          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>

            <li><a href="#contact" className="btn-outline">Contact</a></li>
          </ul>
          <div className="menu-btn" onClick={toggleMenu}>
            <i className="ph ph-list"></i>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <i className="ph ph-x close-btn" onClick={closeMenu}></i>
        <ul className="mobile-nav-links">
          <li><a href="#about" className="mobile-link" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className="mobile-link" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className="mobile-link" onClick={closeMenu}>Projects</a></li>

          <li><a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="hero-inner fade-in-up">
          <div className="hero-text">

            <h1 className="hero-name">
              Hi, I'm<br />
              <span className="name-highlight">Vishal Bhagat</span>
            </h1>
            <p className="hero-role">Full-Stack Developer & AI Enthusiast</p>
            <p className="hero-desc">
              I craft intelligent applications powered by AI and modern web technologies. From autonomous trading agents to developer tools — I build things that matter.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <i className="ph ph-arrow-down"></i> View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="ph ph-envelope-simple"></i> Let's Talk
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-ring"></div>
              <img src={avatarImg} alt="Vishal Bhagat" className="avatar-img" />
              <div className="floating-card card-1">
                <i className="ph ph-brain"></i> AI / ML
              </div>
              <div className="floating-card card-2">
                <i className="ph ph-code"></i> Full-Stack
              </div>
              <div className="floating-card card-3">
                <i className="ph ph-rocket"></i> Builder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding reveal">
        <div className="container">
          <span className="section-label"><i className="ph ph-user"></i> About Me</span>
          <h2 className="section-title">Turning ideas into intelligent products</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a B.Tech Computer Science student passionate about building AI-powered applications. I specialize in full-stack development with React, Python, and FastAPI, and love integrating LLMs and AI agents into real-world products.
              </p>
              <p>
                From building autonomous stock trading agents to AI-powered API generators, I focus on creating tools that solve real problems. I'm always exploring the intersection of AI, web development, and developer experience.
              </p>
            </div>
            <div className="about-visual">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="window-body">
                  <code>
                    <span className="keyword">const</span> <span className="variable">vishal</span> = &#123;<br />
                    &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Vishal Bhagat'</span>,<br />
                    &nbsp;&nbsp;<span className="property">role</span>: <span className="string">'Full-Stack Dev'</span>,<br />
                    &nbsp;&nbsp;<span className="property">stack</span>: [<span className="string">'React'</span>, <span className="string">'Python'</span>, <span className="string">'AI'</span>],<br />
                    &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">'Building the future'</span><br />
                    &#125;;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding reveal">
        <div className="container">
          <span className="section-label"><i className="ph ph-lightning"></i> Skills</span>
          <h2 className="section-title">My technical toolkit</h2>
          <p className="section-subtitle" style={{ marginBottom: '48px' }}>Technologies and tools I use to bring ideas to life.</p>
          <div className="skills-grid">
            {[
              { icon: 'ph-file-py', name: 'Python' },
              { icon: 'ph-file-js', name: 'JavaScript' },
              { icon: 'ph-atom', name: 'React' },
              { icon: 'ph-lightning', name: 'Vite' },
              { icon: 'ph-brain', name: 'LangGraph' },
              { icon: 'ph-robot', name: 'AI Agents' },
              { icon: 'ph-database', name: 'MongoDB' },
              { icon: 'ph-gear-six', name: 'FastAPI' },
              { icon: 'ph-git-branch', name: 'Git' },
              { icon: 'ph-cloud-arrow-up', name: 'Docker' },
              { icon: 'ph-chart-line-up', name: 'ML/Sklearn' },
              { icon: 'ph-file-html', name: 'HTML/CSS' },
            ].map((skill, i) => (
              <div className="skill-card" key={i}>
                <i className={`ph ${skill.icon}`}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding reveal">
        <div className="container">
          <span className="section-label"><i className="ph ph-folder-notch-open"></i> Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle" style={{ marginBottom: '48px' }}>A selection of my recent work spanning AI, full-stack, and developer tools.</p>
          <div className="projects-grid">

            {/* EiziAPI */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon"><i className="ph ph-terminal-window"></i></div>
                <div className="project-links">
                  <a href="https://github.com/VishalBhagat01/EiziAPI" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="ph ph-github-logo"></i></a>
                  <a href="#" aria-label="Live Demo"><i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
              <span className="project-badge">Developer Tool</span>
              <h3 className="project-title">EiziAPI</h3>
              <p className="project-description">
                AI-powered API endpoint generator that automatically creates REST API code with JS/Python implementations. Streamlines backend development with intelligent code generation.
              </p>
              <ul className="project-tech-list">
                <li>React</li>
                <li>Vite</li>
                <li>Python</li>
                <li>FastAPI</li>
                <li>LangGraph</li>
                <li>Groq</li>
                <li>Gemini</li>
              </ul>
            </div>

            {/* Quant Pilot */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon"><i className="ph ph-chart-line-up"></i></div>
                <div className="project-links">
                  <a href="https://github.com/VishalBhagat01/QuantPilot" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="ph ph-github-logo"></i></a>
                  <a href="https://quant-pilot-delta.vercel.app/" target="_blank" rel="noreferrer" aria-label="Live Demo"><i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
              <span className="project-badge">AI Agent</span>
              <h3 className="project-title">Quant Pilot</h3>
              <p className="project-description">
                Autonomous AI trading agent that acts as a stock broker — analyzing markets, executing trades, and providing real-time stock intelligence on demand.
              </p>
              <ul className="project-tech-list">
                <li>React</li>
                <li>FastAPI</li>
                <li>LangGraph</li>
                <li>Groq</li>
                <li>HuggingFace</li>
                <li>Alpaca</li>
              </ul>
            </div>

            {/* SmoURL */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon"><i className="ph ph-link-simple"></i></div>
                <div className="project-links">
                  <a href="https://github.com/VishalBhagat01/Smourl" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="ph ph-github-logo"></i></a>
                  <a href="#" aria-label="Live Demo"><i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
              <span className="project-badge">Full-Stack</span>
              <h3 className="project-title">SmoURL</h3>
              <p className="project-description">
                A sleek MERN-stack URL shortener with analytics tracking, custom short codes, and a clean dashboard for managing all your shortened links.
              </p>
              <ul className="project-tech-list">
                <li>MongoDB</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </div>

            {/* Movie Recommender */}
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon"><i className="ph ph-film-slate"></i></div>
                <div className="project-links">
                  <a href="https://github.com/VishalBhagat01/Movie" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="ph ph-github-logo"></i></a>
                  <a href="https://github.com/VishalBhagat01/Movie" target="_blank" rel="noreferrer" aria-label="Live Demo"><i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
              <span className="project-badge">Machine Learning</span>
              <h3 className="project-title">Movie Recommender</h3>
              <p className="project-description">
                ML-powered movie recommendation engine trained on the IMDB dataset using Random Forest classifiers, containerized with Docker for seamless deployment.
              </p>
              <ul className="project-tech-list">
                <li>Python</li>
                <li>Scikit-learn</li>
                <li>Random Forest</li>
                <li>Docker</li>
                <li>HuggingFace</li>
              </ul>
            </div>

          </div>
        </div>
      </section>



      {/* Contact */}
      <section id="contact" className="section-padding contact-section reveal">
        <div className="container">
          <span className="section-label"><i className="ph ph-envelope-simple"></i> Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            I'm always open to new opportunities, collaborations, and interesting conversations. Don't hesitate to reach out!
          </p>
          <div className="contact-card">
            <a href="mailto: vishalbhagattt01@gmail.com" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <i className="ph ph-envelope-simple"></i> Say Hello
            </a>
            <div className="social-links">
              <a href="mailto: vishalbhagattt01@gmail.com" aria-label="Email" className="social-icon"><i className="ph ph-envelope-simple"></i></a>
              <a href="#" aria-label="LinkedIn" className="social-icon"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://github.com/vishalbhagat01" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon"><i className="ph ph-github-logo"></i></a>
              <a href="#" aria-label="Twitter" className="social-icon"><i className="ph ph-twitter-logo"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>Designed & Built by <strong>Vishal Bhagat</strong> &copy; 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
