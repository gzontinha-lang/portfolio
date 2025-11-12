/**
 * Projects Repository Interface
 * Following Dependency Inversion Principle - components depend on this abstraction, not concrete data sources
 */

import { Project } from '../../types';

export interface ProjectsRepository {
  getAll(): Promise<Project[]> | Project[];
}

