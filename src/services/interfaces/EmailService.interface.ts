/**
 * Email Service Interface
 * Following Dependency Inversion Principle - components depend on this abstraction, not concrete implementations
 */

export interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
  [key: string]: string;
}

export interface EmailService {
  sendEmail(data: EmailData): Promise<void>;
}

