import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "HOME", href: "#hero", hasChevron: true },
  { name: "ABOUT US", href: "#about", hasChevron: false },
  { name: "SERVICES", href: "#skills", hasChevron: true },
  { name: "PROJECT", href: "#projects", hasChevron: true },
  { name: "BLOG", href: "#timeline", hasChevron: true },
  { name: "CONTACT", href: "#contact", hasChevron: false },
];

const scrollToTarget = (href) => {
  const target = document.querySelector(href);
  if (!target) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(target, {
      offset: -80,
      duration: 1.15,
    });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

const LogoIcon = () => (
  <div className="mr-2.5 grid grid-cols-3 gap-[2.5px] w-[19px] h-[19px]">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="bg-[#ff8c00] rounded-[1.2px]" />
    ))}
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setHidden(currentY > lastScrollY && currentY > 300);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <Motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--line)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-[22px] lg:px-10">
          {/* Logo */}
          <button
            onClick={() => scrollToTarget("#hero")}
            className="cursor-hover-target flex items-center group"
          >
            <LogoIcon />
            <span
              className="text-[21px] font-extrabold tracking-tight text-[var(--text)] transition-colors duration-300 group-hover:text-[#ff8c00]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Indrajit
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToTarget(link.href)}
                className="group flex items-center gap-[3px] text-[11.5px] font-bold tracking-[0.1em] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text)]"
              >
                {link.name}
                {link.hasChevron && (
                  <FiChevronDown className="text-[12px] opacity-70 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/resume.pdf"
            download
            className="cursor-hover-target hidden items-center justify-center rounded-[4px] bg-black px-[22px] py-[11px] text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#ff8c00] lg:inline-flex shadow-sm"
          >
            Download CV
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-hover-target relative z-[100] inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX className="text-lg text-white" />
            ) : (
              <FiMenu className="text-lg" />
            )}
          </button>
        </div>
      </Motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="nav-overlay flex flex-col items-start justify-center px-8"
          >
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <Motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      setTimeout(() => scrollToTarget(link.href), 400);
                    }}
                    className="flex items-baseline"
                  >
                    <span
                      className="mr-3 text-sm font-semibold text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      0{index + 1}
                    </span>
                    {link.name}
                  </a>
                </Motion.div>
              ))}
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-10"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-[4px] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-black transition-colors hover:bg-[#ff8c00] hover:text-white"
              >
                Download CV
              </a>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
