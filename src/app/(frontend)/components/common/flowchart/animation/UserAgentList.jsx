"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import styles from "../flowchart.module.css";

export const UserAgentList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Animates only the first time in view

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start state
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3, // Delay based on index for sequential animation
        duration: 0.7,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <div ref={ref} className={styles.customIconGrid}>
      {isInView &&
        [...Array(24)].map((_, index) => (
          <motion.img
            className={`img-fluid ${styles.userAgentImg}`}
            key={index}
            src={"/images/icon/humanAgent.svg"}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Pass index for delay
          />
        ))}
    </div>
  );
};
