"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Clients Worldwide" },
];

function StatItem({ value, suffix, label, isVisible, delay }: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: string;
}) {
  const count = useCountUp(value, 1800, isVisible);

  return (
    <div className={`mb-5 ${isVisible ? `animate-slide-in-right ${delay}` : "opacity-0"}`}>
      <h1 className="text-black text-[42px] font-sans leading-tight">
        {count}{suffix}
      </h1>
      <p className="text-[#5e5c5c] text-[18px]">{label}</p>
    </div>
  );
}

function HomeSection() {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="home" className="relative overflow-hidden pt-1" ref={ref}>
      {/* Hero avatar with gradient overlay */}
      <div className={`flex justify-center items-center -z-10 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
        <div className="relative">
          <Image
            src="/nicholas-avatar-2.webp"
            alt="profile"
            width={1000}
            height={1000}
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
            className="object-cover rounded-b-full"
            fetchPriority="high"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e4e4e0] to-transparent rounded-b-full" />
        </div>
      </div>

      <div className="lg:absolute relative top-[100px] w-full flex flex-col lg:flex-row justify-between items-center px-4 gap-6">
        {/* Left: Hero text */}
        <div className="flex flex-col leading-none text-center lg:text-left h-screen">
          <h1 className={`text-[#3b3b3b] text-[36px] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            Hey! I&apos;m Nicholas,
          </h1>
          <div className="h-[20px]" />
          <h1 className={`text-black text-[64px] font-sans ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            A FRONTEND
          </h1>
          <h1 className={`text-[#5e5c5c] text-[100px] italic ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            web
          </h1>
          <h1 className={`text-black text-[64px] font-sans ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            DEVELOPER
          </h1>
          <div className="h-[20px]" />
          <p className={`text-[#3b3b3b] text-[16px] max-w-xs mx-auto lg:mx-0 ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
            Turn your ideas into a stunning, interactive website with powerful
            visuals that captivate and engage your audience.
          </p>
          <div className="h-[50px]" />
          <a href="#contact" className={`w-29 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
            <Button className="mt-4 inline-flex items-center gap-3 bg-black text-[#e4e4e0] text-xl px-10 py-6 rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 font-sans cursor-pointer shadow-lg hover:shadow-xl">
              Contact Me <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </a>
        </div>

        {/* Right: Stats with counting animation */}
        <div className="text-center lg:text-right h-screen">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              delay={`delay-${(i + 2) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
