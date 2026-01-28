const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "HTML5", icon: "html5" },
      { label: "CSS3", icon: "css3" },
      { label: "JavaScript", icon: "javascript" },
      { label: "React", icon: "react" }
    ]
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: "nodejs" },
      { label: "Express", icon: "express" },
      { label: "Python", icon: "python" }
    ]
  },
  {
    title: "Database",
    items: [
      { label: "SQLite", icon: "sqlite" },
      { label: "Supabase", icon: "supabase" }
    ]
  },
  {
    title: "Tools",
    items: [
      { label: "Git", icon: "git" },
      { label: "Vercel", icon: "vercel" }
    ]
  }
];

const getIconClass = (icon) =>
  icon === "express" ? "devicon-express-original" : `devicon-${icon}-plain`;

const Skills = () => (
  <section className="section skills-section" id="skills">
    <div className="skills-inner">
      <header className="skills-header">
        <p className="skills-kicker">Skills</p>
        <h2 className="skills-title">My Stack</h2>
        <p className="skills-subtitle">
          Tools and technologies I use to build and ship modern products.
        </p>
      </header>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3 className="skills-group-title">{group.title}</h3>
            <ul className="skills-chips">
              {group.items.map((skill) => (
                <li className="skill-chip" key={skill.label}>
                  <i className={getIconClass(skill.icon)} aria-hidden="true"></i>
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
