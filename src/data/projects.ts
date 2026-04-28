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
    description:
      "Breaky, a casual dining cafe in Surabaya, lacked a digital ordering and reservation system, forcing customers to book via Instagram DM and order on-site during peak hours. I was tasked with designing a full web app experience covering online ordering, table reservation, and user profile. Through UX research with 3 user types, competitive analysis, and iterative wireframing, I designed a responsive multi-platform web app with a seamless pre-order flow, one-step reservation system, and loyalty points feature. The result is a cohesive, brand-aligned UI that reduces friction for users and positions Breaky ahead of local competitors who still rely on manual booking and PDF menus.",
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

    demoLink:
      "https://www.figma.com/proto/PkIh36RRtNpj6MQvhCvLPT/Breaky-Webapp-Design?node-id=63-142&viewport=2965%2C9293%2C0.39&t=PYuwWgfllWuT10zk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=63%3A142&page-id=35%3A461",
  },
  {
    id: "02",
    slug: "workoo",
    title: "Workoo",
    description:
      "Job seekers and companies lacked a unified digital platform in Indonesia, as existing solutions relied on manual DMs, scattered job posts, and no structured application tracking. As part of a 3-person team, I was responsible for Feature 1, covering the homepage, user authentication, and job and company discovery. I built the homepage with geolocation-based job discovery, a full auth flow with email verification and social login, job and company browsing with filters and sorting, CV submission, and an applicant tracking dashboard for companies. The platform also includes premium subscription features such as a CV generator, skill assessments with certificate verification, employee company reviews with anonymous rating, and a website analytics dashboard for tracking user demographics and applicant interests. The result is Workoo, a production-deployed job board with role-based access for job seekers, company admins, and developers.",
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
    description:
      "Event organizers had no dedicated platform to create, promote, and manage ticketed events, while attendees had to rely on fragmented tools with no unified browsing or transaction flow. As part of a team project, I was responsible for Feature 1, covering event discovery, creation, promotion, and transactions. I built the landing page with event browsing, category and location filters, and a debounced search bar, along with event creation for organizers with support for free and paid tickets, limited-time vouchers, and seat management. I also implemented the full transaction flow including payment proof upload, a 2-hour countdown timer, automatic status changes, seat restoration on cancellation, and point usage at checkout. The result is TicketNest, a production-deployed event management platform where organizers can manage events end-to-end and attendees can browse, register, and pay seamlessly.",
    thumbnail: "/images/projects/thumbnail/ticketnest.png",
    gallery: [
      "/images/projects/ticketnest-1.png",
      "/images/projects/ticketnest-2.png",
      "/images/projects/ticketnest-3.png",
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
    description:
      "MS Putra Abadi had an outdated company profile website with poor visual design, low performance scores, and no blog or content management system, making it hard to communicate their services credibly to potential clients. As a solo developer, I was tasked with redesigning and rebuilding the website into a modern, multi-page company profile covering Home, About Us, Services, Teams, Blog List, and Create Blog with authentication. I rebuilt the site using Next.js and TypeScript with Tailwind CSS for styling, Prisma and PostgreSQL for blog data persistence, Zustand for state management, Formik for form handling, and Axios for API communication, while fetching live team data from a third-party API and implementing role-based auth to protect blog creation. The result is a fully responsive, performant company profile site deployed on Vercel, with a significantly improved visual identity, structured content pages, and a working blog system.",
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
      { label: "Before (Original)", url: "https://inovasiindonesia.com/" },
      { label: "After (Redesign)", url: "https://msputrabadi.vercel.app/" },
    ],
  },
  {
    id: "05",
    slug: "on-off-coffee",
    title: "ON/OFF Coffee",
    description:
      "ON/OFF Coffee, a cafe founded in 2022 in Bandung, Indonesia, had no formal brand identity system, making it difficult to maintain visual consistency across physical touchpoints, digital platforms, and marketing materials. I was tasked with creating a comprehensive brand guidelines document covering the full spectrum of brand identity from logo construction to brand application. I developed the complete brand system including logo design with golden ratio construction, logo variations, color palette, typeface hierarchy, iconography, imagery style, supergraphics, and pattern, along with extensive brand application mockups spanning print collaterals, packaging, merchandise, signage, and digital assets including Instagram feeds, stories, reels, and responsive website mockups. The result is a brand guidelines document that gives ON OFF Coffee a cohesive, scalable visual identity aligned with its brand values of comfortable pause, casual productivity, and accessibility for youth.",
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
  },
];
