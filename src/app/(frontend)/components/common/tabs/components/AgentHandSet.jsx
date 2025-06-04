import React from "react";
import AnimatedLineDots from "@/app/(frontend)/components/animations/AnimatedLineDots";
import useMotionTimeline from "@/hooks/useMotionTimeline";
import styles from "../../../pages/home/Disposal/disposal.module.css";
import { useWindowSize } from "react-use";

const AgentHandSet = () => {
  const { width } = useWindowSize();
  const animation =
    width < 770
      ? [
          [
            [
              ".itsm1h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm2h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm3h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm4h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm5h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm1l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader1g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader1",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm1",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm2l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader2g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader2",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm2",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm3l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader3g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader3",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm3",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm4l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader4g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader4",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm4",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm5l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader5g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader5",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm5",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmDataFlowLines2",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines3",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines4",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines5",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines1",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
          ],
          [
            [
              ".itsmLoader1g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsmLoader1",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsm1h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm1",
              {
                top: "0%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm1l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itsmLoader2g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsmLoader2",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsm1",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm2h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm2",
              {
                top: "0%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm2l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itsmLoader3g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsmLoader3",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsm2",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm3h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm3",
              {
                top: "0%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm3l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itsmLoader4g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsmLoader4",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsm3",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm4h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm4",
              {
                top: "0%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm4l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itsmLoader5g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsmLoader5",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsm4",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm5h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm5",
              {
                top: "0%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsm5l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
          ],
          [
            ".itsm5",
            {
              borderWidth: 0,
            },
            {
              ease: "easeInOut",
              duration: 1,
            },
          ],
        ]
      : [
          [
            [
              ".itsm1h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm2h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm3h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm4h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm5h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm1l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader1g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader1",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm1",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm2l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader2g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader2",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm2",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm3l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader3g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader3",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm3",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm4l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader4g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader4",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm4",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm5l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader5g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmLoader5",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsm5",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itsmDataFlowLines2",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines3",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines4",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines5",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itsmDataFlowLines1",
              {
                top: "65%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
          ],
          [
            [
              ".itsmLoader1g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader1",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines1",
              {
                top: "65%",
                opacity: 1,
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],

            [
              ".itsm1",
              {
                top: "110%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.3,
              },
            ],
            [
              ".itsm1l",
              {
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.3,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines1",
              {
                top: "0%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm1",
              {
                top: "0",
                opacity: 1,
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm1l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm1h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
          ],
          [
            [
              ".itsmSvgPathArrow1",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader2g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader2",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines2",
              {
                top: "65%",
                opacity: 1,
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsm2",
              {
                top: "110%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsm2l",
              {
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines2",
              {
                top: "0%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],

            [
              ".itsm2",
              {
                top: "0",
                opacity: 1,
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm2l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm2h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
          ],
          [
            [
              ".itsmSvgPathArrow2",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader3g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader3",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines3",
              {
                top: "65%",
                opacity: 1,
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],

            [
              ".itsm3",
              {
                top: "110%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsm3l",
              {
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines3",
              {
                top: "0%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],

            [
              ".itsm3",
              {
                top: "0",
                opacity: 1,
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm3l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm3h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
          ],
          [
            [
              ".itsmSvgPathArrow3",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader4g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader4",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines4",
              {
                top: "65%",
                opacity: 1,
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],

            [
              ".itsm4",
              {
                top: "110%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsm4l",
              {
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines4",
              {
                top: "0%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],

            [
              ".itsm4",
              {
                top: "0",
                opacity: 1,
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm4l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm4h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
          ],
          [
            [
              ".itsmSvgPathArrow4",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader5g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itsmLoader5",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itsmDataFlowLines5",
              {
                top: "65%",
                opacity: 1,
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsm5",
              {
                top: "110%",
                opacity: 1,
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itsm5l",
              {
                borderWidth: 1,
                borderColor: "#2fcc71",
                borderStyle: "solid",
              },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itsm5",
              {
                top: "0",
                opacity: 1,
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsmDataFlowLines5",
              {
                top: "0%",
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm5l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
            [
              ".itsm5h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                delay: 1,
                duration: 0.3,
              },
            ],
          ],
        ];
  const { scope, ref } = useMotionTimeline(animation, 1);

  return (
    <div
      ref={ref}
      className="tab-pane fade py-md-5"
      id="contact-tab-pane"
      role="tabpanel"
      aria-labelledby="contact-tab"
      tabIndex="0"
    >
      <div ref={scope}>
        <div className="d-flex align-items-center position-relative">
          <div
            className={`${styles.cardActiveBg} ${styles.cardHeight}  p-2 ${styles.cardActiveBgHide}`}
          >
            <img src={"/images/icon/flowIcon.svg"} className="img-fluid" />
          </div>
          <div
            className={`flex-grow-1 p-md-2 my-1 ${styles.sideBorderLeft} d-flex align-items-center `}
          >
            <p className="f-24 f-c-p ps-md-2 ff-j">
              Proactive Problem Identification & Resolution
            </p>
          </div>
          <img
            src={"/images/icon/headingCorner.svg"}
            className={`d-none  ${styles.tabMobileCorner}`}
          />
        </div>
        <div className={styles.mobileChart}>
          <div className={`${styles.customGridFive} ${styles.gridPadding}`}>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Detect Recurring Login Issues</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Aggregate Incidents Data</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Create Problem Record</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Identify Root Cause</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Generate and Execute Fixes</p>
            </div>
          </div>
          <div
            className={`${styles.customGridFive} ${styles.mobileFlexFill}`}
            style={{ minHeight: "200px" }}
          >
            <div
              className={`${styles.cardContainer} itsmMinHeight1 position-relative`}
            >
              <div className={"itsm1l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/detection.svg"}
                    className="img-fluid position-absolute itsmLoader1g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itsmLoader1 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s pt-2 text-uppercase ">
                  DETECTION
                </p>
              </div>
              <div className="itsmDataFlowLines1">
                <AnimatedLineDots />
              </div>
              <div className={"itsm1"}>
                <div className="itsm1h">
                  <div
                    className={`${styles.cardHeader} d-flex align-items-center`}
                  >
                    <div
                      className={`${styles.cardActiveBg} ${styles.cardCheckHeight} d-flex align-items-center justify-content-center`}
                    >
                      <img
                        src={"/images/icon/checkSmall.svg"}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p className="text-uppercase f-14 f-c-p ff-j py-md-2 px-md-3 px-2">
                        DETECTION
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} overflow-x-hidden d-flex align-items-start justify-content-center flex-column `}
                >
                  <div className={styles.errorLines}></div>
                  <div className={styles.errorLines}></div>
                  <div className="d-flex align-items-center justify-content-start">
                    <p className="f-14 ff-j f-c-p">Slow Login Detected</p>
                    <img
                      src={"/images/icon/pcError.svg"}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <svg
                className={`${styles.cardContainerArrow}`}
                width="24"
                height="8"
                viewBox="0 0 24 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="itsmSvgPathArrow1"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itsmMinHeight2 position-relative`}
            >
              <div className={"itsm2l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/aggregate.svg"}
                    className="img-fluid position-absolute itsmLoader2g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itsmLoader2 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s pt-2 text-uppercase ">
                  AGGREGATE
                </p>
              </div>
              <div className="itsmDataFlowLines2">
                <AnimatedLineDots />
              </div>
              <div className={"itsm2"}>
                <div className="itsm2h">
                  <div
                    className={`${styles.cardHeader} d-flex align-items-center`}
                  >
                    <div
                      className={`${styles.cardActiveBg} ${styles.cardCheckHeight} d-flex align-items-center justify-content-center`}
                    >
                      <img
                        src={"/images/icon/checkSmall.svg"}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p className="text-uppercase f-14 f-c-p ff-j py-md-2 px-md-3 px-2">
                        AGGREGATE
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody}  d-flex align-items-start justify-content-center flex-column`}
                >
                  <img
                    src={"/images/icon/mapChart.svg"}
                    className="img-fluid"
                  />
                </div>
              </div>
              <svg
                className={`${styles.cardContainerArrow}`}
                width="24"
                height="8"
                viewBox="0 0 24 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="itsmSvgPathArrow2"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itsmMinHeight3 position-relative`}
            >
              <div className={"itsm3l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/problem.svg"}
                    className="img-fluid position-absolute itsmLoader3g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itsmLoader3 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s pt-2 text-uppercase ">
                  PROBLEM CREATION
                </p>
              </div>
              <div className="itsmDataFlowLines3">
                <AnimatedLineDots />
              </div>
              <div className={"itsm3"}>
                <div className="itsm3h">
                  <div
                    className={`${styles.cardHeader} d-flex align-items-center`}
                  >
                    <div
                      className={`${styles.cardActiveBg} ${styles.cardCheckHeight} d-flex align-items-center justify-content-center`}
                    >
                      <img
                        src={"/images/icon/checkSmall.svg"}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p className="text-uppercase f-14 f-c-p ff-j py-md-2 px-md-3 px-2">
                        PROBLEM CREATION
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody}  h-100 d-flex align-items-start justify-content-center flex-column pe-0`}
                >
                  <div className="w-100 h-100">
                    <table className={`${styles.myTable} h-100 w-100`}>
                      <tbody>
                        <tr>
                          <td>
                            <p className="f-12 f-c-p ff-j">ID</p>
                          </td>
                          <td>
                            <p className="f-12 f-c-a ff-j">PRB105689</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="f-12 f-c-p ff-j">Title</p>
                          </td>
                          <td className={styles.flowHeaderError}>
                            <p className="f-12 f-c-p ff-j">Slow Login</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="f-12 f-c-p ff-j">CI</p>
                          </td>
                          <td>
                            <p className="f-12 f-c-a ff-j">LINXSRVR9850</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <svg
                className={`${styles.cardContainerArrow}`}
                width="24"
                height="8"
                viewBox="0 0 24 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="itsmSvgPathArrow3"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itsmMinHeight4 position-relative`}
            >
              <div className={"itsm4l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/identification.svg"}
                    className="img-fluid position-absolute itsmLoader4g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itsmLoader4 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s pt-2 text-uppercase ">
                  IDENTIFICATION
                </p>
              </div>
              <div className="itsmDataFlowLines4">
                <AnimatedLineDots />
              </div>
              <div className={"itsm4"}>
                <div className="itsm4h">
                  <div
                    className={`${styles.cardHeader} d-flex align-items-center`}
                  >
                    <div
                      className={`${styles.cardActiveBg} ${styles.cardCheckHeight} d-flex align-items-center justify-content-center`}
                    >
                      <img
                        src={"/images/icon/checkSmall.svg"}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p className="text-uppercase f-14 f-c-p ff-j py-md-2 px-md-3 px-2">
                        Plan
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} d-flex align-items-start justify-content-center flex-column `}
                >
                  <img
                    src={"/images/icon/serverArch.svg"}
                    className="img-fluid"
                  />
                </div>
              </div>
              <svg
                className={`${styles.cardContainerArrow}`}
                width="24"
                height="8"
                viewBox="0 0 24 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="itsmSvgPathArrow4"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itsmMinHeight5 position-relative`}
            >
              <div className={"itsm5l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/execute.svg"}
                    className="img-fluid position-absolute itsmLoader5g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itsmLoader5 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s pt-2 text-uppercase ">EXECUTE</p>
              </div>
              <div className="itsmDataFlowLines5">
                <AnimatedLineDots />
              </div>
              <div className={"itsm5"}>
                <div className="itsm5h">
                  <div
                    className={`${styles.cardHeader} d-flex align-items-center`}
                  >
                    <div
                      className={`${styles.cardActiveBg} ${styles.cardCheckHeight} d-flex align-items-center justify-content-center`}
                    >
                      <img
                        src={"/images/icon/checkSmall.svg"}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <p className="text-uppercase f-14 f-c-p ff-j py-md-2 px-md-3 px-2">
                        Execute
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.cardBody} d-flex align-items-start justify-content-center flex-column pe-0`}
                >
                  <div
                    className={`${styles.userCard} d-flex align-items-start justify-content-end flex-column p-0`}
                  >
                    <div className="d-flex align-items-center justify-content-start my-xl-2 my-1">
                      <div className={`position-relative`}>
                        <img
                          src={"/images/icon/bgCheck.svg"}
                          className="img-fluid"
                        />
                        <img
                          src={"/images/icon/sline.svg"}
                          className={`img-fluid ${styles.checkLineContainer}`}
                        />
                      </div>
                      <div className="px-1">
                        <p className="f-12 ff-j f-c-p">Refactoring auth code</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start my-xl-2 my-1">
                      <div className={`position-relative`}>
                        <img
                          src={"/images/icon/bgCheck.svg"}
                          className="img-fluid"
                        />
                        <img
                          src={"/images/icon/sline.svg"}
                          className={`img-fluid ${styles.checkLineContainer}`}
                        />
                      </div>
                      <div className="px-1">
                        <p className="f-12 ff-j f-c-p">Deploy auth server</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start my-xl-2 my-1">
                      <div className={`position-relative`}>
                        <img
                          src={"/images/icon/bgCheck.svg"}
                          className="img-fluid"
                        />
                      </div>
                      <div className="px-1">
                        <p className="f-12 ff-j f-c-p">
                          Configure load balancing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHandSet;
