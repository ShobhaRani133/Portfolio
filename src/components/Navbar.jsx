import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'tools', label: 'Tools' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__container">
        <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="Scroll to top">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-text">SR</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </button>

        <ul className="navbar__links" role="list">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map((link, i) => (
          <button
            key={link.id}
            className={`navbar__mobile-link ${active === link.id ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => scrollTo(link.id)}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
