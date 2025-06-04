"use client";
import { motion } from "framer-motion";

const AnimatedLineDots = () => {
  return (
    <svg
      width="29"
      height="98"
      viewBox="0 0 29 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 4V94"
        stroke="#363636"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 94L4.00001 4"
        stroke="#363636"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M25 8V90"
        stroke="#20A558"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 25"
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
      <motion.path
        d="M4 90L4.00001 8"
        stroke="#20A558"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 25"
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

export default AnimatedLineDots;
