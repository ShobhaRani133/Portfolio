import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Automation Frameworks',
    icon: '⚙️',
    color: 'cyan',
    skills: [
      { name: 'Selenium Java', level: 88, tag: 'Expert' },
      { name: 'Playwright TypeScript', level: 82, tag: 'Advanced' },
      { name: 'WebdriverIO Cucumber', level: 85, tag: 'Expert' },
    ],
  },
  {
    category: 'API & Backend Testing',
    icon: '🔌',
    color: 'purple',
    skills: [
      { name: 'REST API Testing', level: 85, tag: 'Advanced' },
      { name: 'Postman / REST Assured', level: 80, tag: 'Advanced' },
      { name: 'Authentication Flows (Stripe/OAuth)', level: 75, tag: 'Intermediate' },
    ],
  },
  {
    category: 'CI/CD & DevOps',
    icon: '🚀',
    color: 'green',
    skills: [
      { name: 'GitHub Actions CI/CD', level: 80, tag: 'Advanced' },
      { name: 'Git Version Control', level: 88, tag: 'Expert' },
      { name: 'Docker Basics', level: 60, tag: 'Intermediate' },
    ],
  },
  {
    category: 'Emerging Tech',
    icon: '🤖',
    color: 'amber',
    skills: [
      { name: 'GenAI Chatbot Testing', level: 72, tag: 'Growing' },
      { name: 'BDD / Gherkin', level: 85, tag: 'Advanced' },
      { name: 'Cross-browser Testing', level: 88, tag: 'Expert' },
    ],
  },
];

function SkillBar({ name, level, tag }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`;
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) observer.observe(barRef.current.closest('.skill-item'));
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-item__header">
        <span className="skill-item__name">{name}</span>
        <div className="skill-item__meta">
          <span className="skill-item__tag">{tag}</span>
          <span className="skill-item__percent">{level}%</span>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" ref={barRef} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills section grid-bg">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          My <span>Skills</span>
        </h2>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`skills__card card animate-on-scroll animate-delay-${i + 1}`}
            >
              <div className={`skills__card-header skills__card-header--${cat.color}`}>
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.category}</h3>
              </div>
              <div className="skills__list">
                {cat.skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="skills__legend animate-on-scroll">
          {['Intermediate', 'Advanced', 'Expert'].map((level, i) => (
            <div key={level} className="skills__legend-item">
              <div className={`skills__legend-dot skills__legend-dot--${i}`} />
              <span>{level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
