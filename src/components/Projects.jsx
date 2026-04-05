import './Projects.css';

const projects = [
  {
    id: 'proj-1',
    title: 'WebdriverIO Cucumber Regression Suite',
    subtitle: 'Enterprise E-Commerce Platform',
    coverage: 70,
    coverageLabel: 'Regression Coverage',
    badgeColor: 'cyan',
    tags: ['WebdriverIO', 'Cucumber', 'BDD', 'Gherkin', 'GitHub Actions'],
    description:
      'Architected and implemented a comprehensive BDD regression automation suite achieving 70% test coverage for an enterprise e-commerce platform. Designed reusable step definitions, page object models, and fixture data management.',
    highlights: [
      'Built 200+ Gherkin feature files covering critical user journeys',
      'Implemented Page Object Model for maintainability',
      'Integrated with GitHub Actions for automated PR validation',
      'Reduced regression time from 8 hours to 45 minutes',
    ],
    icon: '🥒',
    color: 'cyan',
  },
  {
    id: 'proj-2',
    title: 'Playwright Automation — Talent Recruitment Platform',
    subtitle: 'HR SaaS Application',
    coverage: 75,
    coverageLabel: 'End-to-End Coverage',
    badgeColor: 'purple',
    tags: ['Playwright', 'TypeScript', 'API Testing', 'Cross-Browser', 'CI/CD'],
    description:
      'Delivered 75% end-to-end automation coverage for a talent recruitment SaaS platform, including role-based workflow validation, multi-browser testing, and Stripe payment integration testing.',
    highlights: [
      'Validated recruiter/candidate/admin role-based workflows',
      'Cross-browser testing across Chrome, Firefox, and Safari',
      'REST API validation for job posting and application endpoints',
      'Stripe authentication & payment webhook testing',
    ],
    icon: '🎭',
    color: 'purple',
  },
  {
    id: 'proj-3',
    title: 'GenAI Chatbot Test Automation',
    subtitle: 'AI-Powered Assistant Validation',
    coverage: 65,
    coverageLabel: 'Scenario Coverage',
    badgeColor: 'green',
    tags: ['Selenium Java', 'GenAI', 'NLP Testing', 'API Validation', 'Python'],
    description:
      'Developed a specialized test framework for validating GenAI chatbot responses, covering edge cases, intent classification accuracy, context retention, and safety guardrails.',
    highlights: [
      'Automated 150+ conversational test scenarios',
      'Validated NLP intent accuracy and fallback handling',
      'Tested multi-turn context retention and session management',
      'API-level validation of LLM response consistency',
    ],
    icon: '🤖',
    color: 'green',
  },
  {
    id: 'proj-4',
    title: 'API Testing Framework — REST Assured',
    subtitle: 'Microservices Validation Suite',
    coverage: 80,
    coverageLabel: 'API Coverage',
    badgeColor: 'amber',
    tags: ['Java', 'REST Assured', 'Postman', 'JSON Schema', 'OAuth'],
    description:
      'Created a data-driven API testing framework for microservices architecture, covering authentication flows, CRUD operations, error handling, and schema validation.',
    highlights: [
      'JSON Schema validation for all API contracts',
      'OAuth 2.0 and JWT authentication testing',
      'Data-driven testing with parameterized test cases',
      'Parallel execution for faster pipeline feedback',
    ],
    icon: '🔌',
    color: 'amber',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Featured <span>Projects</span>
        </h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              id={project.id}
              className={`project-card card animate-on-scroll animate-delay-${(i % 3) + 1}`}
            >
              <div className={`project-card__header project-card__header--${project.color}`}>
                <div className="project-card__icon-wrap">
                  <span className="project-card__icon">{project.icon}</span>
                </div>
                <div className="project-card__coverage">
                  <div className="project-card__coverage-ring" style={{ '--pct': project.coverage }}>
                    <svg viewBox="0 0 100 100" aria-hidden="true">
                      <circle cx="50" cy="50" r="40" fill="none" strokeWidth="8" stroke="rgba(255,255,255,0.1)" />
                      <circle
                        cx="50" cy="50" r="40" fill="none" strokeWidth="8"
                        stroke="currentColor"
                        strokeDasharray={`${project.coverage * 2.51} 251`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="project-card__coverage-label">
                      <span className="project-card__coverage-num">{project.coverage}%</span>
                      <span className="project-card__coverage-sub">Coverage</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className={`badge badge-${project.badgeColor}`}>{project.subtitle}</span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <ul className="project-card__highlights">
                  {project.highlights.map((h, hi) => (
                    <li key={hi} className="project-card__highlight">
                      <span className="project-card__check" aria-hidden="true">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
