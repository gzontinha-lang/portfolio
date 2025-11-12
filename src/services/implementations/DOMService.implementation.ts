/**
 * DOM Service Implementation
 * Concrete implementation of DOMService interface
 */

import { DOMService } from '../interfaces/DOMService.interface';

export class BrowserDOMService implements DOMService {
  getElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
  }
}

