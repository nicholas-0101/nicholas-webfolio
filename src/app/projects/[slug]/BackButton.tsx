"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/#projects");
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-[#999] hover:text-[#FF4D00] transition-colors duration-300 group bg-transparent border-none cursor-pointer p-0"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm tracking-wider uppercase">Back to Projects</span>
    </button>
  );
}
