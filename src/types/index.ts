// Type definitions

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
}

