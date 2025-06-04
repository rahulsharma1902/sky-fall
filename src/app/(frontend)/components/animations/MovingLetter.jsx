import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MovingLetter = ({
  letter = "a",
  length = 32,
  interval = 0.1,
  pause = 2,
}) => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Update position for the letter in intervals
  useEffect(() => {
    if (isPaused) return; // Skip updates when paused

    const timer = setInterval(() => {
      setPosition((prev) => {
        if (prev >= length) {
          setIsPaused(true); // Pause when reaching the end
          setTimeout(() => {
            setPosition(0); // Restart after pause
            setIsPaused(false);
          }, pause * 1000); // Pause duration in milliseconds
          return prev; // Stay at the end during pause
        }
        return prev + 1; // Increment position
      });
    }, interval * 1000); // Convert interval to milliseconds

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [length, interval, isPaused, pause]);

  // Generate the string dynamically
  const fullString = `${"--".repeat(position)}${letter}${"--".repeat(
    length - position
  )}`;

  return (
    <div style={{ display: "inline-block" }}>
      :
      {/* <AnimatePresence>
        {[...fullString].map((char, index) => (
          <motion.span
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: interval / 2,
              delay: index * 0.05, // Stagger letters
            }}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence> */}
      <div style={{ display: "inline-block" }}>
        {[...fullString].map((char, i) => (
          <motion.span
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      :
    </div>
  );
};

export default MovingLetter;
