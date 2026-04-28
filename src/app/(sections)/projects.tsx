"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import { projects } from "@/data/projects";
import { tagIcons } from "@/data/tagIcons";

function PortofolioSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      className="relative bg-[#0a0a0a] py-16 md:py-24 lg:py-28 grain"
      ref={ref}
    >
      <div className="px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <div
            className={`flex items-center gap-3 pb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span className="text-[#FF4D00] text-sm tracking-[0.3em] uppercase">
              Projects
            </span>
          </div>

          <h2
            className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            }}
          >
            SELECTED WORK
          </h2>
        </div>

        {/* Portfolio cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              data-cursor="view"
              className={`group flex flex-col bg-[#111111] rounded-2xl border border-white/5 hover:border-[#FF4D00]/30 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(255,77,0,0.15)] overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${Math.min((i + 2) * 100, 500)}ms` : "0ms",
              }}
            >
              {/* Project Thumbnail */}
              <div className="relative w-full aspect-video bg-[#1a1a1a] overflow-hidden border-b border-white/5 group-hover:border-[#FF4D00]/30 transition-colors duration-300 ease-in-out">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/5 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full border border-[#FF4D00]/30 bg-[#FF4D00]/10 text-[#FF4D00] text-[10px] tracking-wider uppercase"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-white text-2xl md:text-3xl tracking-wide mb-4 transition-colors duration-300 ease-in-out group-hover:text-[#FF4D00]"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#666] text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 max-h-[52px] overflow-hidden">
                  {project.techs.map((tech) => {
                    const tagInfo = tagIcons[tech];
                    const TagIcon = tagInfo?.icon;
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 text-[#999] text-[11px] px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] transition-all duration-300 cursor-default hover:text-white hover:border-[#FF4D00]/20 hover:bg-[#FF4D00]/[0.06] hover:shadow-[0_0_12px_rgba(255,77,0,0.15)]"
                      >
                        {TagIcon && (
                          <TagIcon
                            className="w-3 h-3 flex-shrink-0"
                            style={{ color: tagInfo.color }}
                          />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortofolioSection;
