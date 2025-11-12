import { FC } from 'react';
import { SECTIONS } from '../constants/sections';
import './About.css';

/**
 * About component
 * Following Single Responsibility Principle - only responsible for rendering about section
 */
const About: FC = () => {
  return (
    <section id={SECTIONS.ABOUT} className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sobre Mim</span>
          <h2 className="section-title">Conheça um pouco sobre mim</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou desenvolvedor Full Stack de Bauru (SP), com foco em TypeScript, JavaScript, Node.js, React e PostgreSQL.
            </p>
            <p>
              Tenho perfil curioso, criativo e dedicado, e aprendo novas tecnologias com facilidade.
            </p>
            <p>
              Falo inglês fluente e espanhol avançado, o que me permite colaborar com equipes diversas.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Projeto</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedicação</div>
              </div>
            </div>
          </div>

          <div className="about-tech-icons">
            <div className="tech-icons-grid">
              <div className="tech-icon-item">
                <svg viewBox="0 0 128 128" width="64" height="64">
                  <rect width="128" height="128" rx="20" fill="#3178C6"/>
                  <text x="64" y="80" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#fff" textAnchor="middle">TS</text>
                </svg>
                <span>TypeScript</span>
              </div>
              
              <div className="tech-icon-item">
                <svg viewBox="0 0 128 128" width="64" height="64">
                  <rect width="128" height="128" rx="20" fill="#F7DF1E"/>
                  <text x="64" y="80" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#000" textAnchor="middle">JS</text>
                </svg>
                <span>JavaScript</span>
              </div>
              
              <div className="tech-icon-item">
                <svg viewBox="0 0 128 128" width="64" height="64">
                  <rect width="128" height="128" rx="20" fill="#339933"/>
                  <text x="64" y="80" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#fff" textAnchor="middle">N</text>
                </svg>
                <span>Node.js</span>
              </div>
              
              <div className="tech-icon-item">
                <svg viewBox="0 0 128 128" width="64" height="64">
                  <circle cx="64" cy="64" r="48" fill="none" stroke="#61DAFB" strokeWidth="4"/>
                  <circle cx="64" cy="64" r="32" fill="none" stroke="#61DAFB" strokeWidth="4"/>
                  <circle cx="64" cy="64" r="16" fill="#61DAFB"/>
                  <path d="M64 16 Q32 32 32 64 Q32 96 64 112" fill="none" stroke="#61DAFB" strokeWidth="4"/>
                  <path d="M64 16 Q96 32 96 64 Q96 96 64 112" fill="none" stroke="#61DAFB" strokeWidth="4"/>
                </svg>
                <span>React</span>
              </div>
              
              <div className="tech-icon-item">
                <svg viewBox="0 0 128 128" width="64" height="64">
                  <rect width="128" height="128" rx="20" fill="#1572B6"/>
                  <text x="64" y="80" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" fill="#fff" textAnchor="middle">CSS</text>
                </svg>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

