"use client";

import { experience } from "@/data/experience";
import {
  MotionSection,
  MotionFade,
  MotionCard,
  MotionSlide,
} from "@/components/motion/MotionSection";

function ExperienceSection() {
  return (
    <MotionSection className="relative bg-[#0a0a0a] py-16 md:py-24 lg:py-28 grain">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Timeline */}
          <div className="flex-[2] flex flex-col relative order-2 lg:order-1">
            {/* Vertical timeline line */}
            <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-white/5 hidden lg:block" />

            {experience.map((val, i) => (
              <MotionCard
                key={val.id}
                delay={i * 0.2}
                className="relative pl-0 lg:pl-12 py-8 border-t border-white/5 first:border-t-0"
              >
                {/* Timeline dot — orange */}
                <div className="absolute left-0 top-10 w-4 h-4 rounded-full bg-[#FF4D00] border-[3px] border-[#0a0a0a] hidden lg:block" />

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-block text-[#FF4D00] text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#FF4D00]/20 bg-[#FF4D00]/5">
                    {val.year}
                  </span>
                  <span className="text-[#666] text-xs uppercase tracking-widest px-2 py-1 border border-white/10 rounded-full">
                    {val.type}
                  </span>
                </div>

                <h3
                  className="text-white text-2xl md:text-3xl tracking-wider mb-1"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  }}
                >
                  {val.jobTitle}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <div className="text-[#FF4D00] text-sm md:text-base font-medium mb-1">
                    {val.company}
                  </div>
                  <span className="text-[#666] text-xs md:text-sm font-bold">·</span>
                  <div className="text-[#666] text-xs md:text-sm font-medium">
                    {val.location}
                  </div>
                </div>

                <p className="text-[#b0b0b0] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                  {val.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {val.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-[#b0b0b0] text-sm md:text-base leading-relaxed flex gap-3"
                    >
                      <span className="text-[#FF4D00]/50 mt-[6px] flex-shrink-0 text-[8px]">
                        ●
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {val.tags.map((tag, k) => (
                    <span
                      key={k}
                      className="text-[#666] text-[10px] md:text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </MotionCard>
            ))}
          </div>

          {/* Right: Title + Quote */}
          <div className="flex-1 flex flex-col gap-6 order-1 lg:order-2 lg:sticky lg:top-32 lg:self-start">
            <MotionFade>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                <span className="text-[#FF4D00] text-sm tracking-[0.3em] uppercase">
                  Experiences
                </span>
              </div>
            </MotionFade>

            <MotionFade
              as="h2"
              delay={0.15}
              className="text-white text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              }}
            >
              MY EXPERIENCES
            </MotionFade>

            <MotionFade delay={0.3}>
              <blockquote className="text-[#b0b0b0] text-base md:text-lg italic leading-relaxed border-l-2 border-[#FF4D00]/40 pl-6 mt-4">
                &ldquo;Information is not knowledge. The only source of
                knowledge is experience. You need experience to gain
                wisdom.&rdquo;
              </blockquote>
              <p className="text-[#666] text-sm mt-3 pl-6">— Albert Einstein</p>
            </MotionFade>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export default ExperienceSection;
