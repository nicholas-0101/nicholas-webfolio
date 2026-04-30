"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
        }),
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
    setMenuOpen(false);
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
      }, 400); // Trigger scroll earlier while menu is still sliding out
    },
    [closeMenu, pathname, router],
  );

  return (
    <>
      {/* ── Fixed Top Bar ── */}
      <nav className="fixed top-0 left-0 w-full z-[200] py-6 pointer-events-none">
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="fixed inset-0 z-[190] bg-[#0b0b0b]/95 backdrop-blur-md flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Nav Links */}
            <div className="flex flex-col items-center gap-2 md:gap-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.08,
                    duration: 0.6,
                    ease: smoothEase,
                  }}
                  onClick={() => handleNavClick(item.id)}
                  className="text-white text-4xl md:text-6xl lg:text-7xl tracking-wider hover:text-[#FF4D00] transition-colors duration-300 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-12 md:bottom-8 left-0 right-0 px-8 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-4 md:gap-0 text-xs md:text-sm"
            >
              <div className="flex flex-col items-center md:items-start">
                <span className="text-[#FF4D00] font-mono tracking-wider">
                  {wibTime} <span className="ml-1">WIB</span>
                </span>
                <span className="text-[#444] text-[10px] uppercase tracking-[0.2em] mt-1">
                  Local Time (UTC +7)
                </span>
              </div>
              
              <div className="flex flex-col items-center md:items-end">
                <span className="text-[#FF4D00] tracking-widest uppercase">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="text-[#444] text-[10px] uppercase tracking-[0.2em] mt-1">
                  Current Date
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
