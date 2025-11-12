/**
 * Services Factory
 * Creates and provides service instances following Dependency Injection pattern
 */

import { EmailService } from './interfaces/EmailService.interface';
import { ScrollService } from './interfaces/ScrollService.interface';
import { EmailJSService } from './implementations/EmailService.implementation';
import { BrowserScrollService } from './implementations/ScrollService.implementation';
import { ViteConfigService } from './implementations/ConfigService.implementation';
import { BrowserDOMService } from './implementations/DOMService.implementation';

// Service instances (singleton pattern)
let emailServiceInstance: EmailService | null = null;
let scrollServiceInstance: ScrollService | null = null;

/**
 * Get Email Service instance
 */
export const getEmailService = (): EmailService => {
  if (!emailServiceInstance) {
    const configService = new ViteConfigService();
    emailServiceInstance = new EmailJSService(configService);
  }
  return emailServiceInstance;
};

/**
 * Get Scroll Service instance
 */
export const getScrollService = (): ScrollService => {
  if (!scrollServiceInstance) {
    const domService = new BrowserDOMService();
    scrollServiceInstance = new BrowserScrollService(domService);
  }
  return scrollServiceInstance;
};

