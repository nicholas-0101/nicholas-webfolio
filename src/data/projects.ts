import { ComponentType } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  categories: string[];
  techs: string[];
  client: string;
  year: string;
  deliverables: string;
  platform: string;
  demoLink?: string;
  demoLinks?: { label: string; url: string }[];
  githubLink?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "breaky-eatery-desserts",
    title: "Breaky Eatery & Desserts",
    description: `Breaky is a UX design project for a casual dining cafe in Surabaya, creating a full web app experience for online ordering, table reservation, and user profiles to replace their manual Instagram DM booking system. This is an individual project, done as a challenge project at Purwadhika Digital & Technology School.

I handled the entire design process from scratch, starting with UX research across 3 user types, competitive analysis, and iterative wireframing, all the way to a responsive multi-platform UI with a seamless pre-order flow, one-step reservation system, and a loyalty points feature.

This project taught me how to translate real business pain points into design decisions, and how small UX choices like reducing reservation steps actually make a meaningful difference for both the user and the business.`,
    thumbnail: "/images/projects/thumbnail/breaky.png",
    gallery: [
      "/images/projects/gallery/breaky-1.png",
      "/images/projects/gallery/breaky-2.png",
      "/images/projects/gallery/breaky-3.png",
      "/images/projects/gallery/breaky-4.png",
    ],
    categories: ["MOBILE APP", "UI/UX DESIGN", "UX RESEARCH"],
    techs: ["Figma"],
    client: "Purwadhika Digital & Technology School - Challenge Project",
    year: "2026",
    deliverables: "Mobile App UI/UX Design",
    platform: "Mobile",
    demoLinks: [
      {
        label: "View Project",
        url: "https://www.figma.com/proto/PkIh36RRtNpj6MQvhCvLPT/Breaky-Webapp-Design?node-id=63-142&viewport=2965%2C9293%2C0.39&t=PYuwWgfllWuT10zk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=63%3A142&page-id=35%3A461",
      },
    ],
  },
  {
    id: "02",
    slug: "workoo",
    title: "Workoo",
    description: `Workoo is a full-stack job board web app that connects job seekers and companies in Indonesia, solving the mess of manual DMs, scattered job posts, and zero application tracking. This is a group project, built as my final project at Purwadhika Digital & Technology School with a team of 3, where I handled the core user-facing side of the platform including the homepage, authentication, and job and company discovery.

I built geolocation-based job discovery, a complete auth flow with email verification and social login, job and company browsing with filters and sorting, CV submission, and a dashboard for applicants to track their applications. Seeing it go live as a real production app was honestly the most rewarding part.

Working on this taught me how to build auth systems that feel smooth for users, manage role-based access across different account types, and coordinate with teammates so everything fits together without stepping on each other.`,
    thumbnail: "/images/projects/thumbnail/workoo.png",
    gallery: [
      "/images/projects/gallery/workoo-1.png",
      "/images/projects/gallery/workoo-2.png",
      "/images/projects/gallery/workoo-3.png",
      "/images/projects/gallery/workoo-4.png",
      "/images/projects/gallery/workoo-5.png",
      "/images/projects/gallery/workoo-6.png",
    ],
    categories: ["WEB APP", "FULL-STACK", "PLATFORM"],
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Formik",
      "Axios",
      "NPM",
      "Git & GitHub",
      "Vercel",
    ],
    client: "Purwadhika Digital & Technology School - Final Project",
    year: "2025",
    deliverables: "Full-Stack Job Board Web App",
    platform: "Web",
    demoLink: "https://workoo.vercel.app",
  },
  {
    id: "03",
    slug: "ticketnest",
    title: "TicketNest",
    description: `      TicketNest is a full-stack event management platform that lets organizers create and manage ticketed events while giving attendees a unified place to browse, register, and pay, solving the mess of fragmented tools on both sides. This is a group project, built as a challenge project at Purwadhika Digital & Technology School with a team of 2, where I handled the event discovery, creation, promotion, and transaction side of the platform.

I built the landing page with event browsing, category and location filters, and a debounced search bar, along with event creation for organizers with support for free and paid tickets, limited-time vouchers, and seat management. On the transaction side, I implemented payment proof upload, a 2-hour countdown timer, automatic status changes, seat restoration on cancellation, and point usage at checkout.

Shipping a platform this feature-dense with just 2 people taught me a lot about prioritizing what actually matters for the user flow, and how to build time-sensitive logic like countdowns and automatic status changes in a way that holds up reliably in production.`,
    thumbnail: "/images/projects/thumbnail/ticketnest.png",
    gallery: [
      "/images/projects/gallery/ticketnest-1.png",
      "/images/projects/gallery/ticketnest-2.png",
      "/images/projects/gallery/ticketnest-3.png",
      "/images/projects/gallery/ticketnest-4.png",
    ],
    categories: ["WEB APP", "FULL-STACK", "PLATFORM"],
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "Nodemailer",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Formik",
      "Axios",
      "NPM",
      "Git & GitHub",
      "Vercel",
    ],
    client: "Purwadhika Digital & Technology School - Challenge Project",
    year: "2025",
    deliverables: "Full-Stack Event Management Web App",
    platform: "Web",
    demoLink: "https://ticketnestapp.vercel.app",
  },
  {
    id: "04",
    slug: "ms-putra-abadi",
    title: "MS Putra Abadi",
    description: `MS Putra Abadi is a company profile website redesign for a real local business, transforming an outdated site with poor performance and no content system into a modern, credible web presence that actually communicates what they do. This is an individual project, done as a challenge project at Purwadhika Digital & Technology School.

I rebuilt the entire site from scratch, covering six pages including a homepage, about us, services, teams, a blog list, and a protected blog creation page with authentication so only authorized users can publish content.

This project taught me what it really takes to turn something broken into something genuinely better, not just visually but in terms of how it represents the business to potential clients. Thinking about it from the client's perspective pushed me to care about details I wouldn't have noticed otherwise.`,
    thumbnail: "/images/projects/thumbnail/mspa.png",
    gallery: [
      "/images/projects/gallery/mspa-1.png",
      "/images/projects/gallery/mspa-2.png",
      "/images/projects/gallery/mspa-3.png",
      "/images/projects/gallery/mspa-4.png",
    ],
    categories: ["WEBSITE", "FRONTEND", "COMPANY PROFILE"],
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "Formik",
      "Axios",
      "NPM",
      "Git & GitHub",
      "Vercel",
    ],
    client: "Purwadhika Digital & Technology School - Challenge Project",
    year: "2025",
    deliverables: "Multi-Page Company Profile Website",
    platform: "Web",
    demoLinks: [
      { label: "Before (Original)", url: "https://inovasiindonesia.com" },
      { label: "After (Redesign)", url: "https://msputrabadi.vercel.app" },
    ],
  },
  {
    id: "05",
    slug: "on-off-coffee",
    title: "ON/OFF Coffee",
    description: `ON/OFF Coffee is a branding project for a cafe founded in 2022 in Bandung, where I built their entire visual identity from the ground up, giving them a cohesive brand system they could actually use consistently across every touchpoint. This is an individual project, done as a challenge project at Purwadhika Digital & Technology School.

I designed everything from scratch, starting with a new logo built on golden ratio construction, through to color palette, typeface hierarchy, iconography, patterns, and supergraphics, then applied it all across print collaterals, packaging, merchandise, signage, and digital assets including Instagram feeds, stories, and website mockups.

This project taught me how much thought goes into building a brand that actually scales, and how every small decision like a color choice or type pairing has to hold up across wildly different contexts, from a coffee cup to a phone screen.`,
    thumbnail: "/images/projects/thumbnail/on-off-coffee.png",
    gallery: [
      "/images/projects/gallery/onoff-1.png",
      "/images/projects/gallery/onoff-2.png",
      "/images/projects/gallery/onoff-3.png",
      "/images/projects/gallery/onoff-4.png",
      "/images/projects/gallery/onoff-5.png",
      "/images/projects/gallery/onoff-6.png",
      "/images/projects/gallery/onoff-7.png",
      "/images/projects/gallery/onoff-8.png",
      "/images/projects/gallery/onoff-9.png",
      "/images/projects/gallery/onoff-10.png",
    ],
    categories: ["LOGO", "BRANDING", "VISUAL DESIGN"],
    techs: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    client: "Purwadhika Digital & Technology School - Challenge Project",
    year: "2026",
    deliverables: "Brand Guidelines Document",
    platform: "Print & Digital",
    demoLinks: [
      {
        label: "View Project",
        url: "https://www.figma.com/deck/bXNWKgDiDjUVcyLWtbylx7/DC-2-SLIDES?node-id=2-42&viewport=-89%2C-50%2C0.52&t=LIjNgCfPNszeTHhK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
];
