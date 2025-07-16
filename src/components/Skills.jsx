import '../styles/Skills.css';
import FadeInSection from './animations/FadeInSection';

const businessSkills = [
  "Negotiation", "Client Retention", "Leadership",
  "Account Management", "Business Development", "Presentation", "Research"
];

const toolsTech = [
  "Microsoft Office", "Tally", "Google Workspace"
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <FadeInSection direction="down">
        <div className="skills-container">
          <h2>Skills</h2>

          <div className="skill-category">
            <h3>Business Skills</h3>
            <div className="skills-grid">
              {businessSkills.map((skill, index) => (
                <div className="skill-card glass-card" key={index}>
                  <span className="skill-emoji">💼</span>
                  <span className="skill-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Tech</h3>
            <div className="skills-grid">
              {toolsTech.map((tool, index) => (
                <div className="skill-card glass-card" key={index}>
                  <span className="skill-emoji">🛠️</span>
                  <span className="skill-text">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Skills;
