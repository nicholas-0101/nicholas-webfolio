"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center"
      ref={ref}
    >
      <div className="mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Heading */}
        <div className="flex-1 text-center lg:text-left">
          <p
            className={`text-[#5e5c5c] text-sm font-sans tracking-[0.3em] uppercase mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            01 — About
          </p>
          <h1
            className={`font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-tight pt-2 ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            DESIGNING IMPACTFUL
            <br />
            WEBSITES & MEMORABLE
            <br />
            DIGITAL JOURNEYS
          </h1>
        </div>

        {/* Right: Description */}
        <div className="flex-1 flex flex-col gap-8 text-left">
          {/* Decorative accent line */}
          <div
            className={`w-16 h-[2px] bg-black ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          />
          <p
            className={`text-base sm:text-lg md:text-xl text-[#3b3b3b] leading-relaxed ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Hey, I&apos;m Nicholas, a web developer with a passion for blending
            clean code with captivating design. My journey into web development
            began with a fascination for how things work on the web, which
            quickly turned into a full-time pursuit. With hands-on experience
            across personal, freelance, and collaborative projects, I&apos;ve
            developed a strong foundation in both front-end and back-end
            development, but I more focused on front-end development.
          </p>
          <p
            className={`text-sm sm:text-base md:text-lg text-[#5e5c5c] font-serif leading-relaxed ${
              isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            I specialize in building modern, responsive websites using
            technologies like JavaScript, React, and Node.js — always with an
            eye for performance and user experience. I enjoy turning complex
            problems into elegant, functional solutions that not only work
            seamlessly but feel intuitive for the end user. At the core of my
            work are values that guide every project I take on: timeliness,
            attention to detail, and clear communication with clients. I believe
            that good code is only part of the story — great collaboration and
            reliability make the process smooth and successful. Whether it&apos;s
            crafting something from scratch or improving what&apos;s already
            there, let&apos;s create something remarkable — together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;