import { projects } from "@/data/projects";
import { tagIcons } from "@/data/tagIcons";
import Navbar from "@/app/coreComponents/navbar";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import BackButton from "./BackButton";
import Footer from "@/app/coreComponents/footer";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white">
      <Navbar />

      <div className="relative bg-[#0a0a0a] grain w-full">
        <main className="pt-32 pb-24 px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Title */}
        <div className="mb-12 md:mb-16">
          <h1
            className="text-[#FF4D00] text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
          >
            {project.title.toUpperCase()}
          </h1>
          <p className="text-[#999] text-lg md:text-xl max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Thumbnail Placeholder */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-[#FF4D00]/50 transition-all duration-500 mb-16 md:mb-24 shadow-[0_20px_50px_-20px_rgba(255,77,0,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/10 to-transparent mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 font-bebas text-5xl tracking-[0.3em] uppercase">
              Thumbnail
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2">
            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div>
                <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                  Work for
                </h3>
                <p className="text-white text-base font-medium">{project.client}</p>
              </div>
              <div>
                <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                  Year
                </h3>
                <p className="text-white text-base font-medium">{project.year}</p>
              </div>
              <div>
                <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                  Deliverables
                </h3>
                <p className="text-white text-base font-medium">{project.deliverables}</p>
              </div>
              <div>
                <h3 className="text-[#666] text-xs tracking-wider uppercase mb-2 font-semibold">
                  Platform
                </h3>
                <p className="text-white text-base font-medium">{project.platform}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-[#666] text-sm tracking-wider uppercase mb-6 font-semibold">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techs.map((tech) => {
                  const tagInfo = tagIcons[tech];
                  const TagIcon = tagInfo?.icon;
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 text-[#999] text-xs px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] whitespace-nowrap hover:text-white hover:border-[#FF4D00]/20 hover:bg-[#FF4D00]/[0.06] transition-all duration-300"
                    >
                      {TagIcon && (
                        <TagIcon
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: tagInfo?.color }}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Content Section: Challenge */}
            {project.challenge && project.challenge.length > 0 && (
              <div className="mb-16">
                <h2
                  className="text-[#FF4D00] text-3xl md:text-4xl tracking-wider mb-6"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  CHALLENGE
                </h2>
                <ul className="space-y-4">
                  {project.challenge.map((point, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="text-[#FF4D00] mt-1.5">•</span>
                      <span className="text-[#ccc] text-base leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Image Gallery Placeholder */}
            <div className="border-t border-white/5 pt-16">
              <h2
                className="text-white text-2xl tracking-wider mb-8"
                style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
              >
                PROJECT GALLERY
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-[4/3] bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FF4D00]/50 transition-all duration-300 group"
                  >
                    <div className="absolute inset-0 bg-[#FF4D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#444] text-sm uppercase tracking-widest">
                        Image {i}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-12">
              {/* Links */}
              {(project.demoLink || project.githubLink) && (
                <div>
                  <h3 className="text-[#666] text-sm tracking-wider uppercase mb-6 font-semibold">
                    Live Links
                  </h3>
                  <div className="flex flex-col gap-4 items-stretch">
                    {project.demoLink && (
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
                </div>
              )}

              {/* Other Projects */}
              {otherProjects.length > 0 && (
                <div>
                  <h3 className="text-[#666] text-sm tracking-wider uppercase mb-6 font-semibold">
                    More Projects
                  </h3>
                  <div className="flex flex-col gap-6">
                    {otherProjects.map((op) => (
                      <Link
                        key={op.id}
                        href={`/projects/${op.slug}`}
                        data-cursor="view"
                        className="group flex flex-col bg-[#111111] rounded-xl border border-white/5 hover:border-[#FF4D00]/30 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,77,0,0.15)] overflow-hidden"
                      >
                        {/* Thumbnail Placeholder */}
                        <div className="relative w-full aspect-video bg-[#1a1a1a] overflow-hidden border-b border-white/5 group-hover:border-[#FF4D00]/30 transition-colors duration-300 ease-in-out">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/5 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/10 font-bebas text-xl tracking-widest uppercase">
                              Thumbnail
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col">
                          <h4
                            className="text-white text-lg tracking-wider mb-2 group-hover:text-[#FF4D00] transition-colors duration-300 ease-in-out"
                            style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                          >
                            {op.title}
                          </h4>
                          <p className="text-[#666] text-xs line-clamp-2 leading-relaxed">
                            {op.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      </div>
      
      <Footer />
    </div>
  );
}
