"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      className="relative py-16 md:py-24 lg:py-28 grain"
      ref={ref}
    >
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Profile picture (circle) */}
          <div
            className={`shrink-0 self-center lg:self-start ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#FF4D00]/50 via-[#FF4D00]/15 to-transparent" />
              <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden bg-[#111]">
                <img
                  src="/profile-placeholder.jpg"
                  alt="Nicholas — Fullstack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-[#333]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <span className="text-xs tracking-[0.2em] uppercase">Your Photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About title + description */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Section label */}
            <div
              className={`flex items-center gap-3 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
              <span className="text-[#FF4D00] text-sm tracking-[0.3em] uppercase">
                About
              </span>
            </div>

            <h2
              className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight ${
                isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              }}
            >
              DESIGNING IMPACTFUL
              <br />
              WEBSITES & MEMORABLE
              <br />
              <span className="text-[#FF4D00]">DIGITAL JOURNEYS</span>
            </h2>

            {/* Orange accent line */}
            <div
              className={`w-20 h-[2px] bg-[#FF4D00] ${
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            />

            <p
              className={`text-[#b0b0b0] text-base md:text-lg leading-relaxed ${
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              Hey, I&apos;m Nicholas, a web developer with a passion for
              blending clean code with captivating design. My journey into web
              development began with a fascination for how things work on the
              web, which quickly turned into a full-time pursuit. With hands-on
              experience across personal, freelance, and collaborative projects,
              I&apos;ve developed a strong foundation in both front-end and
              back-end development, but I more focused on front-end development.
            </p>

            <p
              className={`text-[#666] text-sm md:text-base leading-relaxed ${
                isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
            >
              I specialize in building modern, responsive websites using
              technologies like JavaScript, React, and Node.js — always with an
              eye for performance and user experience. I enjoy turning complex
              problems into elegant, functional solutions that not only work
              seamlessly but feel intuitive for the end user. At the core of my
              work are values that guide every project I take on: timeliness,
              attention to detail, and clear communication with clients. I
              believe that good code is only part of the story — great
              collaboration and reliability make the process smooth and
              successful. Whether it&apos;s crafting something from scratch or
              improving what&apos;s already there, let&apos;s create something
              remarkable — together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;