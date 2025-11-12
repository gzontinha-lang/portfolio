import { FC } from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import { SECTIONS } from '../constants/sections';
import { PROFILE } from '../constants/profile';
import SocialLinks from './SocialLinks';
import './Hero.css';

/**
 * Hero component - Main landing section
 * Following Single Responsibility Principle - only responsible for rendering the hero section
 * Following Dependency Inversion - depends on abstractions (utils, constants, components)
 */
const Hero: FC = () => {
  const handleProjectsClick = (): void => {
    scrollToSection(SECTIONS.PROJECTS);
  };

  const handleContactClick = (): void => {
    scrollToSection(SECTIONS.CONTACT);
  };

  return (
    <section id={SECTIONS.HOME} className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{PROFILE.greeting}</p>
            <h1 className="hero-title">
              <span className="gradient-text">{PROFILE.name}</span>
              <br />
              {PROFILE.title}
            </h1>
            <p className="hero-description">
              {PROFILE.description[0]}
              <br /><br />
              {PROFILE.description[1]}
            </p>
            
            <div className="hero-buttons">
              <button
                onClick={handleProjectsClick}
                className="btn btn-primary"
                type="button"
              >
                Ver Projetos
              </button>
              <button
                onClick={handleContactClick}
                className="btn btn-secondary"
                type="button"
              >
                Entre em Contato
              </button>
            </div>

            <div className="hero-social">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

