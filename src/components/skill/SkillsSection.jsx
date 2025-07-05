import { useState } from "react";
import "./skills.css";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 65, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "Git/GitHub", level: 95, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 95, category: "tools" },
  { name: "VS Code", level: 100, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          My <span className="highlight">Skills</span>
        </h2>

        <div className="category-buttons">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="skill-card">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="skill-percent">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
