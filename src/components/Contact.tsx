import { FC, useState, useMemo } from 'react';
import { SECTIONS } from '../constants/sections';
import { getEmailService } from '../services';
import { PROFILE } from '../constants/profile';
import './Contact.css';

/**
 * Contact component
 * Following Single Responsibility Principle - only responsible for rendering contact section and handling form submission
 * Following Dependency Inversion Principle - depends on EmailService abstraction, not concrete implementation
 */
const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get email service instance (dependency injection)
  const emailService = useMemo(() => getEmailService(), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailService.sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Resetar status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error: unknown) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
      
      // Resetar status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={SECTIONS.CONTACT} className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contato</span>
          <h2 className="section-title">Vamos trabalhar juntos?</h2>
          <p className="section-subtitle">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${PROFILE.socialLinks.email}`}>{PROFILE.socialLinks.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3>Localização</h3>
                <p>São Paulo, Brasil</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3>LinkedIn</h3>
                <a href={PROFILE.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/guilherme-zonta-527585395
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Sua mensagem..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {submitStatus === 'success' && (
              <div className="form-message form-message-success">
                ✓ Mensagem enviada com sucesso! Entrarei em contato em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message form-message-error">
                ✗ Erro ao enviar mensagem. Verifique se o EmailJS está configurado corretamente no arquivo .env. 
                Por enquanto, envie um email diretamente para{' '}
                <a href={`mailto:${PROFILE.socialLinks.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                  {PROFILE.socialLinks.email}
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

