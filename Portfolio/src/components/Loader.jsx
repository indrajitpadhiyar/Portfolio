import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import SplitText from "./reactbits/SplitText";

const SHUTTER_SLATS = 5;

const PHRASES = [
  { text: "PORTFOLIO // 2026", range: [0, 30] },
  { text: "INDRAJIT PADHIYAR", range: [30, 65] },
  { text: "CREATIVE DEVELOPER", range: [65, 92] },
  { text: "EXPERIENCE ARCHITECTURE", range: [92, 100] },
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Lock body scroll while loader is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (isFinished) {
      document.body.style.overflow = "";
    }
  }, [isFinished]);

  // Smooth realistic progress counter
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      // Natural variable speed pacing
      const increment = Math.floor(Math.random() * 4) + 1;
      start += increment;

      if (start >= 100) {
        start = 100;
        setProgress(100);
        clearInterval(interval);

        // Allow user to register 100% before shutter lifts
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 900); // Wait for shutter exit animation
        }, 400);
      } else {
        setProgress(start);
      }
    }, 32);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Current active phrase
  const currentPhrase =
    PHRASES.find((p) => progress >= p.range[0] && progress <= p.range[1])?.text ||
    "PORTFOLIO // 2026";

  return (
    <AnimatePresence>
      {!isFinished && (
        <Motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.4 },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden bg-transparent select-none"
        >
          {/* ────── 5 Vertical Shutter Slats (Curtain Exit) ────── */}
          <div className="absolute inset-0 flex w-full h-full pointer-events-none">
            {Array.from({ length: SHUTTER_SLATS }).map((_, i) => (
              <Motion.div
                key={`shutter-${i}`}
                custom={i}
                initial={{ y: "0%" }}
                exit={{
                  y: "-100%",
                  transition: {
                    duration: 0.85,
                    delay: i * 0.08,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                className="relative h-full flex-1 bg-[#0a0a0a] border-r border-white/[0.04] last:border-r-0"
              >
                {/* Subtle orange accent sweep at bottom of each shutter slat */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff8c00]/60 to-transparent" />
              </Motion.div>
            ))}
          </div>

          {/* ────── Loader Content (Fade out just before shutters lift) ────── */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -30,
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 lg:p-14 text-white"
          >
            {/* Top Bar: Archival System Metadata */}
            <header className="flex items-center justify-between font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/50">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff8c00] animate-pulse" />
                <span className="font-bold text-white">SYS.INIT // REGISTRY 2026</span>
              </div>
              <div className="hidden sm:block text-white/40">
                LOCATION: INDIA // WORLDWIDE AVAILABLE
              </div>
              <div className="font-semibold text-white/70">v2.6.0</div>
            </header>

            {/* Center Area: Shutter Type Text Animation */}
            <div className="my-auto mx-auto w-full max-w-4xl text-center">
              {/* Monospace pre-tag */}
              <Motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-[#ff8c00]"
              >
                [ ARCHIVE // CURATED CRAFT ]
              </Motion.p>

              {/* Shutter Reveal Headline */}
              <div className="mt-4 min-h-[70px] sm:min-h-[90px] lg:min-h-[110px] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={currentPhrase}
                    initial={{ y: "110%", opacity: 0, rotateX: 30 }}
                    animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                    exit={{ y: "-110%", opacity: 0, rotateX: -30 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="transform-gpu will-change-transform"
                  >
                    <h1
                      className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {currentPhrase}
                    </h1>
                  </Motion.div>
                </AnimatePresence>
              </div>

              {/* Sub-line */}
              <p className="mt-4 font-mono text-[11px] sm:text-xs text-white/45 tracking-[0.2em] uppercase">
                ENGINEERING BESPOKE INTERFACES & CONVERSION-READY SYSTEMS
              </p>
            </div>

            {/* Bottom Bar: Progress Counter & Shutter Tracker */}
            <footer className="space-y-4">
              {/* Progress counter & message */}
              <div className="flex items-end justify-between font-mono">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    SYSTEM STATUS
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white/80 uppercase">
                    {progress < 100
                      ? `PREPARING ARCHIVES • ${progress}%`
                      : "ALL ASSETS VERIFIED • LAUNCHING"}
                  </p>
                </div>

                {/* Big Typographic 00-100 Counter */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter tabular-nums">
                    {String(progress).padStart(2, "0")}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold text-[#ff8c00]">
                    %
                  </span>
                </div>
              </div>

              {/* Thin Orange Progress Bar */}
              <div className="relative h-[2px] w-full overflow-hidden bg-white/10 rounded-full">
                <Motion.div
                  className="absolute left-0 top-0 h-full bg-[#ff8c00] shadow-[0_0_12px_#ff8c00]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Bottom Copyright & Skip Hint */}
              <div className="flex items-center justify-between font-mono text-[9px] text-white/30 tracking-wider">
                <span>© 2026 INDRAJIT PADHIYAR</span>
                <span className="hidden sm:inline">SMOOTH CURTAIN SHUTTER REVEAL</span>
                <span>AUTHENTICATED</span>
              </div>
            </footer>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
