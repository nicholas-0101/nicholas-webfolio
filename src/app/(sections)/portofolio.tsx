"use client";

import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const portofolio = [
  {
    id: 1,
    num: "01",
    title: "Landing Page for a Startup Product Launch",
    techs: ["Photoshop", "HTML", "CSS", "JavaScript", "Next.js"],
    techLinks: [
      "https://en.wikipedia.org/wiki/Photoshop",
      "https://en.wikipedia.org/wiki/HTML",
      "https://en.wikipedia.org/wiki/CSS",
      "https://en.wikipedia.org/wiki/JavaScript",
      "https://en.wikipedia.org/wiki/Next.js",
    ],
    star: {
      situation:
        "A startup launching a productivity tool needed a landing page to collect email signups, introduce the product, and highlight its key features. The site had to be visually appealing, responsive, and built fast.",
      task: "I was responsible for designing and developing the entire landing page — including layout, animations, mobile responsiveness, and integration with a basic mailing list system.",
      action:
        "Using Photoshop, I created hero graphics and icons that matched the brand identity. Then I built the site using Next.js, structuring pages with HTML, CSS, and JavaScript. I added scroll-based animations and a responsive layout to engage visitors. Finally, I connected the email form to a third-party form handler.",
      result:
        "The landing page generated over 1,200 email signups during the pre-launch phase. It received positive feedback for its smooth animations and polished look. The client noted a significant drop in bounce rate compared to their previous page.",
    },
    demo: "https://www.XYZproducts.com/landing-page",
  },
  {
    id: 2,
    num: "02",
    title: "Admin Panel for Small Business Inventory",
    techs: ["Figma", "TypeScript", "CSS", "Next.js"],
    techLinks: [
      "https://en.wikipedia.org/wiki/Figma",
      "https://en.wikipedia.org/wiki/TypeScript",
      "https://en.wikipedia.org/wiki/CSS",
      "https://en.wikipedia.org/wiki/Next.js",
    ],
    star: {
      situation:
        "A local business owner needed a lightweight, internal web app to manage their store's product inventory and stock levels without relying on spreadsheets or third-party tools.",
      task: "I was tasked with designing and building a simple yet functional admin interface where the client could view, add, and update product details with ease.",
      action:
        "I designed the layout and flow using Figma, focusing on simplicity and clarity. Then I built the interface using Next.js with TypeScript and custom CSS, creating dynamic components for product listings and forms. Though no database integration was required for the MVP, the UI was structured to support future API integration.",
      result:
        "The client reported significantly faster inventory updates and fewer manual errors. They appreciated the minimal interface and mentioned plans to expand the tool based on its current usability.",
    },
    demo: "www.store-admin.dev",
  },
  {
    id: 3,
    num: "03",
    title: "Creative Portfolio Website for a Freelance Designer",
    techs: ["Figma", "HTML", "CSS", "JavaScript", "Next.js"],
    techLinks: [
      "https://en.wikipedia.org/wiki/Figma",
      "https://en.wikipedia.org/wiki/HTML",
      "https://en.wikipedia.org/wiki/CSS",
      "https://en.wikipedia.org/wiki/JavaScript",
      "https://en.wikipedia.org/wiki/Next.js",
    ],
    star: {
      situation:
        "A freelance graphic designer needed a visually compelling portfolio to showcase their work and attract new clients. The goal was to build a site that balanced modern design with fast performance and responsive layouts for all devices.",
      task: "I was responsible for designing the layout and developing the full website — from a custom landing page and project gallery to a contact form and smooth page transitions.",
      action:
        "I started by designing the UI/UX in Figma with input from the client. Then I implemented the front-end using HTML, CSS, and JavaScript in a Next.js environment. I added responsive grids, smooth scrolling, and animated transitions to bring the designer's work to life. I also ensured accessibility and optimized assets for fast load times.",
      result:
        "The site improved the designer's visibility, bringing in over 300 portfolio views per week and doubling inquiry submissions within a month. The client praised the site's clean look and ease of use across devices.",
    },
    demo: "https://www.aiueo.com/portofolio",
  },
];

function PortofolioSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div id="portofolio" className="flex flex-col" ref={ref}>
      <p
        className={`text-[#5e5c5c] text-sm font-sans tracking-[0.3em] uppercase mb-4 text-center lg:text-left ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        05 — Portfolio
      </p>
      <h1
        className={`text-[42px] font-sans text-center lg:text-left mb-10 ${
          isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
        }`}
      >
        MY PORTOFOLIO
      </h1>

      <div className="flex flex-col gap-12">
        {portofolio.map((val, i) => (
          <div
            key={val.id}
            className={`
              group border-t border-black/10
              pt-8 transition-all duration-300
              ${isVisible ? `animate-fade-in-up delay-${Math.min((i + 2) * 100, 500)}` : "opacity-0"}
            `}
          >
            {/* Header: number + title + techs */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8 mb-6">
              {/* Number */}
              <span className="text-[56px] font-sans text-black/10 leading-none select-none flex-shrink-0">
                {val.num}
              </span>

              <div className="flex-1">
                {/* Title */}
                <h2 className="text-[22px] font-sans mb-3">{val.title}</h2>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {val.techs.map((tech, j) => (
                    <a
                      key={tech}
                      href={val.techLinks[j]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="rounded-full border-black/30 text-black bg-transparent hover:bg-black hover:text-[#e4e4e0] hover:scale-105 active:scale-95 transition-all duration-300 text-[13px] font-sans"
                      >
                        {tech}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* STAR breakdown — 2-column grid on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 mb-6">
              {(
                Object.entries(val.star) as [string, string][]
              ).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-black capitalize font-sans text-[20px] tracking-wide mb-1">
                    {key}
                  </h3>
                  <p className="text-[15px] text-[#5e5c5c] leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Demo link */}
            <div className="flex items-center gap-2">
              <span className="text-[14px] text-[#5e5c5c]">Visit:</span>
              <a
                href="https://dummy-app-apfv.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-black hover:underline inline-flex items-center gap-1 transition-colors duration-200"
              >
                {val.demo}
                <ExternalLinkIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortofolioSection;
