export type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  year: string;
  type: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    id: 1,
    jobTitle: "Graphic Designer",
    company: "Sotis Hotel",
    location: "Kupang, Indonesia",
    year: "Apr - May 2025",
    type: "Internship",
    description:
      "Creating impactful marketing materials and campaigns that drive measurable brand growth.",
    bullets: [
      "Developed compelling marketing materials that directly contributed to sales growth.",
      "Executed targeted campaigns that significantly expanded social media reach.",
      "Boosted brand engagement by 40% through innovative and creative design strategies.",
    ],
    tags: ["Canva", "Poster Design", "Social Media Design"],
  },
  {
    id: 2,
    jobTitle: "Head Coordinator",
    company: "Eagles Creative Team",
    location: "Kupang, Indonesia",
    year: "2024 - 2025",
    type: "Organization",
    description:
      "Coordinated digital publication and public relations for the Eagles Basketball Team, leading content strategy, visual direction, and team execution for social media.",
    bullets: [
      "Designed and managed promotional materials and campaigns across multiple platforms",
      "Oversaw content planning, scheduling, and performance tracking",
      "Strengthened brand presence and drove audience engagement growth",
    ],
    tags: [
      "Canva",
      "Poster Design",
      "Social Media Design",
      "Leadership",
      "Creative Content",
    ],
  },
  {
    id: 3,
    jobTitle: "Head Coordinator of Digital Publication & Public Relation",
    company: "Student Council",
    location: "Kupang, Indonesia",
    year: "2023 - 2024",
    type: "Organization",
    description:
      "Led digital communication and public relations strategy for the student council, driving engagement through social media and content.",
    bullets: [
      "Led social media and content strategy, managing design, copywriting, and campaign execution.",
      "Coordinated team output to deliver consistent and engaging communication across platforms.",
    ],
    tags: [
      "Canva",
      "Figma",
      "Poster Design",
      "Social Media Design",
      "Leadership",
      "Creative Content",
    ],
  },
  {
    id: 4,
    jobTitle: "Member of Digital Publication & Public Relation",
    company: "Student Council",
    location: "Kupang, Indonesia",
    year: "2022 - 2023",
    type: "Organization",
    description:
      "Contributed to digital presence and team communications as part of the Digital Publication & Public Relation Division.",
    bullets: [
      "Designed social media assets to support content campaigns",
      "Collaborated with the team to maintain consistent and engaging communication",
    ],
    tags: [
      "Canva",
      "Poster Design",
      "Social Media Design",
      "Creative Content",
    ],
  },
];
