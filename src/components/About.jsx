import './About.css';

const highlights = [
  {
    icon: '🧪',
    label: 'Test Automation',
    description: 'Building reliable end-to-end automation frameworks from scratch',
  },
  {
    icon: '🔍',
    label: 'Quality Assurance',
    description: 'Ensuring product quality through systematic testing strategies',
  },
  {
    icon: '⚡',
    label: 'CI/CD Integration',
    description: 'Automating test pipelines with GitHub Actions for continuous quality',
  },
  {
    icon: '🤖',
    label: 'GenAI Testing',
    description: 'Validating AI-powered chatbot responses and interaction flows',
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          About <span>Me</span>
        </h2>

        <div className="about__content">
          <div className="about__text animate-on-scroll">
            <div className="about__intro-badge">
              <span className="badge badge-cyan">
                <span>◈</span> My Story
              </span>
            </div>

            <p className="about__paragraph">
              I'm a dedicated <strong>QA Automation Engineer & SDET</strong> with{' '}
              <span className="about__highlight">1.5+ years of experience</span> in building
              robust automation frameworks and ensuring software quality across complex enterprise applications.
            </p>

            <p className="about__paragraph">
              My journey in quality engineering has taken me through{' '}
              <strong>Agile sprint cycles</strong>, where I collaborate closely with developers
              to catch defects early and deliver testable, reliable software. I specialize in
              creating test strategies that cover <strong>API validation</strong>,{' '}
              <strong>cross-browser compatibility</strong>, and{' '}
              <strong>regression automation</strong>.
            </p>

            <p className="about__paragraph">
              One of my proudest achievements was architecting{' '}
              <span className="about__highlight">70% WebdriverIO Cucumber regression coverage</span>
              {' '}and achieving{' '}
              <span className="about__highlight">75% Playwright automation</span>{' '}
              for a talent recruitment platform — ensuring that every release ships with confidence.
            </p>

            <div className="about__tags">
              {['Agile/Scrum', 'BDD', 'TDD', 'Risk-Based Testing', 'Shift-Left Testing', 'GenAI Testing'].map(tag => (
                <span key={tag} className="badge badge-purple">{tag}</span>
              ))}
            </div>
          </div>

          <div className="about__highlights animate-on-scroll animate-delay-2">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="about__highlight-card card animate-on-scroll"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h3 className="about__highlight-title">{item.label}</h3>
                  <p className="about__highlight-desc">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="about__xp-card card">
              <div className="about__xp-top">
                <div className="about__xp-dot" />
                <span className="about__xp-label">Currently</span>
              </div>
              <p className="about__xp-role">QA Automation Engineer</p>
              <p className="about__xp-company">Enterprise Software Testing</p>
              <div className="about__xp-timeline">
                <div className="about__xp-fill" />
              </div>
              <div className="about__xp-meta">
                <span>Started Jan 2023</span>
                <span className="about__xp-duration">1.5+ years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
