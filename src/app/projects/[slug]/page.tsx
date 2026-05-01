import { projects } from "@/data/projects";
import { tagIcons } from "@/data/tagIcons";
import Image from "next/image";
import Navbar from "@/app/coreComponents/navbar";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import BackButton from "./BackButton";
import ProjectGallery from "./ProjectGallery";
import ScrollToTop from "./ScrollToTop";
import Footer from "@/app/coreComponents/footer";
import {
  MotionSection,
  MotionFade,
} from "@/components/motion/MotionSection";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white">
      <ScrollToTop />
      <Navbar />

      <div className="relative bg-[#0a0a0a] grain w-full">
        <div className="pt-32 pb-24 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
          {/* Back Button */}
          <MotionFade className="mb-8">
            <BackButton />
          </MotionFade>

          {/* Title */}
          <div className="mb-12 md:mb-16">
            <MotionFade
              as="h1"
              className="text-[#FF4D00] text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              }}
            >
              {project.title.toUpperCase()}
            </MotionFade>
          </div>

          {/* Project Thumbnail */}
          <MotionFade delay={0.2}>
            <div className="relative w-full aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-[#FF4D00]/50 transition-all duration-500 mb-16 md:mb-24 shadow-[0_20px_50px_-20px_rgba(255,77,0,0.1)]">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                quality={80}
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/10 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
          </MotionFade>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Main Content (Left) */}
            <div className="lg:col-span-2">
              {/* Metadata Grid */}
              <MotionFade delay={0.3}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  <div>
                    <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                      Work for
                    </h3>
                    <p className="text-white text-base font-medium">
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                      Year
                    </h3>
                    <p className="text-white text-base font-medium">
                      {project.year}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                      Deliverables
                    </h3>
                    <p className="text-white text-base font-medium">
                      {project.deliverables}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                      Platform
                    </h3>
                    <p className="text-white text-base font-medium">
                      {project.platform}
                    </p>
                  </div>
                </div>
              </MotionFade>

              {/* Technologies */}
              <div className="mb-16">
                <MotionFade
                  as="h3"
                  className="text-[#666] text-sm tracking-wider uppercase mb-6 font-semibold"
                >
                  Technologies
                </MotionFade>
                <div className="flex flex-wrap gap-3">
                  {project.techs.map((tech, i) => {
                    const tagInfo = tagIcons[tech];
                    const TagIcon = tagInfo?.icon;
                    return (
                      <MotionFade key={tech} delay={0.1 + i * 0.05}>
                        <span className="inline-flex items-center gap-2 text-[#999] text-xs px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] whitespace-nowrap hover:text-white hover:border-[#FF4D00]/20 hover:bg-[#FF4D00]/[0.06] transition-all duration-300">
                          {TagIcon && (
                            <TagIcon
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{ color: tagInfo?.color }}
                            />
                          )}
                          {tech}
                        </span>
                      </MotionFade>
                    );
                  })}
                </div>
              </div>

              {/* Content Section: Description */}
              {project.description && (
                <div className="mb-16">
                  <MotionFade
                    as="h2"
                    className="text-[#FF4D00] text-3xl md:text-4xl tracking-wider mb-6"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    }}
                  >
                    DESCRIPTION
                  </MotionFade>
                  <MotionFade delay={0.1}>
                    <p className="text-[#ccc] text-base leading-relaxed max-w-3xl whitespace-pre-line">
                      {project.description}
                    </p>
                  </MotionFade>
                </div>
              )}

              {/* Project Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <ProjectGallery gallery={project.gallery} projectTitle={project.title} />
              )}
            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 flex flex-col gap-12">
                {/* Links */}
                {(project.demoLink ||
                  project.demoLinks ||
                  project.githubLink) && (
                  <MotionFade delay={0.4}>
                    <h3 className="text-[#666] text-sm tracking-wider uppercase mb-6 font-semibold">
                      Live Links
                    </h3>
                    <div className="flex flex-col gap-4 items-stretch">
                      {project.demoLinks &&
                        project.demoLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 w-fit transition-all duration-300"
                          >
                            <span className="text-sm font-medium text-[#ccc] group-hover:text-[#FF4D00] transition-colors">
                              {link.label}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-[#FF4D00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </a>
                        ))}
                      {!project.demoLinks && project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 w-fit transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-[#ccc] group-hover:text-[#FF4D00] transition-colors">
                            View Live Project
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#FF4D00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 w-fit transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-[#ccc] group-hover:text-[#FF4D00] transition-colors">
                            Source Code
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-[#FF4D00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      )}
                    </div>
                  </MotionFade>
                )}

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                  <MotionFade delay={0.5}>
                    <h3 className="text-[#666] text-sm tracking-wider uppercase mb-6 font-semibold">
                      More Projects
                    </h3>
                    <div className="flex flex-col gap-6">
                      {otherProjects.map((op, i) => (
                        <MotionFade key={op.id} delay={0.6 + i * 0.1}>
                          <Link
                            key={op.id}
                            href={`/projects/${op.slug}`}
                            scroll={false}
                            data-cursor="view"
                            className="group flex flex-col bg-[#111111] rounded-xl border border-white/5 hover:border-[#FF4D00]/30 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,77,0,0.15)] overflow-hidden"
                          >
                            {/* Project Thumbnail */}
                            <div className="relative w-full aspect-video bg-[#1a1a1a] overflow-hidden border-b border-white/5 group-hover:border-[#FF4D00]/30 transition-colors duration-300 ease-in-out">
                              <Image
                                src={op.thumbnail}
                                alt={op.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 400px"
                                quality={70}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/5 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col">
                              <h4
                                className="text-white text-lg tracking-wider mb-2 group-hover:text-[#FF4D00] transition-colors duration-300 ease-in-out"
                                style={{
                                  fontFamily:
                                    "var(--font-bebas), 'Bebas Neue', sans-serif",
                                }}
                              >
                                {op.title}
                              </h4>
                              <p className="text-[#666] text-xs line-clamp-2 leading-relaxed">
                                {op.description}
                              </p>
                            </div>
                          </Link>
                        </MotionFade>
                      ))}
                    </div>
                  </MotionFade>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
