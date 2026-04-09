"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const experience = [
  {
    id: 1,
    jobTitle: "Full-Stack Web Developer — Freelance",
    year: "2022 - Present",
    bullets: [
      "Designed and developed responsive web applications using React, and Node.js.",
      "Worked with clients to transform business needs into functional, scalable digital solutions.",
      "Built RESTful APIs and integrated third-party services (e.g., payment gateways, CMS, analytics).",
      "Handled full project lifecycles from wireframing to deployment and post-launch optimization.",
    ],
  },
  {
    id: 2,
    jobTitle: "Front-End Developer — PixelForge Studio",
    year: "2021 - 2022",
    bullets: [
      "Developed modern UI components using React, TypeScript, and Tailwind CSS.",
      "Collaborated with UI/UX designers to turn prototypes into clean, accessible interfaces.",
      "Optimized website performance, SEO structure, and mobile responsiveness.",
      "Maintained version control and code reviews using Git and GitHub in Agile teams.",
    ],
  },
  {
    id: 3,
    jobTitle: "Web Development Intern — NovaTech Solutions",
    year: "2020 - 2021",
    bullets: [
      "Assisted in building internal tools with HTML, CSS, and JavaScript.",
      "Gained experience in backend development using Node.js and Express.",
      "Participated in daily standups, code reviews, and sprint planning.",
      "Learned best practices in writing maintainable code and debugging.",
    ],
  },
];

function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center"
      ref={ref}
    >
      <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">
        {/* Left: Timeline */}
        <div className="flex flex-col flex-2/3 gap-0 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-black/10 hidden lg:block" />

          {experience.map((val, i) => (
            <div
              key={val.id}
              className={`
                relative pl-0 lg:pl-10 py-6
                border-t border-black/10 first:border-t-0
                ${isVisible ? `animate-fade-in-up delay-${(i + 2) * 100}` : "opacity-0"}
              `}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-black border-[3px] border-[#e4e4e0] hidden lg:block" />

              <p className="text-[#b0aeaa] text-[13px] font-sans tracking-widest mb-1">
                {val.year}
              </p>
              <h2 className="text-[22px] font-sans mb-3">{val.jobTitle}</h2>
              <ul className="space-y-2">
                {val.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-[16px] text-[#5e5c5c] leading-relaxed flex gap-3"
                  >
                    <span className="text-black/40 mt-[2px] flex-shrink-0 text-[10px]">
                      ●
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: Title + Quote */}
        <div className="flex flex-col flex-1/3 justify-center gap-6 text-center lg:text-right pt-10">
          <p
            className={`text-[#5e5c5c] text-sm font-sans tracking-[0.3em] uppercase ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            04 — Experience
          </p>
          <h1
            className={`text-[42px] font-sans ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            MY EXPERIENCE
          </h1>
          <div
            className={`${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <blockquote className="text-[18px] italic text-[#3b3b3b] leading-relaxed">
              &ldquo;Information is not knowledge. The only source of knowledge
              is experience. You need experience to gain wisdom.&rdquo;
            </blockquote>
            <p className="text-[14px] text-[#5e5c5c] mt-2">
              — Albert Einstein
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;