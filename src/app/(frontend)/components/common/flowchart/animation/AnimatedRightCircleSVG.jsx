"use client";
import { motion } from "framer-motion";
import styles from "../flowchart.module.css";
const AnimatedRightCircleSVG = () => {
  return (
    <svg
      className={`${styles.rSvg} ${styles.svgM}`}
      width="277"
      height="319"
      viewBox="0 0 277 319"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static ground path */}
      <path
        d="M4.5 4V143.855C4.5 150.482 9.87258 155.855 16.5 155.855H260.5C267.127 155.855 272.5 161.227 272.5 167.855V314.5"
        stroke="#363636"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated path */}
      <motion.path
        d="M4.5 4V143.855C4.5 150.482 9.87258 155.855 16.5 155.855H260.5C267.127 155.855 272.5 161.227 272.5 167.855V314.5"
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
          duration: 0.4,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </svg>
  );
};

export default AnimatedRightCircleSVG;
