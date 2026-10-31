import React, { useEffect, useRef } from "react";
import { motion as Motion, useInView, useAnimation } from "framer-motion";

/**
 * BlurText component inspired by React Bits (reactbits.dev/text-animations/blur-text)
 * Words or characters de-blur and slide in smoothly.
 */
const BlurText = ({
  text = "",
  delay = 40,
  className = "",
  animateBy = "words", // 'words' | 'characters'
  direction = "bottom", // 'top' | 'bottom'
  threshold = 0.1,
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const items = animateBy === "words" ? text.split(" ") : text.split("");

  const yOffset = direction === "top" ? -20 : 20;

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {items.map((item, index) => {
        const isSpace = item === " ";
        return (
          <span key={`${item}-${index}`} className="inline-block">
            <Motion.span
              custom={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)", y: yOffset },
                visible: (i) => ({
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: (i * delay) / 1000,
                    ease: [0.25, 1, 0.5, 1],
                  },
                }),
              }}
              onAnimationComplete={() => {
                if (index === items.length - 1 && onAnimationComplete) {
                  onAnimationComplete();
                }
              }}
              className="inline-block will-change-[filter,transform,opacity]"
            >
              {isSpace ? "\u00A0" : item}
            </Motion.span>
            {animateBy === "words" && index < items.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
};

export default BlurText;

