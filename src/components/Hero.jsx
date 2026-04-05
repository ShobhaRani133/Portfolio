import { useEffect, useRef } from 'react';
import './Hero.css';

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 5 + 5,
}));

export default function Hero() {
  const canvasRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero section grid-bg">
      {/* Animated particles */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="hero__particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__greeting animate-on-scroll visible">
            <span className="badge badge-cyan">
              <span>◈</span> Available for opportunities
            </span>
          </div>

          <h1 className="hero__name animate-on-scroll visible animate-delay-1">
            Hi, I'm <span className="hero__name-gradient">Shobha Rani</span>
          </h1>

          <div className="hero__role-wrapper animate-on-scroll visible animate-delay-2">
            <span className="hero__role-prefix">I'm a </span>
            <span className="hero__typewriter" id="typewriter">QA Automation Engineer</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero__description animate-on-scroll visible animate-delay-3">
            Crafting robust automation frameworks and ensuring software quality through 
            intelligent test strategies. Passionate about Selenium, Playwright, 
            and building CI/CD pipelines that ship with confidence.
          </p>

          <div className="hero__stats animate-on-scroll visible animate-delay-4">
            <div className="hero__stat">
              <span className="hero__stat-number">1.5+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">75%</span>
              <span className="hero__stat-label">Coverage Achieved</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">6+</span>
              <span className="hero__stat-label">Tools Mastered</span>
            </div>
          </div>

          <div className="hero__actions animate-on-scroll visible animate-delay-5">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero__visual animate-on-scroll visible animate-delay-3">
          <div className="hero__avatar-ring">
            <div className="hero__avatar-orbit" aria-hidden="true">
              <div className="hero__orbit-icon hero__orbit-icon--1">⚡</div>
              <div className="hero__orbit-icon hero__orbit-icon--2">🧪</div>
              <div className="hero__orbit-icon hero__orbit-icon--3">🔧</div>
              <div className="hero__orbit-icon hero__orbit-icon--4">🚀</div>
            </div>
            <div className="hero__avatar-container">
              <div className="hero__avatar">
                <div className="hero__avatar-initials">SR</div>
                <div className="hero__avatar-glow" />
              </div>
            </div>
          </div>

          <div className="hero__code-card">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">quality_engineer.ts</span>
            </div>
            <pre className="hero__code-body">
{`const shobhaRani = {
  role: "QA Automation Engineer",
  exp: "1.5+ years",
  skills: [
    "Selenium Java",
    "Playwright TS",
    "WebdriverIO",
    "REST API Testing"
  ],
  passion: "Ship with confidence 🚀"
};`}
            </pre>
          </div>
        </div>
      </div>

      <button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-text">Scroll Down</span>
      </button>
    </section>
  );
}
