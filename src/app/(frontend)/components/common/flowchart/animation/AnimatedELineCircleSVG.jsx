"use client";
import { motion } from "framer-motion";
import styles from "../flowchart.module.css";

const AnimatedELineCircleSVG = () => {
  return (
    <svg
      className={styles.sLine}
      width="277"
      height="319"
      viewBox="0 0 277 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static ground path */}

      <path
        d="M4 4.5V205"
        stroke="#363636"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated path */}
      <motion.path
        d="M4 4.5V205"
        stroke="#FF4242"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 30"
        initial={{ strokeDashoffset: 0 }}
        animate={{
          strokeDashoffset: [0, -30],
        }}
        transition={{
          duration: 0.8,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </svg>
  );
};

export default AnimatedELineCircleSVG;
