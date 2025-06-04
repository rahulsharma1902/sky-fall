"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import styles from "../flowchart.module.css";

export const UserList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates only the first time in view

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
    <motion.div
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.1 }}
      className="pb-md-2 pb-1"
    >
      {[...Array(8)].map((_, index) => (
        <motion.img
          className={`img-fluid ${styles.userListImg}`}
          key={index}
          src={"/images/icon/userList.svg"}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={index} // Pass index for delay
        />
      ))}
    </motion.div>
  );
};
