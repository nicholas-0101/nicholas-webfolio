"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experiences", label: "Experiences" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [wibTime, setWibTime] = useState("");

  /* Ticking WIB clock (UTC+7) */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setWibTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  /* Detect scroll — show logo in nav after scrolling past the hero name */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 400);
  }, []);

  useEffect(() => {
    // If the page loads with a hash (e.g., cross-page navigation from a back button)
    // clean it up after a small delay to ensure the browser has already scrolled.
    if (window.location.hash) {
      const timer = setTimeout(() => {
        history.replaceState(null, "", window.location.pathname);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleNavClick = useCallback(
    (id: string) => {
      closeMenu();
      setTimeout(() => {
        if (pathname !== "/") {
          // Route to homepage sections if not currently on homepage
          if (id === "home") {
            router.push("/");
          } else {
            router.push("/#" + id);
          }
        } else {
          // Normal smooth scrolling when on the homepage
          if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
          // Clean hash from URL
          if (window.location.hash) {
            history.replaceState(null, "", window.location.pathname);
          }
        }
      }, 450);
    },
    [closeMenu, pathname, router]
  );

  return (
    <>
      {/* ── Fixed Top Bar ── */}
      <nav
        className="fixed top-0 left-0 w-full z-[200] py-6 pointer-events-none"
      >
        {/* Backdrop blur — masked to fade out seamlessly */}
        <div
          className="absolute inset-0 -bottom-12 backdrop-blur-md"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          }}
        />
        {/* Gradient tint — seamless fade */}
        <div
          className="absolute inset-0 -bottom-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.2) 40%, transparent 100%)",
          }}
        />
        <div className="relative px-8 md:px-12 lg:px-16 flex items-center justify-between pointer-events-auto">
          {/* Logo — only visible after scrolling past hero name */}
          <button
            onClick={() => {
              if (menuOpen) closeMenu();
              if (pathname !== "/") {
                router.push("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-[#FF4D00] text-2xl md:text-3xl tracking-wider transition-all duration-500 cursor-pointer opacity-100 translate-y-0"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            }}
          >
            //NICH
          </button>

          {/* Hamburger */}
          <button
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            className="relative z-[210] w-10 h-10 flex flex-col items-center justify-center gap-[7px] cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-12 bg-[#FF4D00] transition-all duration-400 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-12 bg-[#FF4D00] transition-all duration-400 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Full-Screen Overlay Menu ── */}
      {(menuOpen || closing) && (
        <div
          className={`fixed inset-0 z-[190] bg-[#0b0b0b]/90 backdrop-blur-sm flex flex-col justify-center items-center ${
            closing ? "menu-close" : "menu-open"
          }`}
        >
          {/* Nav Links */}
          <div className="flex flex-col items-center gap-2 md:gap-4">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white text-4xl md:text-6xl lg:text-7xl tracking-wider hover:text-[#FF4D00] transition-colors duration-300 cursor-pointer"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-8 left-0 right-0 px-8 flex justify-between items-end text-[#666] text-xs md:text-sm">
            <span className="text-[#FF4D00]">{wibTime} <span className="text-[#FF4D00] ml-1">Timezone (GMT +7)</span></span>
            <span className="text-[#FF4D00]">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
