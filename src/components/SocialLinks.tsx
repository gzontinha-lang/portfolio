/**
 * SocialLinks component
 * Displays social media links with icons
 * Following Single Responsibility Principle - only responsible for rendering social links
 */

import { FC } from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons/SocialIcons';
import { PROFILE } from '../constants/profile';
import './SocialLinks.css';

interface SocialLink {
  href: string;
  label: string;
  icon: JSX.Element;
  isExternal?: boolean;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ links, className = '' }) => {
  const defaultLinks: SocialLink[] = [
    {
      href: PROFILE.socialLinks.github,
      label: 'GitHub',
      icon: <GitHubIcon />,
      isExternal: true,
    },
    {
      href: PROFILE.socialLinks.linkedin,
      label: 'LinkedIn',
      icon: <LinkedInIcon />,
      isExternal: true,
    },
    {
      href: `mailto:${PROFILE.socialLinks.email}`,
      label: 'Email',
      icon: <EmailIcon />,
      isExternal: false,
    },
  ];

  const socialLinks = links || defaultLinks;

  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.isExternal ? '_blank' : undefined}
          rel={link.isExternal ? 'noopener noreferrer' : undefined}
          className="social-link"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

