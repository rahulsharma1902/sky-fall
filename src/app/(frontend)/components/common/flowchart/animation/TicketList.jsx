"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import styles from "../flowchart.module.css";

export const TicketList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Animates only the first time in view

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start state
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3, // Delay based on index for sequential animation
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <div ref={ref} className={styles.customIconGridUnEven}>
      {isInView &&
        [...Array(51)].map((_, index) => (
          <motion.img
            className={`img-fluid ${styles.ticketingImg}`}
            key={index}
            src={"/images/icon/ticket.svg"}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Pass index for delay
          />
        ))}
    </div>
  );
};
