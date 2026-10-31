import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import SplitText from "../components/reactbits/SplitText";
import BlurText from "../components/reactbits/BlurText";
import {
  FiArrowUpRight,
  FiGithub,
  FiX,
  FiFolder,
  FiLayers,
  FiGrid,
  FiMaximize2,
  FiExternalLink,
  FiCheckCircle,
  FiCompass,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "IDR Tech",
    badge: "Featured Agency",
    isMain: true,
    type: "Web Studio & Engineering Agency",
    image: "/idrtech.png",
    cardType: "photo",
    archiveCode: "REG // 01-A",
    year: "2026",
    tagline: "High-performance digital web agency platform",
    description:
      "A high-performance digital web agency platform building custom UI, rapid full-stack applications, and conversion-ready systems. Engineered with performance-obsessed front-end design, bespoke UI layouts, smooth interactive animations, and custom full-stack solutions.",
    detail:
      "IDR Tech delivers world-class web experiences engineered for real business growth. Built with performance-obsessed front-end design (<2s load times, 98+ score), bespoke UI layouts, smooth interactive animations, modern service showcases, and custom full-stack solutions.",
    tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "MongoDB", "High Performance"],
    link: "https://idrtech.in",
    github: "https://github.com/Indrajitpadhiyar",
    accentColor: "#1d4ed8", // Vivid cobalt blue
  },
  {
    id: 2,
    title: "VANTA",
    badge: "Streetwear Drop",
    isMain: false,
    type: "Next-Gen Streetwear & Lifestyle Storefront",
    image: "/vanta.png",
    cardType: "ticket",
    archiveCode: "DOC // 14-DAY",
    year: "2026",
    tagline: "Editorial streetwear e-commerce experience",
    description:
      "An editorial streetwear e-commerce experience featuring interactive lookbooks, fluid product showcases, 3D branded intro, and dynamic cart flows tailored for modern lifestyle commerce.",
    detail:
      "VANTA merges modern streetwear aesthetics with cutting-edge front-end engineering. The platform features curated collection drops, editorial lookbook browsing, interactive 3D logo loader, custom bag management, and smooth micro-interactions tailored for high conversion.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "3D WebGL"],
    link: "https://vanta-rung.onrender.com/",
    github: "https://github.com/Indrajitpadhiyar",
    accentColor: "#0284c7", // Sky blue
  },
  {
    id: 3,
    title: "Fashion Shop",
    badge: "Luxury Catalog",
    isMain: false,
    type: "Luxury Fashion E-Commerce Website",
    image: "/fasion.png",
    cardType: "specimen",
    archiveCode: "SPEC // 78-F",
    year: "2025",
    tagline: "Luxury clothing collections & immersive UI",
    description:
      "A modern fashion e-commerce platform featuring dedicated Men and Women collections, premium product showcases, smooth animations, and a visually engaging shopping experience.",
    detail:
      "Fashion Shop is a premium fashion-focused website designed to showcase modern clothing collections with an elegant and immersive user experience. The platform features dedicated sections for men's and women's fashion, interactive hover effects, smooth transitions, high-quality imagery, and conversion-focused call-to-action elements.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Responsive Design"],
    link: "https://fashion-s5r1.onrender.com/",
    github: "https://github.com/Indrajitpadhiyar",
    accentColor: "#4338ca", // Indigo
  },
  {
    id: 4,
    title: "Space Explorer",
    badge: "Creative Lab",
    isMain: false,
    type: "Cosmic Simulation & 3D WebGL",
    image: "/space.png",
    cardType: "terminal",
    archiveCode: "UNIT // 9-SYS",
    year: "2025",
    tagline: "Planetary orbit mechanics & real-time canvas visualizer",
    description:
      "An interactive cosmic visualizer mapping celestial bodies, planetary trajectories, and realistic space atmospheres powered by WebGL and custom canvas shaders.",
    detail:
      "A deep dive into WebGL, math-driven orbits, dynamic celestial illumination, and immersive space mechanics. Built with performant render loops and fluid camera transitions.",
    tech: ["Three.js", "React", "GSAP", "Tailwind CSS", "Shaders"],
    link: "https://github.com/Indrajitpadhiyar",
    github: "https://github.com/Indrajitpadhiyar",
    accentColor: "#0f766e", // Deep teal console
  },
  {
    id: 5,
    title: "Bagify Lifestyle",
    badge: "Product UI",
    isMain: false,
    type: "Minimalist Carry Goods Storefront",
    image: "/bagify.png",
    cardType: "folder",
    archiveCode: "REG // 44-L",
    year: "2025",
    tagline: "Clean architecture, rapid search & checkout flows",
    description:
      "Modern lifestyle luggage and bags storefront engineered with minimal typography, instant filtering, streamlined checkout flows, and responsive state architecture.",
    detail:
      "Engineered for speed and tactile interaction. Features custom bag configurator, category filtering with zero layout-shift, and responsive drawer cart flows.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    link: "https://github.com/Indrajitpadhiyar",
    github: "https://github.com/Indrajitpadhiyar",
    accentColor: "#b45309", // Manila amber
  },
];

