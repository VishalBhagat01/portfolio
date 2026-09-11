import React from 'react';

export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: 'AI / ML & AGENTS',
      description: 'Orchestration, retrieval, and inference frameworks',
      skills: [
        'LLMs',
        'RAG',
        'LangGraph',
        'PyTorch',
        'HuggingFace',
        'Machine Learning',
        'Embeddings',
        'Prompt Engineering',
        'Agentic AI',
      ],
    },
    {
      title: 'BACKEND & SYSTEMS',
      description: 'Asynchronous APIs, persistence, and state management',
      skills: [
        'FastAPI',
        'REST APIs',
        'PostgreSQL',
        'SQLAlchemy',
        'MongoDB',
        'Docker',
        'Async Python',
        'Caching',
        'LRU Cache',
        'TTL',
        'Session Management',
      ],
    },
    {
      title: 'AI INFRASTRUCTURE',
      description: 'Accelerated compute and model inference APIs',
      skills: ['Groq LPU', 'Ollama', 'Model APIs', 'Vector Retrieval', 'GPU / CUDA'],
    },
    {
      title: 'LANGUAGES',
      description: 'Core programming and scripting languages',
      skills: ['Python', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'FRONTEND',
      description: 'Modern user interfaces and developer tooling views',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive UI', 'Vite'],
    },
  ];

  return (
    <div className="skills-matrix-card">
      <div className="card-header-bar">
        <span className="card-index-pill font-mono">03 // STACK MATRIX</span>
        <span className="card-sub-pill font-mono">VERIFIED SKILLS</span>
      </div>

      <div className="skills-categories-list">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-cat-group">
            <div className="cat-title-row">
              <span className="cat-title-text font-mono">{category.title}</span>
              <span className="cat-count font-mono">{category.skills.length}</span>
            </div>
            <p className="cat-desc-text">{category.description}</p>
            <div className="cat-skills-grid font-mono">
              {category.skills.map((skill) => (
                <span key={skill} className="matrix-pill">
                  <span className="pill-dot"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
