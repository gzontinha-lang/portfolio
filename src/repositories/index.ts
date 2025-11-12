/**
 * Repositories Factory
 * Creates and provides repository instances following Dependency Injection pattern
 */

import { ProjectsRepository } from './interfaces/ProjectsRepository.interface';
import { SkillsRepository } from './interfaces/SkillsRepository.interface';
import { LocalProjectsRepository } from './implementations/ProjectsRepository.implementation';
import { LocalSkillsRepository } from './implementations/SkillsRepository.implementation';

// Repository instances (singleton pattern)
let projectsRepositoryInstance: ProjectsRepository | null = null;
let skillsRepositoryInstance: SkillsRepository | null = null;

/**
 * Get Projects Repository instance
 */
export const getProjectsRepository = (): ProjectsRepository => {
  if (!projectsRepositoryInstance) {
    projectsRepositoryInstance = new LocalProjectsRepository();
  }
  return projectsRepositoryInstance;
};

/**
 * Get Skills Repository instance
 */
export const getSkillsRepository = (): SkillsRepository => {
  if (!skillsRepositoryInstance) {
    skillsRepositoryInstance = new LocalSkillsRepository();
  }
  return skillsRepositoryInstance;
};

