import { useState, useEffect } from 'react';
import { scrollToSection as scrollToSectionUtil } from '../utils/scrollUtils';
import { SECTIONS } from '../constants/sections';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    scrollToSectionUtil(id);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: SECTIONS.HOME, label: 'Início' },
    { id: SECTIONS.ABOUT, label: 'Sobre' },
    { id: SECTIONS.SKILLS, label: 'Habilidades' },
    { id: SECTIONS.PROJECTS, label: 'Projetos' },
    { id: SECTIONS.CONTACT, label: 'Contato' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <span className="logo">Portfólio</span>
          </div>
          
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

