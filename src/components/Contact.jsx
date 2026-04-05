import { useState } from 'react';
import './Contact.css';

const contactLinks = [
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    handle: 'shobharani-chinnakotla',
    url: 'https://www.linkedin.com/in/shobharani-chinnakotla',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: 'linkedin',
    description: 'Connect with me professionally and view my full work history.',
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    handle: 'ShobhaRani133',
    url: 'https://github.com/ShobhaRani133',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: 'github',
    description: 'View my automation frameworks, scripts, and open-source contributions.',
  },
  {
    id: 'contact-email',
    label: 'Email',
    handle: 'shobharanickk@gmail.com',
    url: 'mailto:shobharanickk@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: 'email',
    description: "Prefer email? I'd love to hear from you directly.",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(email);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section id="contact" className="contact section grid-bg">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__content">
          <div className="contact__intro animate-on-scroll">
            <div className="contact__intro-badge">
              <span className="badge badge-cyan">
                <span>◈</span> Open to Work
              </span>
            </div>
            <h3 className="contact__intro-title">
              Let's Build Something{' '}
              <span className="contact__intro-highlight">Together</span>
            </h3>
            <p className="contact__intro-text">
              I'm currently looking for new opportunities in QA Automation and SDET roles.
              Whether you have a question, a project in mind, or just want to connect —
              my inbox is always open and I'll get back to you!
            </p>

            <div className="contact__availability">
              <div className="contact__availability-indicator" aria-hidden="true" />
              <span>Available for full-time roles & freelance projects</span>
            </div>

            <div className="contact__tags">
              {['QA Automation', 'SDET', 'Selenium Java', 'Playwright', 'Remote-Friendly'].map(tag => (
                <span key={tag} className="badge badge-purple">{tag}</span>
              ))}
            </div>
          </div>

          <div className="contact__links animate-on-scroll animate-delay-2">
            {contactLinks.map((link, i) => (
              <div
                key={link.id}
                className={`contact-card card animate-on-scroll animate-delay-${i + 1}`}
              >
                <div className={`contact-card__icon-wrap contact-card__icon-wrap--${link.color}`}>
                  {link.icon}
                </div>
                <div className="contact-card__content">
                  <h4 className="contact-card__platform">{link.label}</h4>
                  <p className="contact-card__handle">{link.handle}</p>
                  <p className="contact-card__desc">{link.description}</p>
                </div>
                <div className="contact-card__actions">
                  <a
                    href={link.url}
                    target={link.color !== 'email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="btn btn-outline contact-card__btn"
                    id={link.id}
                    aria-label={`Visit ${link.label} profile`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Visit
                  </a>
                  {link.color === 'email' && (
                    <button
                      className="btn btn-primary contact-card__btn"
                      onClick={() => copyEmail(link.handle)}
                      aria-label="Copy email address"
                    >
                      {copied === link.handle ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
