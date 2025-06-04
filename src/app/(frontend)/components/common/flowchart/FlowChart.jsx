"use client";

import React from "react";
import AnimatedELineCircleSVG from "./animation/AnimatedELineCircleSVG";
import AnimatedLeftCircleSVG from "./animation/AnimatedLeftCircleSVG";
import AnimatedRightCircleSVG from "./animation/AnimatedRightCircleSVG";
import AnimatedSLineCircleSVG from "./animation/AnimatedSLineCircleSVG";
import { TicketList } from "./animation/TicketList";
import { UserAgentList } from "./animation/UserAgentList";
import { UserList } from "./animation/UserList";
import styles from "./flowchart.module.css";
import { motion } from "framer-motion";
import AnimatedCounter from "./animation/AnimatedCounter";

const FlowChart = () => {
  return (
    <>
      <div className={styles.flowContainer}>
        <div
          className={`${styles.flowStep} ${styles.bottomBorderDotted} d-flex justify-content-center align-items-center position-relative`}
        >
          <div className={styles.verticalText}>
            <p className="f-14 f-c-p ff-j">Tickets</p>
          </div>
          <div className={styles.flowTicket}>
            <div className={`${styles.flowHeader}`}>
              <div className="f-14 f-c-s text-uppercase py-2 px-3 ff-j d-flex  flex-column justify-content-center text-center borderBottom">
                <UserList />
                <span> Company Employee</span>
              </div>
              <div className="f-14 f-c-s text-uppercase py-md-3 px-md-3 p-2 ff-j d-flex justify-content-between align-items-center">
                <span> Ticket Created</span>
                <a href="#">
                  <span className="text-left customBadge">
                    <AnimatedCounter from={0} to={6807} delay={16} />
                  </span>
                </a>
              </div>
            </div>
            <div
              className={`${styles.flowbody} ${styles.flowbodyTicketHeight} p-md-3 p-2`}
            >
              <TicketList />
            </div>
          </div>

          <div className={styles.rlLine}>
            <AnimatedLeftCircleSVG />
            <AnimatedRightCircleSVG />
          </div>
        </div>
        <div className="d-flex  flex-column position-relative">
          <div
            className={`${styles.flowStep} ${styles.bottomBorderDotted} d-flex justify-content-md-evenly justify-content-between align-items-center`}
          >
            <div className={styles.verticalText}>
              <p className="f-14 f-c-p ff-j">Resolving</p>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center flex-column position-relative `}
            >
              <div className={styles.flowCard}>
                <div className={`${styles.flowHeader}`}>
                  <div className="f-14 f-c-s text-uppercase p-md-3  p-2 ff-j d-flex justify-content-between">
                    <span> Human Agents</span>
                  </div>
                </div>
                <div
                  className={`${styles.flowbody} ${styles.flowbodyHeight} p-md-3 p-2`}
                >
                  <UserAgentList />
                </div>
              </div>

              <AnimatedELineCircleSVG />
            </div>
            <div
              className={`d-flex justify-content-center align-items-center flex-column position-relative `}
            >
              <div className={styles.flowCard}>
                <div className={`${styles.flowHeader}`}>
                  <div className="f-14 f-c-s text-uppercase p-md-3  p-2 ff-j d-flex justify-content-between">
                    <span> Skyfall Agent</span>
                  </div>
                </div>
                <div
                  className={`${styles.flowbody} ${styles.flowbodyHeight} d-flex align-items-center justify-content-center p-md-0 p-2 text-center `}
                >
                  {/* <img
                    className={`img-fluid ${styles.icChip}`}
                    src={"/images/icon/icChip.svg"}
                  /> */}
                  {/* <div className="frameChip"></div> */}
                  <div className="frameChipWrapper">
                    <div className="frameChipBg chip3"></div>
                    <div className="frameChipBg chip1"></div>
                    <div className="frameChipBg chip2"></div>
                  </div>
                </div>
              </div>

              <AnimatedSLineCircleSVG />
            </div>
          </div>
          <div
            className={`${styles.flowStep} d-flex  justify-content-md-evenly justify-content-between align-items-center`}
          >
            <div className={styles.verticalText}>
              <p className="f-14 f-c-p ff-j">Pending</p>
            </div>
            <div className={styles.flowCardError}>
              <motion.div
                whileInView={{
                  backgroundColor: ["#585858", "#585858", "#690000"],
                }}
                viewport={{ once: false, amount: 1 }}
                transition={{
                  duration: 16,
                  times: [0, 0.5, 1],
                }}
                className={`${styles.flowHeaderError} d-flex align-items-center justify-content-center `}
              >
                <div className="f-14 f-c-p text-uppercase  ff-j ">
                  <span> Pending Tickets</span>
                </div>
              </motion.div>
              <motion.div
                whileInView={{
                  backgroundColor: ["#000000", "#000000", "#ff4242"],
                  borderWidth: [1, 1, 0], // Use numbers for borderWidth
                  borderColor: ["#585858", "#585858", "rgba(0, 0, 0, 0)"],
                }}
                style={{
                  borderStyle: "solid", // Ensure the border style is set
                }}
                viewport={{ once: false, amount: 1 }}
                transition={{
                  duration: 16,
                  times: [0, 0.5, 1],
                }}
                className={`${styles.flowBodyError}   d-flex align-items-center justify-content-center`}
              >
                <p className="text-center f-24 ff-j f-c-p f-w-900">
                  <AnimatedCounter from={6807} to={4802} delay={1200} />
                </p>
              </motion.div>
            </div>
            <div className={styles.flowCardSuccess}>
              <motion.div
                whileInView={{
                  backgroundColor: ["#585858", "#585858", "#035124"],
                }}
                viewport={{ once: false, amount: 1 }}
                transition={{
                  duration: 7,
                  times: [0, 0.5, 1],
                }}
                className={`${styles.flowHeaderSuccess} d-flex align-items-center justify-content-center`}
              >
                <div className="f-14 f-c-p text-uppercase px-3 ff-j">
                  <span>Pending Tickets</span>
                </div>
              </motion.div>

              <motion.div
                whileInView={{
                  backgroundColor: ["#000000", "#000000", "#20a558"],
                  borderWidth: [1, 1, 0], // Use numbers for borderWidth
                  borderColor: ["#585858", "#585858", "rgba(0, 0, 0, 0)"],
                }}
                style={{
                  borderStyle: "solid", // Ensure the border style is set
                }}
                viewport={{ once: false, amount: 1 }}
                transition={{
                  duration: 7,
                  times: [0, 0.5, 1],
                }}
                className={`${styles.flowBodySuccess}  d-flex align-items-center justify-content-center`}
              >
                <p className="text-center f-24 ff-j f-c-p f-w-900">
                  <AnimatedCounter from={6807} to={2} delay={5} />
                </p>
              </motion.div>
            </div>
          </div>
          <img
            className={styles.borderLine}
            src={"/images/flowchart/line.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default FlowChart;
