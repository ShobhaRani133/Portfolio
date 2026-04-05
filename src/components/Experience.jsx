import './Experience.css';

const experiences = [
  {
    id: 'exp-1',
    role: 'QA Automation Engineer',
    company: 'Software Technology Firm',
    duration: 'Jan 2023 – Present',
    period: '1.5+ years',
    type: 'Full-time',
    color: 'cyan',
    responsibilities: [
      {
        title: 'Agile Sprint Testing',
        description:
          'Actively participated in 2-week sprint cycles — from requirement analysis and story refinement to test case creation, execution, and defect reporting using JIRA.',
      },
      {
        title: 'Role-Based Workflow Validation',
        description:
          'Designed and executed test scenarios for complex multi-role applications, validating recruiter, candidate, and admin workflows with role-based access controls.',
      },
      {
        title: 'Cross-Browser Testing',
        description:
          'Ensured functional consistency across Chrome, Firefox, Edge, and Safari using Playwright and Selenium Grid for both desktop and mobile viewports.',
      },
      {
        title: 'API Validation',
        description:
          'Conducted RESTful API testing using Postman and REST Assured, validating request/response schemas, authentication tokens, status codes, and negative scenarios.',
      },
      {
        title: 'Stripe Authentication Workflow Testing',
        description:
          'Validated end-to-end Stripe payment integration: webhook event handling, payment status transitions, refund flows, and failed payment scenarios.',
      },
      {
        title: 'CI/CD Pipeline Integration',
        description:
          'Configured GitHub Actions workflows to trigger automation suites on PR creation and merges, reducing manual testing effort by 60%.',
      },
    ],
  },
];

const achievements = [
  { icon: '🏆', value: '70%', label: 'Regression Coverage', sublabel: 'WebdriverIO Cucumber' },
  { icon: '🎯', value: '75%', label: 'E2E Coverage', sublabel: 'Playwright Recruitment Platform' },
  { icon: '⚡', value: '60%', label: 'Testing Time Saved', sublabel: 'CI/CD Automation' },
  { icon: '🐛', value: '200+', label: 'Defects Logged', sublabel: 'Across all sprints' },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section grid-bg">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Work <span>Experience</span>
        </h2>

        {/* Achievements Row */}
        <div className="experience__achievements animate-on-scroll">
          {achievements.map((ach, i) => (
            <div key={i} className={`experience__achievement animate-delay-${i + 1}`}>
              <div className="experience__achievement-icon">{ach.icon}</div>
              <div className="experience__achievement-value">{ach.value}</div>
              <div className="experience__achievement-label">{ach.label}</div>
              <div className="experience__achievement-sub">{ach.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div key={exp.id} id={exp.id} className={`exp-entry animate-on-scroll animate-delay-${i + 1}`}>
              <div className="exp-entry__marker">
                <div className={`exp-entry__dot exp-entry__dot--${exp.color}`} />
                <div className="exp-entry__line" />
              </div>

              <div className="exp-entry__content">
                <div className="exp-entry__header card">
                  <div className="exp-entry__header-left">
                    <div className="exp-entry__badges">
                      <span className={`badge badge-${exp.color}`}>{exp.type}</span>
                      <span className="badge badge-purple">{exp.period}</span>
                    </div>
                    <h3 className="exp-entry__role">{exp.role}</h3>
                    <p className="exp-entry__company">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      {exp.company}
                    </p>
                  </div>
                  <div className="exp-entry__duration">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {exp.duration}
                  </div>
                </div>

                <div className="exp-entry__responsibilities">
                  {exp.responsibilities.map((resp, ri) => (
                    <div key={ri} className={`resp-card card animate-on-scroll animate-delay-${(ri % 3) + 1}`}>
                      <div className="resp-card__bullet" aria-hidden="true">
                        <span>{String(ri + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h4 className="resp-card__title">{resp.title}</h4>
                        <p className="resp-card__desc">{resp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