/* ──────────────── Full Case Study Modal ──────────────── */
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
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="cursor-hover-target absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--black)] text-white transition-transform hover:scale-110"
          aria-label="Close project details"
        >
          <FiX />
        </button>

        <div className="grid max-h-[90vh] overflow-auto lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[320px] overflow-hidden bg-black/5">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff8c00]">
                  {project.archiveCode}
                </span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  {project.year}
                </span>
              </div>

              <h3
                className="mt-3 text-3xl font-bold tracking-tight text-[var(--text)] lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {project.type}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.detail}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-1 font-mono text-[11px] text-[var(--text)]"
                  >
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
                className="cursor-hover-target inline-flex items-center gap-2 rounded-full bg-[var(--black)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8c00] hover:text-black hover:scale-105"
              >
                Live Preview
                <FiArrowUpRight />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="cursor-hover-target inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--text)] transition-all hover:border-[var(--black)] hover:scale-105"
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

/* ──────────────── Main Projects Section (White Theme) ──────────────── */
const Projects = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [modalProject, setModalProject] = useState(null);

  const activeProject = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-20 text-[var(--text)] lg:py-28">
      {/* Subtle paper texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* ──────── Reference Header in White/Light Theme ──────── */}
        <header className="border-b border-[var(--line-strong)] pb-10">
          {/* Top meta breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#ff8c00]">SOURCE</span>
              <span>/</span>
              <span>DRAWER</span>
              <span>/</span>
              <span>REGISTRY</span>
              <span>/</span>
              <span className="text-[var(--text)] font-semibold">RESIDUE</span>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <FiLayers className="text-sm opacity-80" />
                <FiGrid className="text-sm opacity-80" />
              </div>
              <div className="text-right">
                <p className="font-bold text-[var(--text)]">Archive Assemblage</p>
                <p className="text-[10px] text-[var(--text-muted)]">
                  Oct 2026 // Production Release
                </p>
              </div>
            </div>
          </div>

          {/* Large Serif Title */}
          <h2
            className="mt-8 text-4xl font-normal leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl max-w-4xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <SplitText
              text="Real projects, presented with depth not just thumbnails."
              splitBy="words"
              delay={40}
              className="inline-block"
            />
          </h2>

          {/* Two-Column Editorial Text */}
          <div className="mt-8 grid gap-8 text-xs sm:text-[13px] leading-relaxed text-[var(--text-secondary)] sm:grid-cols-2 lg:max-w-4xl">
            <p>
              This section presents a compiled set of production builds and engineered systems
              organized according to performance benchmarks and bespoke UI design schemes. Each
              item listed within this repository is referenced by abstract identifiers and catalogued
              with full-stack architectural context.
            </p>
            <p>
              The listed documents represent active digital products originating from commercial
              web agency platforms, editorial lookbooks, and high-fidelity client deployments.
              Click any project record in the tray below to spotlight its high-resolution view and
              inspect live engineering specifications.
            </p>
          </div>
        </header>

        {/* ──────── Main Showcase Stage (Bigger Image + Bigger Information Card Beside It) ──────── */}
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* ── Left Column: BIG Featured Image (Columns 1-7) ── */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl bg-white p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_35px_90px_rgba(0,0,0,0.14)]"
                >
                  {/* Top record bar on image */}
                  <div className="mb-3.5 flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)] border-b border-black/5 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ff8c00] animate-pulse" />
                      <span className="font-bold text-[var(--text)]">
                        {activeProject.archiveCode}
                      </span>
                      <span>•</span>
                      <span>{activeProject.title}</span>
                    </div>
                    <span className="rounded-full bg-[var(--bg)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--text)]">
                      {activeProject.badge}
                    </span>
                  </div>

                  {/* The BIG Image Display */}
                  <div
                    onClick={() => setModalProject(activeProject)}
                    className="cursor-hover-target relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/5 cursor-pointer"
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Hover glance button */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="rounded-full bg-white/95 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <FiMaximize2 className="text-sm" />
                        Click to Expand Case Study
                      </span>
                    </div>
                  </div>

                  {/* Bottom Caption on the Photo */}
                  <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text)]">
                      {activeProject.tagline}
                    </span>
                    <span className="text-[var(--text-muted)]">
                      RELEASE // {activeProject.year}
                    </span>
                  </div>
                </Motion.div>
              </AnimatePresence>
            </div>

            {/* ── Right Column: BIG Information Card (Columns 8-12) ── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl p-7 sm:p-9 text-white shadow-[0_25px_60px_rgba(29,78,216,0.22)] flex flex-col justify-between min-h-[460px] sm:min-h-[500px]"
                  style={{
                    backgroundColor: activeProject.accentColor || "#1d4ed8",
                  }}
                >
                  <div>
                    {/* Top Row: Title + Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        <SplitText
                          key={activeProject.id}
                          text={activeProject.title}
                          splitBy="characters"
                          delay={30}
                          className="inline-block"
                        />
                      </h3>
                      <span className="rounded-full bg-white/20 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white shrink-0">
                        {activeProject.badge}
                      </span>
                    </div>

                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-white/75 font-medium">
                      {activeProject.type}
                    </p>

                    {/* Animated Description Text with React Bits BlurText */}
                    <div className="mt-6 text-sm sm:text-[15px] leading-relaxed text-white/95 min-h-[70px]">
                      <BlurText
                        key={activeProject.id}
                        text={activeProject.description}
                        animateBy="words"
                        delay={25}
                      />
                    </div>

                    {/* Registry Metadata */}
                    <div className="mt-6 flex items-center justify-between font-mono text-xs text-white/70 border-t border-white/20 pt-4">
                      <span>RECORD: {activeProject.archiveCode}</span>
                      <span className="font-bold text-white">PROD {activeProject.year}</span>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-black/20 px-3 py-1 font-mono text-[11px] text-white/90"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Yellow Pill + Circular Accent + Expand */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/20">
                    {/* Yellow pill button */}
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-hover-target flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-full bg-[#facc15] hover:bg-[#eab308] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                    >
                      <FiFolder className="text-base" />
                      <span>Live Preview</span>
                    </a>

                    {/* Circular Action Button (GitHub) */}
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="cursor-hover-target inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 shrink-0"
                    >
                      <FiGithub className="text-lg" />
                    </a>

                    {/* Case Study Button */}
                    <button
                      type="button"
                      onClick={() => setModalProject(activeProject)}
                      className="cursor-hover-target inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                    >
                      <span>Case Study</span>
                      <FiMaximize2 className="text-sm" />
                    </button>
                  </div>
                </Motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ──────── Dedicated Archival Tray (Cards Placed in Different Place, NOT Behind Main Card!) ──────── */}
        <div className="mt-14 border-t border-[var(--line-strong)] pt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff8c00]">
                ARCHIVAL RECORDS TRAY
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Click any record below to bring it to the main spotlight. Unselected records fade.
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              0{activeProject.id} of 0{projects.length} ACTIVE
            </span>
          </div>

          {/* Tray Grid: Every card is clearly displayed in its own space, NEVER behind the main card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {projects.map((project) => {
              const isSelected = selectedId === project.id;

              return (
                <Motion.div
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className={`cursor-hover-target relative cursor-pointer rounded-2xl p-3 sm:p-3.5 transition-all select-none ${
                    isSelected
                      ? "bg-white ring-2 ring-[#ff8c00] shadow-[0_15px_35px_rgba(255,140,0,0.18)] -translate-y-1"
                      : "bg-[var(--surface)] hover:bg-white border border-[var(--line-strong)] opacity-50 hover:opacity-100 hover:shadow-md"
                  }`}
                >
                  {/* Selected Pill Indicator */}
                  {isSelected && (
                    <span className="absolute -top-2.5 right-3 rounded-full bg-[#ff8c00] px-2 py-0.5 font-mono text-[9px] font-bold text-black shadow-sm">
                      ACTIVE
                    </span>
                  )}

                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black/5 border border-black/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* Card Info */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
                      <span>0{project.id}</span>
                      <span>{project.year}</span>
                    </div>
                    <p className="mt-1 font-bold text-xs sm:text-sm text-[var(--text)] truncate">
                      {project.title}
                    </p>
                    <p className="font-mono text-[9px] text-[var(--text-secondary)] truncate">
                      {project.type}
                    </p>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Modal */}
      <AnimatePresence>
        {modalProject && (
          <ProjectModal
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
