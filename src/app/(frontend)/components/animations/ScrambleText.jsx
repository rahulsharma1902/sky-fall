"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrambleText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(text.split(""));
  const scrambleChars = "<div><p>0101010</p></div>";
  const scrambleSpeed = 1000; // Delay in milliseconds between updates

  useEffect(() => {
    let lastUpdateTime = performance.now(); // Track the last update time
    let animationFrame;

    const scramble = (time) => {
      if (time - lastUpdateTime >= scrambleSpeed) {
        // Update only if the time difference is greater than scrambleSpeed
        setDisplayedText((prev) =>
          prev.map((char, i) =>
            Math.random() > 0.5
              ? scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
              : text[i]
          )
        );
        lastUpdateTime = time; // Update the last update time
      }
      animationFrame = requestAnimationFrame(scramble);
    };

    animationFrame = requestAnimationFrame(scramble); // Start the animation

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, [text, scrambleSpeed]);

  return (
    <div style={{ display: "inline-block" }}>
      {displayedText.map((char, i) => (
        <motion.span
          key={i}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default ScrambleText;
