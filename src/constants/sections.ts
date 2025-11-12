/**
 * Section IDs used throughout the application
 * Centralized to avoid magic strings and ensure consistency
 */
export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type SectionId = typeof SECTIONS[keyof typeof SECTIONS];

