import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "IDR Tech",
    badge: "Main Project",
    isMain: true,
    type: "Web Studio & Engineering Agency",
    image: "/idrtech.png",
    description:
      "A high-performance digital web agency platform building custom UI, rapid full-stack applications, and conversion-ready systems.",
    detail:
      "IDR Tech delivers world-class web experiences engineered for real business growth. Built with performance-obsessed front-end design (<2s load times, 98+ score), bespoke UI layouts, smooth interactive animations, modern service showcases, and custom full-stack solutions.",
    tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "MongoDB", "High Performance"],
    link: "https://idrtech.in",
    github: "https://github.com/Indrajitpadhiyar",
  },
  {
    id: 2,
    title: "VANTA",
    badge: "First Project",
    type: "Next-Gen Streetwear & Lifestyle Storefront",
    image: "/vanta.png",
    description:
      "An editorial streetwear e-commerce experience featuring interactive lookbooks, fluid product showcases, 3D branded intro, and dynamic cart flows.",
    detail:
      "VANTA merges modern streetwear aesthetics with cutting-edge front-end engineering. The platform features curated collection drops, editorial lookbook browsing, interactive 3D logo loader, custom bag management, and smooth micro-interactions tailored for high conversion.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Responsive Design"],
    link: "https://vanta-rung.onrender.com/",
    github: "https://github.com/Indrajitpadhiyar",
  },
  {
    id: 3,
    title: "Fashion Shop",
    badge: "2nd Project",
    type: "Luxury Fashion E-Commerce Website",
    image: "/fasion.png",
    description:
      "A modern fashion e-commerce platform featuring dedicated Men and Women collections, premium product showcases, smooth animations, and a visually engaging shopping experience.",
    detail:
      "Fashion Shop is a premium fashion-focused website designed to showcase modern clothing collections with an elegant and immersive user experience. The platform features dedicated sections for men's and women's fashion, interactive hover effects, smooth transitions, high-quality imagery, and conversion-focused call-to-action elements. Built with performance and responsiveness in mind across desktop, tablet, and mobile devices while maintaining a luxury brand identity.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "Responsive Design"
    ],
    link: "https://fashion-s5r1.onrender.com/",
    github: "https://github.com/Indrajitpadhiyar"
  }
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <Motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--black)] text-[var(--white)] transition-transform hover:scale-110"
          aria-label="Close project details"
        >
          <FiX />
        </button>

        <div className="grid max-h-[90vh] overflow-auto lg:grid-cols-[1.1fr_0.9fr]">
          {/* Image */}
          <div className="relative min-h-[280px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Details */}
          <div className="p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {project.type}
            </p>
            <h3
              className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
              {project.detail}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech?.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="cta-pill cta-pill-black"
              >
                Live Preview
                <FiArrowUpRight />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="cta-pill cta-pill-outline"
              >
                Source Code
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-20 lg:py-32">
      {/* Section Header */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="section-label">Selected Work</span>
            <h2
              className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Real projects, presented with{" "}
              <span className="italic text-[var(--text-secondary)]">depth</span>{" "}
              not just thumbnails.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--text-secondary)] lg:text-right">
            Each project is framed like a case study — curated instead of rushed.
          </p>
        </Motion.div>
      </div>

      {/* Project Cards */}
      <div className="mx-auto mt-14 max-w-[1400px] space-y-6 px-6 lg:px-10">
        {projects.map((project, index) => (
          <Motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] transition-all duration-500 hover:border-[var(--line-strong)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
          >
            <div
              className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "direction-rtl" : ""
                }`}
            >
              {/* Image */}
              <div
                className={`img-reveal relative min-h-[300px] overflow-hidden sm:min-h-[400px] ${index % 2 === 1 ? "lg:order-2" : ""
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
                {/* Hover overlay */}
                <div
                  className="project-overlay cursor-hover-target"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>View Project</span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-between p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""
                  }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {project.badge && (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.isMain
                          ? "bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30"
                          : "bg-[var(--line)] text-[var(--text-secondary)] border border-[var(--line-strong)]"
                          }`}
                      >
                        {project.isMain ? "★ " : ""}
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    {project.type}
                  </p>
                  <h3
                    className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[var(--text-secondary)] lg:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech?.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-pill cta-pill-black"
                  >
                    Live Preview
                    <FiArrowUpRight />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="cta-pill cta-pill-outline"
                  >
                    Case Study
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-pill cta-pill-outline"
                  >
                    GitHub
                    <FiGithub />
                  </a>
                </div>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;