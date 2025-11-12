/**
 * Skills Repository Implementation
 * Concrete implementation using local data
 * Can be easily replaced with API calls in the future
 */

import { SkillsRepository } from '../interfaces/SkillsRepository.interface';
import { Skill } from '../../types';

export class LocalSkillsRepository implements SkillsRepository {
  getAll(): Skill[] {
    return [
      { name: 'React', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Python', level: 'intermediate' },
      { name: 'JavaScript', level: 'advanced' },
      { name: 'CSS/SCSS', level: 'advanced' },
      { name: 'Git', level: 'intermediate' },
      { name: 'MongoDB', level: 'beginner' },
      { name: 'PostgreSQL', level: 'intermediate' },
    ];
  }
}

