/**
 * Configuration Service Interface
 * Following Dependency Inversion Principle - components depend on this abstraction, not concrete env implementations
 */

export interface ConfigService {
  getEmailServiceId(): string | undefined;
  getEmailTemplateId(): string | undefined;
  getEmailPublicKey(): string | undefined;
}

