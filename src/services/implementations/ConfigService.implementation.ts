/**
 * Configuration Service Implementation
 * Concrete implementation using environment variables
 */

import { ConfigService } from '../interfaces/ConfigService.interface';

export class ViteConfigService implements ConfigService {
  getEmailServiceId(): string | undefined {
    return import.meta.env.VITE_EMAILJS_SERVICE_ID;
  }

  getEmailTemplateId(): string | undefined {
    return import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  }

  getEmailPublicKey(): string | undefined {
    return import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  }

  getEmailRecipient(): string {
    return import.meta.env.VITE_EMAILJS_TO_EMAIL ?? 'gzontinha@gmail.com';
  }
}

