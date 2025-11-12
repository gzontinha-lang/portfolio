/**
 * Skills Repository Interface
 * Following Dependency Inversion Principle - components depend on this abstraction, not concrete data sources
 */

import { Skill } from '../../types';

export interface SkillsRepository {
  getAll(): Promise<Skill[]> | Skill[];
}

