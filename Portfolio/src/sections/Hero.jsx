import React, { useRef, useState, useEffect } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiGithub, FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Infinite typewriter animation for mobile top-left corner
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typewriterPhrases = [
    "I'm a Full Stack Developer",
    "MERN Stack Specialist",
    "UI/UX Motion Designer",
  ];

  useEffect(() => {
    const currentPhrase = typewriterPhrases[typingIndex % typewriterPhrases.length];
    let timer;

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setTypingIndex((prev) => prev + 1);
      timer = setTimeout(() => {}, 350);
    } else {
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typingIndex]);

  // Parallax / Scroll Animations for desktop depth
  const asteriskY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const asteriskRotate = useTransform(scrollYProgress, [0, 1], [25, 45]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  const scrollToAbout = () => {
    const target = document.querySelector("#about");
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -80, duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -40, duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-[#f4eee8]">
      {/* ═══════════════════════════════════════════════════════════════════════════
          MOBILE HERO VIEW (Top-Left Infinite Typewriter Animation + Clean Face)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <div className="relative flex flex-col w-full md:hidden pt-20 overflow-hidden bg-[#f4eee8]">
        {/* Top-Left Corner Animated Typewriter Headline */}
        <div className="relative z-30 w-full px-6 pt-2 pb-1 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 backdrop-blur-sm px-3.5 py-1 shadow-xs mb-2">
            <span className="h-2 w-2 rounded-full bg-[#ff8c00] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] uppercase">
              Full Stack Developer
            </span>
          </div>

          <div className="min-h-[50px] flex items-center">
            <h1
              className="text-[26px] sm:text-[30px] font-black tracking-tight text-[#050505] leading-[1.12]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>{typedText}</span>
              <span className="ml-1 inline-block w-[3px] h-[24px] bg-[#ff8c00] animate-pulse align-middle" />
            </h1>
          </div>
        </div>

        {/* Portrait & Background Ornament Stage */}
        <div className="relative w-full h-[470px] overflow-hidden flex flex-col items-center justify-end">
          {/* Orange Asterisk Ornament in Background */}
          <div className="absolute left-[8%] top-[38%] -translate-y-1/2 z-0 select-none pointer-events-none">
            <svg
              width="280"
              height="280"
              viewBox="0 0 100 100"
              fill="none"
              className="text-[#ff8c00] w-[260px] h-[260px] opacity-90"
            >
              <g transform="rotate(25 50 50)">
                <rect
                  x="42"
                  y="5"
                  width="16"
                  height="90"
                  rx="8"
                  fill="currentColor"
                />
                <rect
                  x="5"
                  y="42"
                  width="90"
                  height="16"
                  rx="8"
                  fill="currentColor"
                />
                <rect
                  x="42"
                  y="5"
                  width="16"
                  height="90"
                  rx="8"
                  fill="currentColor"
                  transform="rotate(45 50 50)"
                />
                <rect
                  x="42"
                  y="5"
                  width="16"
                  height="90"
                  rx="8"
                  fill="currentColor"
                  transform="rotate(-45 50 50)"
                />
              </g>
            </svg>
          </div>

          {/* Cutout Portrait Photo - Face is 100% Clear & Prominent (z-20) */}
          <div className="relative z-20 flex justify-center items-end pointer-events-none select-none">
            <img
              src="/indrajit.png"
              alt="Indrajit Padhiyar"
              className="h-[430px] w-auto max-w-none object-contain filter grayscale contrast-[1.08] brightness-[1.02]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 4%, rgba(0,0,0,0.5) 16%, black 32%)",
                maskImage:
                  "linear-gradient(to top, transparent 4%, rgba(0,0,0,0.5) 16%, black 32%)",
              }}
            />
          </div>

          {/* Circular Rotating Scroll Down Badge (z-30) */}
          <div
            onClick={scrollToAbout}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 z-[30] flex items-center justify-center w-[94px] h-[94px] cursor-pointer"
          >
            {/* Rotating text */}
            <div className="absolute inset-0 animate-spin-slow pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="badgeTextPathMobile"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text
                  className="text-[7.6px] font-bold tracking-[0.22em] fill-[#050505] uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <textPath href="#badgeTextPathMobile" startOffset="0%">
                    • SCROLL DOWN • SCROLL DOWN •
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Center orange circle with downward chevron */}
            <div className="w-[44px] h-[44px] rounded-full bg-[#ff8c00] flex items-center justify-center z-10 shadow-md">
              <FiChevronDown className="text-2xl text-white stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* Lower Introduction & Actions Frame (Matching Reference Mockup) */}
        <div className="relative z-30 px-7 pt-4 pb-12">
          <div className="max-w-md mx-auto">
            {/* Headline with orange underline bar */}
            <h2
              className="text-[34px] sm:text-[38px] font-black tracking-[-0.03em] text-[#050505] leading-[1.12]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crafting
              <br />
              <span className="relative inline-block text-[#ff8c00]">
                Digital
                <span className="absolute -bottom-1.5 left-0 w-[92%] h-[3.5px] bg-[#ff8c00] rounded-full" />
              </span>{" "}
              Experiences
            </h2>

            {/* Description (max-w-[285px] ensures exact 3-line wrap) */}
            <p
              className="mt-4 max-w-[285px] text-[15px] leading-[1.55] text-[#555555] font-normal"
              style={{ fontFamily: "var(--font-display)" }}
            >
              I build modern, scalable and user-friendly web applications with
              passion and creativity.
            </p>

            {/* Actions */}
            <div className="mt-7 flex items-center gap-3.5">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="cursor-hover-target inline-flex items-center gap-2.5 rounded-full bg-[#050505] px-7 py-3.5 text-[14px] font-bold text-white shadow-sm transition-all hover:bg-[#ff8c00] hover:text-black active:scale-95"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span>View My Work</span>
                <FiArrowRight className="text-base" />
              </a>

              <a
                href="https://github.com/Indrajitpadhiyar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="cursor-hover-target inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border border-black/15 bg-white text-[20px] text-[#050505] shadow-sm transition-all hover:border-black active:scale-95"
              >
                <FiGithub />
              </a>
            </div>
          </div>

          {/* Warm Peach/Orange Corner Wave */}
          <div className="pointer-events-none absolute bottom-0 right-0 z-0 overflow-hidden select-none">
            <svg
              width="230"
              height="140"
              viewBox="0 0 230 140"
              fill="none"
              className="opacity-80"
            >
              <path
                d="M0 140C60 140 95 105 140 95C185 85 205 105 230 75V140H0Z"
                fill="url(#peachGrad1)"
              />
              <path
                d="M45 140C95 140 125 118 165 112C205 106 215 125 230 108V140H45Z"
                fill="url(#peachGrad2)"
              />
              <defs>
                <linearGradient
                  id="peachGrad1"
                  x1="115"
                  y1="75"
                  x2="230"
                  y2="140"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffb366" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#ffa040" stopOpacity="0.18" />
                </linearGradient>
                <linearGradient
                  id="peachGrad2"
                  x1="135"
                  y1="108"
                  x2="230"
                  y2="140"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ff9933" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#ff8000" stopOpacity="0.22" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {/* ═══════════════════════════════════════════════════════════════════════════
          DESKTOP HERO VIEW (Preserved 100% Exactly as Desktop Screenshot)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <div className="relative hidden md:flex h-screen w-full items-center justify-center overflow-hidden bg-[#f4eee8] pt-20">
        {/* Giant Orange Asterisk Shape (Background Ornament - Behind Text) */}
        <Motion.div
          style={{ y: asteriskY, rotate: asteriskRotate }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[15%] md:left-[24%] top-[50%] -translate-y-1/2 z-0 select-none pointer-events-none"
        >
          <svg
            width="420"
            height="420"
            viewBox="0 0 100 100"
            fill="none"
            className="text-[#ff8c00] w-[360px] h-[360px] lg:w-[420px] lg:h-[420px]"
          >
            <g transform="rotate(25 50 50)">
              <rect
                x="42"
                y="5"
                width="16"
                height="90"
                rx="8"
                fill="currentColor"
              />
              <rect
                x="5"
                y="42"
                width="90"
                height="16"
                rx="8"
                fill="currentColor"
              />
              <rect
                x="42"
                y="5"
                width="16"
                height="90"
                rx="8"
                fill="currentColor"
                transform="rotate(45 50 50)"
              />
              <rect
                x="42"
                y="5"
                width="16"
                height="90"
                rx="8"
                fill="currentColor"
                transform="rotate(-45 50 50)"
              />
            </g>
          </svg>
        </Motion.div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full max-w-[1400px] px-6">
          {/* Massive Text Container */}
          <div className="relative w-full flex flex-col items-center justify-center mb-10">
            {/* Lower Text Layer (Filled Black) - Behind Portrait */}
            <Motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hero-text-line flex flex-col items-center text-center select-none relative z-10"
            >
              <span>I'M A FULLSTACK</span>
              <span>DEVELOPER</span>
            </Motion.div>

            {/* Upper Text Layer (White Outline) - In Front of Portrait */}
            <Motion.div
              style={{ y: textY }}
              className="absolute inset-0 flex flex-col items-center text-center select-none pointer-events-none z-30"
            >
              <span className="hero-text-line opacity-0">I'M A FULLSTACK</span>
              <span className="hero-text-line">
                <span className="opacity-0">DE</span>
                <span className="text-stroke-white">VELOP</span>
                <span className="opacity-0">ER</span>
              </span>
            </Motion.div>
          </div>

          {/* Portrait Image (B&W) */}
          <Motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none flex justify-center items-end"
            style={{
              width: "clamp(940px, 58vw, 1200px)",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              y: imageY,
              scale: imageScale,
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 15%)",
              maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
            }}
          >
            <img
              src="/indrajit.png"
              alt="Indrajit Padhiyar"
              className="h-auto w-full object-cover object-top filter grayscale contrast-[1.08] brightness-[1.02]"
              style={{
                dropShadow: "0 25px 50px rgba(0,0,0,0.15)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 18%)",
                maskImage: "linear-gradient(to top, transparent 0%, black 18%)",
              }}
            />
          </Motion.div>

          {/* Rotating Circular Scroll Badge */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[35] flex items-center justify-center w-[104px] h-[104px] md:w-[120px] md:h-[120px] cursor-pointer"
            onClick={scrollToAbout}
          >
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="badgeTextPathDesktop"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="text-[7.2px] font-bold tracking-[0.24em] fill-[#0a0a0a] uppercase">
                  <textPath href="#badgeTextPathDesktop" startOffset="0%">
                    • scroll down • scroll down • scroll down
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-[#ff8c00] flex items-center justify-center z-10 shadow transition-transform duration-300 hover:scale-115">
              <FiChevronDown className="text-xl text-white stroke-[2.5]" />
            </div>
          </Motion.div>
        </div>

        {/* Bottom Fade Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f4eee8] via-[#f4eee8]/80 to-transparent pointer-events-none z-[25]" />
      </div>
      {/*  */}{" "}
    </div>
  );
};

export default Hero;
