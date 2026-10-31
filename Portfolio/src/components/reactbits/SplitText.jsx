import React, { useEffect, useRef } from "react";
import { motion as Motion, useInView, useAnimation } from "framer-motion";

/**
 * SplitText component inspired by React Bits (reactbits.dev/text-animations/split-text)
 * Animates text character-by-character or word-by-word through an overflow-hidden shutter mask.
 */
const SplitText = ({
  text = "",
  className = "",
  delay = 35,
  splitBy = "characters", // 'characters' | 'words'
  animationFrom = { opacity: 0, y: "110%", rotateX: 35 },
  animationTo = { opacity: 1, y: "0%", rotateX: 0 },
  transition = { type: "spring", damping: 18, stiffness: 140 },
  threshold = 0.1,
  rootMargin = "-50px",
  textAlign = "left",
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

  const items = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <span
      ref={ref}
      className={`inline-block perspective-1000 ${className}`}
      style={{ textAlign }}
    >
      {items.map((item, index) => {
        const isSpace = item === " ";
        return (
          <span
            key={`${item}-${index}`}
            className="inline-block overflow-hidden align-top"
            style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
          >
            <Motion.span
              custom={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: animationFrom,
                visible: (i) => ({
                  ...animationTo,
                  transition: {
                    ...transition,
                    delay: (i * delay) / 1000,
                  },
                }),
              }}
              onAnimationComplete={() => {
                if (index === items.length - 1 && onAnimationComplete) {
                  onAnimationComplete();
                }
              }}
              className="inline-block transform-gpu will-change-transform"
            >
              {isSpace ? "\u00A0" : item}
            </Motion.span>
            {splitBy === "words" && index < items.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;

