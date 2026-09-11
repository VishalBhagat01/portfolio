import React from 'react';
import { IconExternalLink, IconGithub } from './Icons';

export default function ProjectCard({
  number,
  title,
  subtitle,
  category,
  description,
  architectureFlow,
  challenge,
  solution,
  techStack,
  demoUrl,
  githubUrl,
}) {
  return (
    <article className="project-case-card">
      {/* Top Meta Line */}
      <div className="case-header">
        <div className="case-number-group font-mono">
          <span className="case-number">{number}</span>
          <span className="case-divider">/</span>
          <span className="case-category">{category}</span>
        </div>

        <div className="case-actions">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-action-btn font-mono"
              aria-label={`View ${title} source code on GitHub`}
            >
              <IconGithub size={14} />
              <span>GitHub</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-action-btn live-btn font-mono"
              aria-label={`View ${title} live application`}
            >
              <IconExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Title & One-line description */}
      <h3 className="case-title">{title}</h3>
      <p className="case-subtitle font-mono">{subtitle}</p>
      <p className="case-description">{description}</p>

      {/* Tech Stack Badges */}
      <div className="case-tech-container font-mono">
        <span className="tech-label">STACK:</span>
        <div className="tech-tags-list">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture Flow Visual */}
      {architectureFlow && architectureFlow.length > 0 && (
        <div className="architecture-box">
          <div className="arch-header font-mono">
            <span className="arch-dot"></span>
            <span>SYSTEM PIPELINE ARCHITECTURE</span>
          </div>
          <div className="arch-flow-row font-mono">
            {architectureFlow.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="arch-node">
                  <span className="node-text">{step}</span>
                </div>
                {idx < architectureFlow.length - 1 && (
                  <div className="arch-arrow" aria-hidden="true">
                    &rarr;
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Engineering Challenge & Solution */}
      {(challenge || solution) && (
        <div className="case-engineering-deepdive">
          {challenge && (
            <div className="deepdive-block">
              <span className="deepdive-label font-mono">ENGINEERING CHALLENGE</span>
              <p className="deepdive-text">{challenge}</p>
            </div>
          )}
          {solution && (
            <div className="deepdive-block">
              <span className="deepdive-label font-mono">ARCHITECTURAL SOLUTION</span>
              <p className="deepdive-text">{solution}</p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
