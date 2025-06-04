import AnimatedLineDots from "@/app/(frontend)/components/animations/AnimatedLineDots";
import useMotionTimeline from "@/hooks/useMotionTimeline";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../../../pages/home/Disposal/disposal.module.css";
import { useWindowSize } from "react-use";

const AgentPC = () => {
  const { width } = useWindowSize();
  const animation =
    width < 770
      ? [
          [
            [
              ".itam1h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam2h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam3h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam4h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam5h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam1l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader1g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader1",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam1",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam2l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader2g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader2",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam2",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam3l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader3g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader3",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam3",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam4l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader4g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader4",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam4",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam5l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader5g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader5",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam5",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamDataFlowLines2",
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
              ".itamDataFlowLines3",
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
              ".itamDataFlowLines4",
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
              ".itamDataFlowLines5",
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
              ".itamDataFlowLines1",
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
              ".itamLoader1g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itamLoader1",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itam1h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam1",
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
              ".itam1l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itamLoader2g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itamLoader2",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itam1",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam2h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam2",
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
              ".itam2l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itamLoader3g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itamLoader3",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itam2",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam3h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam3",
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
              ".itam3l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itamLoader4g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itamLoader4",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itam3",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam4h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam4",
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
              ".itam4l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itamLoader5g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itamLoader5",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itam4",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam5h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itam5",
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
              ".itam5l",
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
            ".itam5",
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
              ".itam1h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam2h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam3h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam4h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam5h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam1l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader1g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader1",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam1",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam2l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader2g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader2",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam2",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam3l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader3g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader3",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam3",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam4l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader4g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader4",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam4",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam5l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader5g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamLoader5",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itam5",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itamDataFlowLines2",
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
              ".itamDataFlowLines3",
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
              ".itamDataFlowLines4",
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
              ".itamDataFlowLines5",
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
              ".itamDataFlowLines1",
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
              ".itamLoader1g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader1",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itamDataFlowLines1",
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
              ".itam1",
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
              ".itam1l",
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
              ".itamDataFlowLines1",
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
              ".itam1",
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
              ".itam1l",
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
              ".itam1h",
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
              ".itamSvgPathArrow1",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader2g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader2",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itamDataFlowLines2",
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
              ".itam2",
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
              ".itam2l",
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
              ".itamDataFlowLines2",
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
              ".itam2",
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
              ".itam2l",
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
              ".itam2h",
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
              ".itamSvgPathArrow2",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader3g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader3",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itamDataFlowLines3",
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
              ".itam3",
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
              ".itam3l",
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
              ".itamDataFlowLines3",
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
              ".itam3",
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
              ".itam3l",
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
              ".itam3h",
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
              ".itamSvgPathArrow3",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader4g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader4",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itamDataFlowLines4",
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
              ".itam4",
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
              ".itam4l",
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
              ".itamDataFlowLines4",
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
              ".itam4",
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
              ".itam4l",
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
              ".itam4h",
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
              ".itamSvgPathArrow4",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader5g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itamLoader5",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itamDataFlowLines5",
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
              ".itam5",
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
              ".itam5l",
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
              ".itam5",
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
              ".itamDataFlowLines5",
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
              ".itam5l",
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
              ".itam5h",
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
      className="tab-pane fade show active py-md-5"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabIndex="0"
    >
      <div ref={scope}>
        {/* <p className="f-24 f-c-p">{width} px</p> */}
        <div className="d-flex align-items-center position-relative">
          <div
            className={`${styles.cardActiveBg} ${styles.cardHeight}  p-2 ${styles.cardActiveBgHide}`}
          >
            <img src={"/images/icon/flowIcon.svg"} className="img-fluid" />
          </div>
          <div
            className={`flex-grow-1 p-md-2 my-1  ${styles.sideBorderLeft} d-flex align-items-center `}
          >
            <p className="f-24 f-c-p ps-md-2 ff-j">
              Automated Software License Optimization{" "}
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
              <p className="f-16 f-c-s ff-j">
                Integration with Software Providers
              </p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Combine and Analyze Data</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Identify Underutilized Licenses</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Ask for Departmental approvals</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Create an Optimization Plan</p>
            </div>
          </div>
          <div
            className={`${styles.customGridFive}  ${styles.mobileFlexFill}`}
            style={{ minHeight: "200px" }}
          >
            <div
              className={`${styles.cardContainer} position-relative itamMinHeight1`}
            >
              <div className={"itam1l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/alert.svg"}
                    className="img-fluid position-absolute itamLoader1g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itamLoader1 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">ALERT</p>
              </div>
              <div className="itamDataFlowLines1">
                <AnimatedLineDots />
              </div>
              <div className={"itam1"}>
                <div className="itam1h">
                  <div
                    className={`${styles.cardHeader}  d-flex align-items-center`}
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
                      <p className="text-uppercase   f-14 f-c-p ff-j py-md-2 px-md-3 px-2">
                        Integration
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} d-flex align-items-start justify-content-center flex-column`}
                >
                  <div className="d-flex align-items-start justify-content-start">
                    <div className={`${styles.brandLogo} p-2`}>
                      <img
                        src={`/images/icon/salesForce.svg`}
                        className="img-fluid"
                      />
                    </div>
                    <div className={`${styles.brandLogo} p-2`}>
                      <img
                        src={`/images/icon/azaur.svg`}
                        className="img-fluid"
                      />
                    </div>
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
                  className="itamSvgPathArrow1"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} position-relative itamMinHeight2`}
            >
              <div className={"itam2l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/heartBet.svg"}
                    className="img-fluid position-absolute itamLoader2g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itamLoader2 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">ANALYSIS</p>
              </div>
              <div className="itamDataFlowLines2">
                <AnimatedLineDots />
              </div>
              <div className={"itam2"}>
                <div className="itam2h">
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
                        Analyze
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody}  d-flex align-items-start justify-content-center flex-column`}
                >
                  <div className="">
                    {["Human Resource", "Finance", "Sales", "Marketing"].map(
                      (_, index) => (
                        <p
                          key={index}
                          className={`f-12 ff-j f-c-p  ${styles.badges} `}
                        >
                          <img
                            src={"/images/icon/circle.svg"}
                            className="img-fluid"
                          />{" "}
                          {_}
                        </p>
                      )
                    )}
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
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  className="itamSvgPathArrow2"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} position-relative itamMinHeight3`}
            >
              <div className={"itam3l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/plan.svg"}
                    className="img-fluid position-absolute itamLoader3g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itamLoader3 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">PLAN</p>
              </div>
              <div className="itamDataFlowLines3">
                <AnimatedLineDots />
              </div>
              <div className={"itam3"}>
                <div className="itam3h">
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
                  <div
                    className={` d-flex align-items-center justify-content-start py-2`}
                  >
                    <div className="d-flex align-items-center ">
                      <div style={{ width: 35 }} className="me-2">
                        <Image
                          src={`/images/icon/azaur.svg`}
                          className="img-fluid "
                          width={23}
                          height={25}
                        />
                      </div>
                      <div>
                        <p className="f-12 ff-j f-c-a f-w-300">$ 102593</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={` d-flex align-items-center justify-content-start py-2`}
                  >
                    <div className="d-flex align-items-center ">
                      <Image
                        src={`/images/icon/salesForce.svg`}
                        className="img-fluid me-2"
                        width={35}
                        height={25}
                      />
                      <div>
                        <p className="f-12 ff-j f-c-a f-w-300">$ 48793</p>
                      </div>
                    </div>
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
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  className="itamSvgPathArrow3"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} position-relative itamMinHeight4`}
            >
              <div className={"itam4l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/execute.svg"}
                    className="img-fluid position-absolute itamLoader4g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itamLoader4 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">EXECUTE</p>
              </div>
              <div className="itamDataFlowLines4">
                <AnimatedLineDots />
              </div>
              <div className={"itam4"}>
                <div className="itam4h">
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
                        Approvals
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} d-flex align-items-start justify-content-center flex-column`}
                >
                  <div className="w-100">
                    <div
                      className={` d-flex align-items-center justify-content-between`}
                    >
                      <div className="d-flex align-items-center ">
                        <img
                          src={`/images/user/user11.png`}
                          width={30}
                          height={30}
                          className="img-fluid me-2"
                        />
                        <div>
                          <p className="f-12 ff-j f-c-p">Alex Freg</p>
                          <p className="f-10 ff-j f-c-s">Head of Sales</p>
                        </div>
                      </div>
                      <div className={`${styles.smallCheck} me-2`}>
                        <img
                          src={"/images/icon/checkSmall.svg"}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div
                      className={` d-flex align-items-center justify-content-between`}
                    >
                      <div className="d-flex align-items-center ">
                        <img
                          src={`/images/user/user22.png`}
                          width={30}
                          height={30}
                          className="img-fluid me-2"
                        />
                        <div>
                          <p className="f-12 ff-j f-c-p">Michal Doe</p>
                          <p className="f-10 ff-j f-c-s">Head of Marketing</p>
                        </div>
                      </div>
                      <div className={`${styles.smallCheck} me-2`}>
                        <img
                          src={"/images/icon/checkSmall.svg"}
                          className="img-fluid"
                        />
                      </div>
                    </div>
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
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  className="itamSvgPathArrow4"
                  fill="#ACACAC"
                />
              </svg>
            </div>

            <div
              className={`${styles.cardContainer} position-relative itamMinHeight5`}
            >
              <div className={"itam5l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/monitor.svg"}
                    className="img-fluid position-absolute itamLoader5g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itamLoader5 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">MONITOR </p>
              </div>
              <div className="itamDataFlowLines5">
                <AnimatedLineDots />
              </div>
              <div className={"itam5"}>
                <div className="itam5h">
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
                  className={`${styles.cardBody} d-flex align-items-start justify-content-center flex-column`}
                >
                  <div
                    className={`${styles.userCard} d-flex align-items-center justify-content-between`}
                  >
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
                    <div className="d-flex align-items-center ">
                      <img
                        src={`/images/icon/azaur.svg`}
                        className="img-fluid mx-3 "
                        width={25}
                        height={25}
                      />
                      <div>
                        <p className="f-12 ff-j f-c-p f-w-300">Microsoft 365</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.userCard} d-flex align-items-center justify-content-between`}
                  >
                    <img
                      src={"/images/icon/bgCheck.svg"}
                      className="img-fluid"
                    />
                    <div className="d-flex align-items-center ">
                      <img
                        src={`/images/icon/salesForce.svg`}
                        className="img-fluid mx-3"
                        width={25}
                        height={25}
                      />
                      <div>
                        <p className="f-12 ff-j f-c-p f-w-300">Sales Force</p>
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

export default AgentPC;
