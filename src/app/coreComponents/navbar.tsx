"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "MORE ABOUT ME" },
  { id: "skills", label: "MY SKILLS" },
  { id: "testimonial", label: "TESTIMONIAL" },
  { id: "experience", label: "MY EXPERIENCE" },
  { id: "portofolio", label: "MY PORTOFOLIO" },
  { id: "contact", label: "CONTACT ME" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const scrollContainer = document.querySelector(
      ".overflow-y-auto"
    ) as HTMLElement | null;

    if (!scrollContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: scrollContainer,
        rootMargin: "-10% 0px -60% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#e4e4e0]/90 backdrop-blur-md z-[100] px-4 border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-screen mx-auto">
        <div
          id="nav-menu"
          className="
            flex md:gap-[50px] gap-[35px] py-2 md:py-3 font-sans text-[18px] md:text-[20px]
            whitespace-nowrap overflow-x-auto
            lg:justify-center
            sm:justify-between
            scroll-smooth"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`
                relative pb-1 transition-all duration-300
                hover:opacity-70
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:bg-black after:transition-all after:duration-300
                ${activeSection === item.id ? "after:w-full" : "after:w-0"}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
