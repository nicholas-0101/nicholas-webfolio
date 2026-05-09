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
      "Brought the hotel's visual identity to life across social media and print, designing assets that strengthened brand recognition and drove measurable engagement growth.",
    bullets: [
      "Designed social media graphics, promotional posters, and digital banners for the hotel's marketing campaigns, applying consistent typography, color, and layout to reinforce brand identity, contributing to a 40% increase in brand engagement.",
      "Produced visual content for the hotel's social media channels, including post graphics, story templates, and event visuals, ensuring cohesive visual aesthetics across all platforms to support promotional goals.",
      "Developed and maintained a consistent visual language across all hotel marketing materials by applying structured design principles in typography, color, and layout to strengthen brand recognition.",
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
      "Led the creative and digital communications arm of the Eagles Basketball Team, building a consistent visual presence that strengthened team identity across social media.",
    bullets: [
      "Led content strategy and visual direction for the Eagles Basketball Team's digital presence, coordinating digital publication and public relations across social media channels to strengthen team identity and audience reach.",
      "Designed and managed promotional materials and campaigns, overseeing content planning, scheduling, and performance tracking to strengthen the team's brand presence and grow audience engagement across digital platforms.",
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
      "Directed the council's digital communications strategy, leading a team responsible for all social media output, visual content, and public-facing campaigns throughout the academic year.",
    bullets: [
      "Led social media and content strategy for the Student Council's Digital Publication & Public Relation Division, managing design, copywriting, and campaign execution to deliver consistent and impactful communications to the school community.",
      "Coordinated team output across the division to maintain publishing schedules and deliver consistent and engaging communication that supported the Student Council's events and initiatives throughout the academic year.",
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
      "Contributed to the council's digital presence as part of the Digital Publication & Public Relation Division, supporting content production and campaign execution as a collaborative team member.",
    bullets: [
      "Supported content creation and campaign execution as part of the Digital Publication & PR Division, collaborating with the team to produce cohesive and engaging content that reinforced the Student Council's brand and communication goals.",
    ],
    tags: ["Canva", "Poster Design", "Social Media Design", "Team Collaboration", "Creative Content"],
  },
];
