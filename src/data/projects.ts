import { ComponentType } from "react";
import { SiNextdotjs, SiTypescript, SiFigma, SiJavascript, SiHtml5 } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  categories: string[];
  techs: string[];
  client: string;
  year: string;
  deliverables: string;
  platform: string;
  challenge: string[];
  demoLink?: string;
  githubLink?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "startup-landing-page",
    title: "Startup Product Launch",
    description: "A high-conversion landing page designed to collect email signups, introduce the product, and highlight its key features with smooth scroll animations.",
    categories: ["LANDING PAGE", "FRONTEND", "UI DESIGN"],
    techs: ["Photoshop", "HTML", "CSS", "JavaScript", "Next.js"],
    client: "Tech Startup XYZ",
    year: "2023",
    deliverables: "Responsive Web Landing Page",
    platform: "Web",
    challenge: [
      "Needed to achieve a very high conversion rate for pre-launch signups.",
      "Required smooth, lightweight scroll animations without sacrificing load speed.",
      "Integration with a secure third-party mailing list API."
    ],
    demoLink: "https://www.XYZproducts.com/landing-page"
  },
  {
    id: "02",
    slug: "business-inventory-admin",
    title: "Small Business Admin Panel",
    description: "A lightweight, internal web application designed to help local business owners manage their store's product inventory and stock levels seamlessly.",
    categories: ["DASHBOARD", "WEB APP", "UI/UX"],
    techs: ["Figma", "TypeScript", "CSS", "Next.js"],
    client: "Local Retailer",
    year: "2023",
    deliverables: "Internal Admin Dashboard",
    platform: "Web",
    challenge: [
      "Replacing a cumbersome spreadsheet-based system with a fast, intuitive UI.",
      "Creating reusable, dynamic components for product listings and data entry forms.",
      "Structuring the MVP front-end to easily support future backend database integrations."
    ]
  },
  {
    id: "03",
    slug: "designer-portfolio",
    title: "Creative Freelance Portfolio",
    description: "A visually compelling portfolio website built to showcase creative graphic design work, featuring modern layouts and dynamic page transitions.",
    categories: ["PORTFOLIO", "FRONTEND", "CREATIVE"],
    techs: ["Figma", "HTML", "CSS", "JavaScript", "Next.js"],
    client: "Freelance Designer",
    year: "2024",
    deliverables: "Personal Portfolio Website",
    platform: "Web",
    challenge: [
      "Balancing high-quality, image-heavy visual galleries with fast load times.",
      "Implementing custom animated transitions to match the designer's creative aesthetic.",
      "Ensuring perfect responsive design across mobile and desktop devices."
    ],
    demoLink: "https://www.aiueo.com/portofolio"
  }
];
