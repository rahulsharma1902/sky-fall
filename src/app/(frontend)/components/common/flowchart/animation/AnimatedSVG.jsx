"use client";
import { motion } from "framer-motion";

const AnimatedSVG = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      {/* Line 2 Animation */}
      <motion.line
        id="r"
        fill="none"
        stroke="#FF6400"
        strokeLinecap="round"
        strokeMiterlimit="6"
        strokeDasharray="1,8"
        strokeWidth="4"
        x1="10"
        y1="0"
        x2="110"
        y2="100"
        initial={{ strokeDashoffset: 0 }}
        animate={{
          strokeDashoffset: [0, -9], // Values for animation
        }}
        transition={{
          duration: 0.2,
          ease: "linear",
          repeat: Infinity, // Infinite repeat
        }}
      />
    </svg>
  );
};

export default AnimatedSVG;
