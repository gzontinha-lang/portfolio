/**
 * Email Service Implementation using EmailJS
 * Concrete implementation of EmailService interface
 */

import emailjs from '@emailjs/browser';
import { EmailService, EmailData } from '../interfaces/EmailService.interface';
import { ConfigService } from '../interfaces/ConfigService.interface';

export class EmailJSService implements EmailService {
  constructor(private configService: ConfigService) {}

  async sendEmail(data: EmailData): Promise<void> {
    const serviceId = this.configService.getEmailServiceId();
    const templateId = this.configService.getEmailTemplateId();
    const publicKey = this.configService.getEmailPublicKey();
    const recipientEmail = this.configService.getEmailRecipient();

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'YOUR_SERVICE_ID' || 
        templateId === 'YOUR_TEMPLATE_ID' || 
        publicKey === 'YOUR_PUBLIC_KEY') {
      throw new Error('EmailJS não está configurado. Por favor, configure o arquivo .env com suas credenciais do EmailJS.');
    }

    const payload = {
      ...data,
      to_email: recipientEmail,
    };

    await emailjs.send(
      serviceId,
      templateId,
      payload,
      publicKey
    );
  }
}

