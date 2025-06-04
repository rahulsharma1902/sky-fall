"use client";
import { motion } from "framer-motion";
import styles from "../flowchart.module.css";
const AnimatedLeftCircleSVG = () => {
  return (
    <svg
      className={`${styles.lSvg} ${styles.svgM}`}
      width="277"
      height="319"
      viewBox="0 0 277 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static ground path */}

      <path
        d="M270 4V143.855C270 150.482 264.627 155.855 258 155.855H16C9.37258 155.855 4 161.227 4 167.855V314.5"
        stroke="#363636"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated path */}
      <motion.path
        d="M270 4V143.855C270 150.482 264.627 155.855 258 155.855H16C9.37258 155.855 4 161.227 4 167.855V314.5"
        stroke="#20A558"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 30"
        initial={{ strokeDashoffset: 0 }}
        animate={{
          strokeDashoffset: [0, -30],
        }}
        transition={{
          duration: 0.9,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </svg>
  );
};

export default AnimatedLeftCircleSVG;
