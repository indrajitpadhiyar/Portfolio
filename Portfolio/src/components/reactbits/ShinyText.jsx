import React from "react";

/**
 * ShinyText component inspired by React Bits (reactbits.dev/text-animations/shiny-text)
 * Renders a metallic shimmering light beam across the text.
 */
const ShinyText = ({ text = "", disabled = false, speed = 4, className = "" }) => {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled
          ? "text-inherit"
          : "animate-shiny-shimmer bg-[linear-gradient(110deg,#a1a1aa,45%,#ffffff,55%,#a1a1aa)] bg-[length:250%_100%]"
      } ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;

