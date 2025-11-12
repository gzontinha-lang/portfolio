/**
 * DOM Service Interface
 * Following Dependency Inversion Principle - utilities depend on this abstraction, not concrete DOM APIs
 */

export interface DOMService {
  getElementById(id: string): HTMLElement | null;
}

