import { FC, useMemo } from 'react';
import { Project } from '../types';
import { SECTIONS } from '../constants/sections';
import { getProjectsRepository } from '../repositories';
import './Projects.css';

/**
 * Projects component
 * Following Single Responsibility Principle - only responsible for rendering projects section
 * Following Dependency Inversion Principle - depends on ProjectsRepository abstraction, not concrete data source
 */
const Projects: FC = () => {
  // Get projects repository instance (dependency injection)
  const projectsRepository = useMemo(() => getProjectsRepository(), []);
  
  // Get projects from repository
  const projects: Project[] = useMemo(() => {
    const result = projectsRepository.getAll();
    // Handle both sync and async returns
    return result instanceof Promise ? [] : result;
  }, [projectsRepository]);

  return (
    <section id={SECTIONS.PROJECTS} className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projetos</span>
          <h2 className="section-title">Meus trabalhos recentes</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <div className="project-placeholder">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                      <rect width="100" height="100" rx="10" fill="url(#projectGradient)" />
                      <defs>
                        <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver projeto"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver código no GitHub"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

