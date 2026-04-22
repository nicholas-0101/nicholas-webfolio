"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimony = [
  {
    id: 1,
    name: "Emma R.",
    jobTitle: "Founder, Bloom Studio",
    testimony:
      "Working with Nicholas was a game-changer. The website not only looks beautiful, but also performs flawlessly. Communication was smooth, deadlines were met, and the results exceeded expectations.",
  },
  {
    id: 2,
    name: "David K.",
    jobTitle: "Product Manager, TechNova",
    testimony:
      "Professional, detail-oriented, and truly understands user experience. Nicholas brought our ideas to life with clean code and sleek design. Highly recommended for any web project.",
  },
  {
    id: 3,
    name: "Alisa M.",
    jobTitle: "Creative Director, Luna Agency",
    testimony:
      "What impressed me most was the blend of design sense and technical skill. Nicholas turned our brief into a visually stunning, responsive site that our users love.",
  },
  {
    id: 4,
    name: "Jason T.",
    jobTitle: "Marketing Lead, BrightPath Co.",
    testimony:
      "Our site's engagement and load times improved dramatically. Nicholas was proactive, easy to work with, and delivered high-quality code and clean design — ahead of schedule!",
  },
  {
    id: 5,
    name: "Clara W.",
    jobTitle: "UX Designer, IndieSoft",
    testimony:
      "Collaborating with Nicholas was seamless. They translated our wireframes into pixel-perfect, accessible components with attention to every detail. A developer who truly gets design.",
  },
  {
    id: 6,
    name: "Michael B.",
    jobTitle: "Freelance Consultant",
    testimony:
      "One of the most reliable developers I've worked with. From clear communication to thoughtful suggestions, Nicholas made the process stress-free and the outcome truly professional.",
  },
  {
    id: 7,
    name: "Sophie L.",
    jobTitle: "Startup Founder, Taskly",
    testimony:
      "Nicholas quickly understood our product and translated it into a stunning, high-performing site. His attention to detail and reliability truly stood out.",
  },
];

function TestimonialSection() {
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
            className={`flex items-center gap-3 mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            <span className="text-[#FF4D00] text-sm tracking-[0.3em] uppercase">
              Testimonials
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
            TRUSTED BY
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimony.map((val, i) => (
            <div
              key={val.id}
              className={`group relative bg-[#111111] rounded-2xl p-8 border border-white/5 hover:border-[#FF4D00]/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,77,0,0.05)] ${
                isVisible
                  ? `animate-fade-in-up delay-${Math.min((i + 1) * 100, 700)}`
                  : "opacity-0"
              }`}
            >
              {/* Orange quote mark */}
              <span className="text-[#FF4D00] text-6xl leading-none font-serif select-none block -mb-2 opacity-60">
                &ldquo;
              </span>

              <p className="text-[#b0b0b0] text-sm md:text-base leading-relaxed mb-8">
                {val.testimony}
              </p>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <p
                  className="text-white text-base tracking-wider"
                  style={{
                    fontFamily:
                      "var(--font-bebas), 'Bebas Neue', sans-serif",
                  }}
                >
                  {val.name}
                </p>
                <p className="text-[#666] text-xs mt-0.5">{val.jobTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;