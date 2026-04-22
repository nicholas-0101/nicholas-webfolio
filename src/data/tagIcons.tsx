import type { ComponentType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiNpm,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiFigma,
  SiMiro,
  SiCanva,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

// Custom Affinity logo (black "a" on green background)
export function AffinityIcon({ className }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="240" rx="40" fill="#99E85C" />
      <path d="M112.908,165.979c-10.413,0 -17.037,-6.317 -17.037,-14.329c0,-34.287 90.164,-41.151 90.164,-77.563c0,-22.213 -25.731,-31.787 -58.577,-31.787c-19.98,0 -42.571,3.698 -63.552,10.315l0,43.438c30.919,-22.52 65.272,-32.16 87.4,-32.16c13.914,0 23.355,3.882 23.355,10.838c0,28.658 -124.353,24.117 -124.353,86.042c0,23.736 16.321,37.335 39.283,37.335c34.732,0 61.003,-33.753 80.657,-74.897l3.982,1.43c-10.351,25.143 -31.771,52.712 -35.943,70.434l44.715,0l0,-91.685l-10.327,0c-14.99,32.574 -36.957,62.59 -59.767,62.59" fill="#1a1a1a" fillRule="nonzero" />
    </svg>
  );
}

// Tag icon + brand color mapping
export const tagIcons: Record<string, { icon?: ComponentType<any>; color?: string }> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "HTML & CSS": { icon: SiHtml5, color: "#E34F26" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiHtml5, color: "#264de4" }, // Using HTML icon for CSS generic if SiCss3 is missing, but let's just use generic color for text if icon missing
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "NPM": { icon: SiNpm, color: "#CB3837" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Supabase": { icon: SiSupabase, color: "#3FCF8E" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Miro": { icon: SiMiro, color: "#FFD02F" },
  "Adobe Photoshop": { icon: DiPhotoshop, color: "#31A8FF" },
  "Photoshop": { icon: DiPhotoshop, color: "#31A8FF" },
  "Adobe Illustrator": { icon: DiIllustrator, color: "#FF9A00" },
  "Canva": { icon: SiCanva, color: "#0bc0cf" },
  "Affinity": { icon: AffinityIcon, color: "#99E85C" },
};
