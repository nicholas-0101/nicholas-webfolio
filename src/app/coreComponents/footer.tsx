"use client";

const socials = [
  {
    href: "https://www.linkedin.com/in/nicholasamuel/",
    icon: "/icons8-linkedin.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/nicholas-0101",
    icon: "/icons8-git.svg",
    alt: "GitHub",
    label: "GitHub",
  },
  {
    href: "https://discord.gg/AnNXHpRF",
    icon: "/icons8-discord.svg",
    alt: "Discord",
    label: "Discord",
  },
  {
    href: "https://www.instagram.com/nic.verr/",
    icon: "/icons8-instagram.svg",
    alt: "Instagram",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <div className="relative bg-[#0a0a0a] grain w-full">
      <div className="px-8 md:px-12 lg:px-16">
        <footer className="border-t border-white/5 pt-10 md:pt-12 pb-8 md:pb-10 max-w-7xl mx-auto">
          {/* Top bar — Brand (left), Socials (middle), Back to top (right) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-8 md:mb-10">
            {/* Left: Brand */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h3
                className="text-[#FF4D00] text-3xl tracking-wider mb-2"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                }}
              >
                //NICH
              </h3>
              <p className="text-[#666] text-xs md:text-sm leading-relaxed max-w-[280px]">
                Turning complexity into elegant solutions.
              </p>
            </div>

            {/* Middle: Socials */}
            <div className="flex-1 flex justify-center items-center gap-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(255,77,0,0.8)]"
                >
                  <div
                    className="w-6 h-6 md:w-8 md:h-8 transition-all duration-500 bg-white group-hover:bg-[#FF4D00] group-hover:scale-110"
                    style={{
                      WebkitMaskImage: `url(${social.icon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${social.icon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Right: Scroll to top */}
            <div className="flex-1 flex justify-center md:justify-end">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex items-center gap-2 text-[#666] text-sm hover:text-[#FF4D00] transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
              >
                <span className="tracking-[0.2em] uppercase">Back to top</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom bar — Copyright (middle) */}
          <div className="border-t border-white/5 pt-8 md:pt-10 flex justify-center">
            <p className="text-[#444] text-xs text-center">
              © {new Date().getFullYear()} Nicholas. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
