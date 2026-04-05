import './Tools.css';

const toolCategories = [
  {
    category: 'Test Automation',
    tools: [
      { name: 'Selenium', icon: '🌐', description: 'Java web automation' },
      { name: 'Playwright', icon: '🎭', description: 'TypeScript E2E testing' },
      { name: 'WebdriverIO', icon: '⚡', description: 'BDD frameworks' },
      { name: 'TestNG', icon: '🧪', description: 'Java test framework' },
      { name: 'Mocha', icon: '☕', description: 'JS test runner' },
    ],
  },
  {
    category: 'API Testing',
    tools: [
      { name: 'Postman', icon: '📮', description: 'API exploration & testing' },
      { name: 'REST Assured', icon: '🔗', description: 'Java API framework' },
      { name: 'Swagger', icon: '📋', description: 'API documentation review' },
      { name: 'JMeter', icon: '📊', description: 'Performance testing' },
    ],
  },
  {
    category: 'CI/CD & DevOps',
    tools: [
      { name: 'GitHub Actions', icon: '🔄', description: 'Workflow automation' },
      { name: 'Git', icon: '🌿', description: 'Version control' },
      { name: 'Docker', icon: '🐳', description: 'Containerization' },
      { name: 'Jenkins', icon: '🎛️', description: 'Build automation' },
    ],
  },
  {
    category: 'Project & Quality',
    tools: [
      { name: 'JIRA', icon: '📌', description: 'Bug & sprint tracking' },
      { name: 'Confluence', icon: '📝', description: 'Documentation' },
      { name: 'Allure', icon: '📈', description: 'Test reporting' },
      { name: 'TestRail', icon: '🗂️', description: 'Test management' },
    ],
  },
  {
    category: 'Languages',
    tools: [
      { name: 'Java', icon: '☕', description: 'Primary language' },
      { name: 'TypeScript', icon: '🔷', description: 'Playwright scripts' },
      { name: 'JavaScript', icon: '🟡', description: 'WebdriverIO & Node' },
      { name: 'Python', icon: '🐍', description: 'Scripting & GenAI' },
    ],
  },
  {
    category: 'AI & Emerging',
    tools: [
      { name: 'Copilot', icon: '🤖', description: 'AI code assistance' },
      { name: 'ChatGPT', icon: '💬', description: 'Test data generation' },
      { name: 'Gemini', icon: '✨', description: 'AI-powered testing' },
      { name: 'LLM Testing', icon: '🧠', description: 'GenAI validation' },
    ],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="tools section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Tools & <span>Technologies</span>
        </h2>

        <div className="tools__grid">
          {toolCategories.map((cat, ci) => (
            <div
              key={cat.category}
              className={`tools__category animate-on-scroll animate-delay-${(ci % 3) + 1}`}
            >
              <h3 className="tools__category-title">{cat.category}</h3>
              <div className="tools__category-items">
                {cat.tools.map((tool, ti) => (
                  <div
                    key={tool.name}
                    className="tool-item"
                    title={tool.description}
                  >
                    <span className="tool-item__icon" role="img" aria-label={tool.name}>
                      {tool.icon}
                    </span>
                    <span className="tool-item__name">{tool.name}</span>
                    <span className="tool-item__desc">{tool.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="tools__marquee animate-on-scroll" aria-hidden="true">
          <div className="tools__marquee-track">
            {[...toolCategories.flatMap(c => c.tools), ...toolCategories.flatMap(c => c.tools)].map((tool, i) => (
              <span key={i} className="tools__marquee-item">
                {tool.icon} {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
