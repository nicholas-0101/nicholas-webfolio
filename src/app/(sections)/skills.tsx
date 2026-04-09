"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  {
    id: 1,
    skillName: "JAVASCRIPT",
    skillDesc:
      "is a programming language and core technology of the World Wide Web, alongside HTML and CSS.",
  },
  {
    id: 2,
    skillName: "TYPESCRIPT",
    skillDesc:
      "is a high-level programming language that adds static typing with optional type annotations to JavaScript.",
  },
  {
    id: 3,
    skillName: "CSS",
    skillDesc:
      "is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.",
  },
  {
    id: 4,
    skillName: "HTML",
    skillDesc:
      "is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 5,
    skillName: "NODE.JS",
    skillDesc:
      "is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.",
  },
  {
    id: 6,
    skillName: "REACT",
    skillDesc:
      "is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more 'seamless'.",
  },
];

function SkillsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center"
      ref={ref}
    >
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left: Section title */}
        <div className="lg:w-1/4 pt-10">
          <p
            className={`text-[#5e5c5c] text-sm font-sans tracking-[0.3em] uppercase mb-4 text-center lg:text-left ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            02 — Skills
          </p>
          <h1
            className={`text-[42px] font-sans text-center lg:text-left ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            MY SKILLS
          </h1>
        </div>

        {/* Right: Skill cards */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-0 w-full lg:w-3/4">
          {skills.map((skill, i) => (
            <div
              key={skill.id}
              className={`
                group p-6 flex flex-col gap-2 flex-1 min-w-[250px]
                border-t border-black/10
                hover:bg-black/[0.02] transition-all duration-300
                ${isVisible ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"}
              `}
            >
              <span className="text-[#b0aeaa] text-[13px] font-sans tracking-widest">
                {String(skill.id).padStart(2, "0")}
              </span>
              <h2 className="text-[24px] font-sans group-hover:tracking-wider transition-all duration-300">
                {skill.skillName}
              </h2>
              <p className="text-[16px] text-[#5e5c5c] leading-relaxed">
                {skill.skillDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;