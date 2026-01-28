import { useEffect, useRef } from "react";

const skills = [
  { label: "HTML.", icon: "html5" },
  { label: "JS.", icon: "javascript" },
  { label: "CSS.", icon: "css3" },
  { label: "React.", icon: "react" },
  { label: "Nodejs.", icon: "nodejs" },
  { label: "Express.", icon: "express" },
  { label: "Sqlite.", icon: "sqlite" },
  { label: "Python.", icon: "python" },
  { label: "Git.", icon: "git" },
  { label: "Supabase.", icon: "supabase" },
  { label: "Vercel.", icon: "vercel" }
];

const Skills = () => {
  const scrollerRef = useRef(null);
  const listRef = useRef(null);
  
  //Express has a different name in devicon
  const getIconClass = (icon) =>
    icon === "express" ? "devicon-express-original" : `devicon-${icon}-plain`;

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const items = scroller.querySelectorAll(".list li");
    if (!items.length) return;

    const list = listRef.current;
    if (!list) return;

    const singleWidth = list.scrollWidth / 3;
    scroller.scrollLeft = singleWidth;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((el) => el.classList.remove("active"));
            entry.target.classList.add("active");
          }
        });
      },
      {
        root: scroller,
        rootMargin: "0px -50% 0px -50%",
        threshold: 0
      }
    );

    items.forEach((item) => observer.observe(item));
    const sqliteIndex = skills.findIndex((skill) => skill.label.toLowerCase().includes("sqlite"));
    const startIndex = skills.length + (sqliteIndex === -1 ? Math.floor(skills.length / 2) : sqliteIndex);
    items[startIndex]?.scrollIntoView({ behavior: "instant", inline: "center" });

    let wrapTimer;
    const handleScroll = () => {
      if (wrapTimer) clearTimeout(wrapTimer);
      wrapTimer = setTimeout(() => {
        if (scroller.scrollLeft <= singleWidth * 0.2) {
          scroller.scrollLeft += singleWidth;
        } else if (scroller.scrollLeft >= singleWidth * 1.8) {
          scroller.scrollLeft -= singleWidth;
        }
      }, 60);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      scroller.removeEventListener("scroll", handleScroll);
      if (wrapTimer) clearTimeout(wrapTimer);
    };
  }, []);

  const loopedSkills = [...skills, ...skills, ...skills, ...skills, ...skills];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="right">
          <div className="right-scroller" id="scroller" ref={scrollerRef}>
            <ul className="list" ref={listRef}>
              {loopedSkills.map((skill, index) => (
                <li key={`${skill.label}-${index}`}>
                  <i className={getIconClass(skill.icon)} aria-hidden="true" style={{ paddingRight: "1rem" }}></i>
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
