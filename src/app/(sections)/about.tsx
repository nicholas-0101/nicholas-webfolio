"use client";

import {
  MotionSection,
  MotionFade,
  MotionSlide,
} from "@/components/motion/MotionSection";

function AboutSection() {
  return (
    <MotionSection className="relative py-16 md:py-24 lg:py-28 grain">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Profile picture (circle) */}
          <MotionSlide
            direction="left"
            className="shrink-0 self-center lg:self-start"
          >
            <div className="relative group">
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#FF4D00]/50 via-[#FF4D00]/15 to-transparent" />
              <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden bg-[#111]">
                <img
                  src="/images/profile-pic.png"
                  alt="Nicholas — Fullstack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </MotionSlide>

          {/* Right: About title + description */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Section label */}
            <MotionFade>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                <span className="text-[#FF4D00] text-sm tracking-[0.3em] uppercase">
                  About
                </span>
              </div>
            </MotionFade>

            <MotionFade
              as="h2"
              delay={0.15}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              }}
            >
              DESIGNING IMPACTFUL
              <br />
              WEBSITES & MEMORABLE
              <br />
              <span className="text-[#FF4D00]">DIGITAL JOURNEYS</span>
            </MotionFade>

            {/* Orange accent line */}
            <MotionFade delay={0.3}>
              <div className="w-20 h-[2px] bg-[#FF4D00]" />
            </MotionFade>

            <MotionFade
              as="p"
              delay={0.35}
              className="text-[#b0b0b0] max-w-4xl text-base md:text-lg leading-relaxed"
            >
              Hey, I&apos;m Nicholas, a multidisciplinary Product Designer and
              Developer with 3+ years of experience in graphic design and a
              growing focus on full-stack web development and UI/UX. My journey
              started with a deep passion for visual communication, which
              naturally evolved into building complete digital products that
              balance strong aesthetics with clean, functional code. I&apos;ve
              worked across personal and collaborative projects, and what drives
              me most is the space where design and development meet.
            </MotionFade>

            <MotionFade
              as="p"
              delay={0.5}
              className="text-[#666] max-w-4xl text-sm md:text-base leading-relaxed"
            >
              I specialize in crafting modern, responsive web experiences using
              technologies like Next.js, TypeScript, and Tailwind CSS, while
              bringing a designer&apos;s eye to every interface I build. Beyond
              the technical side, I care deeply about creating products that
              feel intuitive and purposeful for the people using them, turning
              complex problems into seamless, user-centered solutions. Whether
              it&apos;s building from scratch, redesigning what exists, or
              bridging a gap between a brand and its digital presence, I show up
              with attention to detail, clear communication, and a genuine
              commitment to making things both work well and look great.
            </MotionFade>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export default AboutSection;