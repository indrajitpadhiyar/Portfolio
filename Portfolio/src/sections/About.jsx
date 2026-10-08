import React from "react";
import { motion as Motion } from "framer-motion";

const paragraphs = [
  "I started by learning the fundamentals in college, then moved quickly toward interactive UI where layout, animation, and usability all need to work together.",
  "My best work happens where visual taste meets engineering discipline — building interfaces that feel premium without becoming confusing or heavy.",
  "I've built storefront and product experiences for local businesses, learning to balance polish, speed, trust, and conversion in real-world constraints.",
];

const marqueeWords = [
  "MOTION DESIGN",
  "•",
  "RESPONSIVE UI",
  "•",
  "PRODUCT THINKING",
  "•",
  "CLEAN CODE",
  "•",
  "USER EXPERIENCE",
  "•",
  "FRONTEND CRAFT",
  "•",
  "STORYTELLING",
  "•",
];

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="py-20 lg:py-32">
      {/* Marquee Divider */}
      <div className="overflow-hidden border-y border-[var(--line)] py-5">
        <div className="marquee-track marquee-left">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm font-semibold tracking-[0.25em] text-[var(--text-muted)] uppercase"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="mx-auto max-w-[1400px] px-6 pt-20 lg:px-10 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left Column */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About</span>
            <h2
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              I build web experiences that feel{" "}
              <span className="italic text-[var(--text-secondary)]">
                considered
              </span>{" "}
              from first scroll to final click.
            </h2>
          </Motion.div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            {/* Pull Quote */}
            <Motion.blockquote
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-10 border-l-2 border-[var(--black)] pl-6"
            >
              <p
                className="text-2xl leading-relaxed text-[var(--text)] sm:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                }}
              >
                "The goal is not more effects. The goal is better rhythm,
                clearer focus, and a visual identity strong enough to be
                remembered."
              </p>
            </Motion.blockquote>

            {/* Body Paragraphs */}
            <div className="space-y-5">
              {paragraphs.map((text, index) => (
                <Motion.p
                  key={index}
                  custom={0.15 + index * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-base leading-7 text-[var(--text-secondary)] lg:text-lg lg:leading-8"
                >
                  {text}
                </Motion.p>
              ))}
            </div>

            {/* Stats Row */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--line)] pt-8"
            >
              {[
                { value: "10+", label: "Products shipped" },
                { value: "6", label: "Core tools" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
