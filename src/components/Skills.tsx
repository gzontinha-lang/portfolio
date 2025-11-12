import { FC, useMemo } from 'react';
import { SECTIONS } from '../constants/sections';
import { getLevelWidth, getLevelColor } from '../utils/skillUtils';
import { Skill } from '../types';
import { getSkillsRepository } from '../repositories';
import './Skills.css';

/**
 * Skills component
 * Following Single Responsibility Principle - only responsible for rendering skills section
 * Following Dependency Inversion Principle - depends on SkillsRepository abstraction, not concrete data source
 */
const Skills: FC = () => {
  // Get skills repository instance (dependency injection)
  const skillsRepository = useMemo(() => getSkillsRepository(), []);
  
  // Get skills from repository
  const skills: Skill[] = useMemo(() => {
    const result = skillsRepository.getAll();
    // Handle both sync and async returns
    return result instanceof Promise ? [] : result;
  }, [skillsRepository]);

  return (
    <section id={SECTIONS.SKILLS} className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Habilidades</span>
          <h2 className="section-title">Tecnologias que domino</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: getLevelWidth(skill.level),
                    background: getLevelColor(skill.level),
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

