/**
 * Utility functions for smooth scrolling
 * Now uses ScrollService abstraction following Dependency Inversion Principle
 */

import { getScrollService } from '../services';

/**
 * Scrolls smoothly to a section by its ID
 * @param sectionId - The ID of the section to scroll to
 * @returns void
 */
export const scrollToSection = (sectionId: string): void => {
  const scrollService = getScrollService();
  scrollService.scrollToSection(sectionId);
};
