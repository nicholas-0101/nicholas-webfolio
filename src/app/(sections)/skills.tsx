"use client";

import { Code2, Server, Palette, PenTool } from "lucide-react";
import { tagIcons } from "@/data/tagIcons";
import {
  MotionSection,
  MotionFade,
  MotionCard,
} from "@/components/motion/MotionSection";

const skillCards = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Interfaces that feel fast and look sharp",
    color: "#FF4D00",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "CSS",
      "Framer Motion",
      "Zustand",
      "Formik",
      "Axios",
      "NPM",
      "Responsive Design",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description: "APIs and systems that handle real traffic",
    color: "#FF4D00",
    tags: [
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Cloudinary",
      "Git & GitHub",
      "Vercel",
      "REST API",
      "Backendless",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Research-driven design, not guesswork",
    color: "#FF4D00",
    tags: [
      "Figma",
      "Miro",
      "Jira",
      "UX Research",
      "UI Design",
      "Prototyping",
      "Design System",
      "Wireframing",
      "Responsive Design",
      "User Testing",
    ],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Visual storytelling that leaves an impression",
    color: "#FF4D00",
    tags: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Affinity",
      "Canva",
      "Layout & Composition",
      "Color & Typography",
      "Branding",
      "Marketing & Advertising",
    ],
  },
];

// Collect all unique tags for the marquee
const allTags = [...new Set(skillCards.flatMap((card) => card.tags))];

function SkillsSection() {
  return (
    <MotionSection className="relative bg-[#0a0a0a] py-16 md:py-24 lg:py-28 grain" threshold={0.05}>
      <div className="px-8 md:px-12 lg:px-16">
        {/* Section header — two-column */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-16 md:pb-20">
          <div>
            <MotionFade>
              <div className="flex items-center gap-3 pb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                <span className="text-[#FF4D00] text-sm tracking-[0.3em] uppercase">
                  Skills
                </span>
              </div>
            </MotionFade>
            <MotionFade
              as="h2"
              delay={0.15}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              }}
            >
              WHAT I DO
            </MotionFade>
          </div>
          <MotionFade
            as="p"
            delay={0.3}
            className="text-[#666] text-sm md:text-base max-w-sm leading-relaxed lg:text-right"
          >
            Building end-to-end digital products — from design to deployment.
          </MotionFade>
        </div>

        {/* Skills cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCards.map((card, i) => {
            const CardIcon = card.icon;
            return (
              <MotionCard key={card.title} delay={i * 0.15}>
                <div className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-[#111111] p-6 md:p-7 transition-all duration-500 hover:border-white/[0.12] hover:bg-[#141414] h-full">
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 border border-[#FF4D00]/40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${card.color}08 0%, transparent 90%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative z-10 w-13 h-13 rounded-xl flex items-center justify-center mb-7 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,77,0,0.4)]"
                    style={{
                      background: `${card.color}15`,
                      border: `1px solid ${card.color}25`,
                    }}
                  >
                    <CardIcon
                      className="w-5 h-5 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]"
                      style={{ color: card.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="relative z-10 text-white text-lg md:text-xl tracking-wide"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-[#666] text-xs md:text-sm pb-3 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="relative z-10 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => {
                      const tagInfo = tagIcons[tag];
                      const TagIcon = tagInfo?.icon;
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-[#999] text-[11px] px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] transition-all duration-300 cursor-default hover:text-white hover:border-[#FF4D00]/20 hover:bg-[#FF4D00]/[0.06] hover:shadow-[0_0_12px_rgba(255,77,0,0.15)]"
                        >
                          {TagIcon && (
                            <TagIcon
                              className="w-3 h-3 flex-shrink-0"
                              style={{ color: tagInfo.color }}
                            />
                          )}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>

        {/* Scrolling tag marquee */}
        <MotionFade delay={0.6}>
          <div className="mt-16 md:mt-20 overflow-hidden">
            {/* Fade edges */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

              {/* Row 1 — scrolls left */}
              <div
                className="flex gap-3 mb-3"
                style={{
                  animation: "marqueeLeft 30s linear infinite",
                  width: "max-content",
                }}
              >
                {[
                  ...allTags.slice(0, Math.ceil(allTags.length / 2)),
                  ...allTags.slice(0, Math.ceil(allTags.length / 2)),
                ].map((tag, i) => {
                  const tagInfo = tagIcons[tag];
                  const TagIcon = tagInfo?.icon;
                  return (
                    <span
                      key={`r1-${i}`}
                      className="inline-flex items-center gap-2 text-[#999] text-sm px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] whitespace-nowrap hover:text-white hover:border-[#FF4D00]/20 hover:bg-[#FF4D00]/[0.06] transition-all duration-300"
                    >
                      {TagIcon && (
                        <TagIcon
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: tagInfo.color }}
                        />
                      )}
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Row 2 — scrolls right */}
              <div
                className="flex gap-3"
                style={{
                  animation: "marqueeRight 35s linear infinite",
                  width: "max-content",
                }}
              >
                {[
                  ...allTags.slice(Math.ceil(allTags.length / 2)),
                  ...allTags.slice(Math.ceil(allTags.length / 2)),
                ].map((tag, i) => {
                  const tagInfo = tagIcons[tag];
                  const TagIcon = tagInfo?.icon;
                  return (
                    <span
                      key={`r2-${i}`}
                      className="inline-flex items-center gap-2 text-[#999] text-sm px-5 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] whitespace-nowrap hover:text-white hover:border-[#FF4D00]/20 hover:bg-[#FF4D00]/[0.06] transition-all duration-300"
                    >
                      {TagIcon && (
                        <TagIcon
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: tagInfo.color }}
                        />
                      )}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </MotionFade>
      </div>
    </MotionSection>
  );
}

export default SkillsSection;
