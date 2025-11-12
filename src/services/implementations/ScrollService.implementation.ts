/**
 * Scroll Service Implementation
 * Concrete implementation using DOM abstraction
 */

import { ScrollService } from '../interfaces/ScrollService.interface';
import { DOMService } from '../interfaces/DOMService.interface';

export class BrowserScrollService implements ScrollService {
  constructor(private domService: DOMService) {}

  scrollToSection(sectionId: string): void {
    const element = this.domService.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

