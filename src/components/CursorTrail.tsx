"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  // Use refs for position tracking to avoid React re-renders on every frame
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });

  // DOM refs for direct manipulation (no React re-render needed)
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    
    setIsVisible(true);

    const updatePosition = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      
      const target = e.target as HTMLElement;
      // Check if hovering clickable elements
      const isClickable = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";
        
      setIsHovering(isClickable);

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        setHoverText(cursorTarget.getAttribute('data-cursor') || "");
      } else {
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  // Animation loop using refs + direct DOM manipulation (zero React re-renders)
  useEffect(() => {
    if (!isVisible) return;
    
    let animationFrameId: number;
    
    const updateTrail = () => {
      const trail = trailRef.current;
      const pos = posRef.current;
      
      // Ease factor for the trail
      trail.x += (pos.x - trail.x) * 0.15;
      trail.y += (pos.y - trail.y) * 0.15;

      // Update DOM directly — no setState, no React re-render
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${isHovering ? 0 : 1})`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${trail.x - 400}px, ${trail.y - 400}px, 0)`;
      }
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${trail.x - 16}px, ${trail.y - 16}px, 0) scale(${hoverText ? 2.5 : isHovering ? 1.5 : 1})`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(${trail.x - 40}px, ${trail.y - 40}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateTrail);
    };

    updateTrail();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, isHovering, hoverText]);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
          input, textarea {
            cursor: text !important;
          }
        }
      `}} />
      
      {/* Main cursor dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#FF4D00] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          willChange: "transform",
          transform: `translate3d(-100px, -100px, 0)`
        }}
      />
      
      {/* Soft Ambient Radial Glow */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none z-[9990] opacity-40 mix-blend-screen transition-opacity duration-500"
        style={{
          willChange: "transform",
          transform: `translate3d(-500px, -500px, 0)`,
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, rgba(255, 107, 43, 0.06) 30%, transparent 60%)",
          filter: "blur(80px)"
        }}
      />

      {/* Trailing circle */}
      <div 
        ref={circleRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] shadow-[0_0_15px_rgba(255,107,43,0.3)] transition-all duration-300 ease-out ${hoverText ? "backdrop-blur-md" : ""}`}
        style={{
          willChange: "transform",
          transform: `translate3d(-100px, -100px, 0)`,
          background: hoverText 
            ? "rgba(255, 107, 43, 0.5)" 
            : isHovering 
            ? "rgba(255, 107, 43, 0.1)" 
            : "transparent",
          borderWidth: "1px",
          borderColor: isHovering || hoverText ? "rgba(255,107,43,0.6)" : "rgba(255,107,43,0.3)"
        }}
      />
      
      {/* Hover Text */}
      <div
        ref={textRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-opacity duration-300"
        style={{
          width: "80px",
          height: "80px",
          willChange: "transform",
          transform: `translate3d(-100px, -100px, 0)`,
          opacity: hoverText ? 1 : 0
        }}
      >
        <span className="text-white text-base font-medium tracking-widest uppercase" style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          {hoverText}
        </span>
      </div>
    </>
  );
}
