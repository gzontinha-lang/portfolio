/**
 * Scroll Service Interface
 * Following Dependency Inversion Principle - components depend on this abstraction, not concrete DOM APIs
 */

export interface ScrollService {
  scrollToSection(sectionId: string): void;
}

