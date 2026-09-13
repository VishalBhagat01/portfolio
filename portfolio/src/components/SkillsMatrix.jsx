
export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: 'AI / ML & AGENTS',
      description: 'Orchestration, multi-agent workflows, and model frameworks',
      skills: [
        'LangGraph',
        'LangChain',
        'TensorFlow',
        'Scikit-learn',
        'OpenCV',
        'LLMs',
        'RAG',
        'Embeddings',
        'Agentic AI',
      ],
    },
    {
      title: 'BACKEND & DATABASES',
      description: 'Asynchronous backends, persistence, and caching',
      skills: [
        'FastAPI',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'SQLAlchemy',
        'REST APIs',
        'Caching',
      ],
    },
    {
      title: 'LANGUAGES',
      description: 'Core programming and computational languages',
      skills: ['Java', 'Python', 'JavaScript', 'C++', 'SQL'],
    },
    {
      title: 'FRONTEND',
      description: 'Modern reactive interfaces and styling systems',
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Responsive UI'],
    },
    {
      title: 'TOOLS & CLOUD',
      description: 'Deployment, containers, and developer infrastructure',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Azure', 'Groq LPU', 'Ollama'],
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
