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
    <section
      id="testimonial"
      className="min-h-screen flex flex-col justify-center"
      ref={ref}
    >
      <p
        className={`text-[#5e5c5c] text-sm font-sans tracking-[0.3em] uppercase mb-4 text-center lg:text-left ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        03 — Testimonials
      </p>
      <h1
        className={`text-[42px] font-sans text-center lg:text-left mb-10 ${
          isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
        }`}
      >
        TRUSTED BY
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full">
        {testimony.map((val, i) => (
          <div
            key={val.id}
            className={`
              group flex-1 min-w-[280px] p-6
              border-l-2 border-black/20 hover:border-black
              bg-black/[0.02] hover:bg-black/[0.04]
              transition-all duration-300
              ${isVisible ? `animate-fade-in-up delay-${Math.min((i + 1) * 100, 700)}` : "opacity-0"}
            `}
          >
            {/* Quote mark */}
            <span className="text-[48px] leading-none text-black/10 font-serif select-none block -mb-4">
              &ldquo;
            </span>

            <p className="text-[16px] text-[#5e5c5c] leading-relaxed">
              {val.testimony}
            </p>

            {/* Name and position — tighter spacing to testimony */}
            <div className="mt-4 pt-3 border-t border-black/5">
              <h2 className="text-[16px] font-sans leading-tight">
                {val.name}
              </h2>
              <p className="text-[13px] text-[#5e5c5c] mt-0.5">{val.jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;