import React from "react";
import AnimatedLineDots from "@/app/(frontend)/components/animations/AnimatedLineDots";
import useMotionTimeline from "@/hooks/useMotionTimeline";
import styles from "../../../pages/home/Disposal/disposal.module.css";
import { useWindowSize } from "react-use";

const AgentSetting = () => {
  const { width } = useWindowSize();
  const animation =
    width < 770
      ? [
          [
            [
              ".itom1h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom2h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom3h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom4h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom5h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom1l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader1g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader1",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom1",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom2l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader2g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader2",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom2",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom3l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader3g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader3",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom3",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom4l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader4g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader4",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom4",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom5l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader5g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader5",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom5",
              { opacity: 0, top: "0%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomDataFlowLines2",
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
              ".itomDataFlowLines3",
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
              ".itomDataFlowLines4",
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
              ".itomDataFlowLines5",
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
              ".itomDataFlowLines1",
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
              ".itomLoader1g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itomLoader1",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itom1h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom1",
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
              ".itom1l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itomLoader2g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itomLoader2",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itom1",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom2h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom2",
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
              ".itom2l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itomLoader3g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itomLoader3",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itom2",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom3h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom3",
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
              ".itom3l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itomLoader4g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itomLoader4",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itom3",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom4h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom4",
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
              ".itom4l",
              {
                opacity: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],

            [
              ".itomLoader5g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
            [
              ".itomLoader5",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.5,
              },
            ],
          ],
          [
            [
              ".itom4",
              {
                borderWidth: 0,
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom5h",
              {
                display: "block",
              },
              {
                ease: "easeInOut",
                duration: 1,
              },
            ],
            [
              ".itom5",
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
              ".itom5l",
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
            ".itom5",
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
              ".itom1h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom2h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom3h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom4h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom5h",
              { display: "none" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom1l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader1g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader1",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom1",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom2l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader2g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader2",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom2",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom3l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader3g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader3",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom3",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom4l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader4g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader4",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom4",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom5l",
              { opacity: 1, borderWidth: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader5g",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomLoader5",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itom5",
              { opacity: 0, top: "110%" },
              {
                ease: "easeInOut",
                duration: 0.01,
              },
            ],
            [
              ".itomDataFlowLines2",
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
              ".itomDataFlowLines3",
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
              ".itomDataFlowLines4",
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
              ".itomDataFlowLines5",
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
              ".itomDataFlowLines1",
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
              ".itomLoader1g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader1",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itomDataFlowLines1",
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
              ".itom1",
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
              ".itom1l",
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
              ".itomDataFlowLines1",
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
              ".itom1",
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
              ".itom1l",
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
              ".itom1h",
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
              ".itomSvgPathArrow1",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader2g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader2",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itomDataFlowLines2",
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
              ".itom2",
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
              ".itom2l",
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
              ".itomDataFlowLines2",
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
              ".itom2",
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
              ".itom2l",
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
              ".itom2h",
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
              ".itomSvgPathArrow2",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader3g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader3",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itomDataFlowLines3",
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
              ".itom3",
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
              ".itom3l",
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
              ".itomDataFlowLines3",
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
              ".itom3",
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
              ".itom3l",
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
              ".itom3h",
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
              ".itomSvgPathArrow3",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader4g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader4",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itomDataFlowLines4",
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
              ".itom4",
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
              ".itom4l",
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
              ".itomDataFlowLines4",
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
              ".itom4",
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
              ".itom4l",
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
              ".itom4h",
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
              ".itomSvgPathArrow4",
              { fill: "#2FCC71" },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader5g",
              { opacity: 0 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
            [
              ".itomLoader5",
              { opacity: 1 },
              {
                ease: "easeInOut",
                duration: 0.2,
              },
            ],
          ],
          [
            [
              ".itomDataFlowLines5",
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
              ".itom5",
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
              ".itom5l",
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
              ".itom5",
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
              ".itomDataFlowLines5",
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
              ".itom5l",
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
              ".itom5h",
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
      className="tab-pane fade  py-md-5"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
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
              Automated Server Storage Optimization
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
              <p className="f-16 f-c-s ff-j">Disk Space Alert</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Analyze Disk Usage Data</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Identify Optimial Cleanup Plan</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Execute Cleanup Script</p>
            </div>
            <div
              className={`${styles.bgGray} px-md-3 py-md-2 px-2 py-1 d-flex align-items-md-center align-items-start`}
            >
              <p className="f-16 f-c-s ff-j">Monitor Post-Cleanup Space</p>
            </div>
          </div>
          <div
            className={`${styles.customGridFive} ${styles.mobileFlexFill}`}
            style={{ minHeight: "200px" }}
          >
            <div
              className={`${styles.cardContainer} itomMinHeight1 position-relative`}
            >
              <div className={"itom1l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/alert.svg"}
                    className="img-fluid position-absolute itomLoader1g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itomLoader1 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">ALERT</p>
              </div>
              <div className="itomDataFlowLines1">
                <AnimatedLineDots />
              </div>
              <div className={"itom1"}>
                <div className="itom1h">
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
                        Alert
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} d-flex align-items-center justify-content-start `}
                >
                  <div className={` p-2`}>
                    <img
                      src={`/images/icon/bearIcon.svg`}
                      className="img-fluid"
                    />
                  </div>
                  <div className={` p-2`}>
                    <img
                      src={`/images/icon/bothArrow.svg`}
                      className="img-fluid"
                    />
                  </div>
                  <div className={` p-2`}>
                    <img
                      src={`/images/icon/dbIcon.svg`}
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
                  className="itomSvgPathArrow1"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itomMinHeight2 position-relative`}
            >
              <div className={"itom2l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/heartBet.svg"}
                    className="img-fluid position-absolute itomLoader2g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itomLoader2 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">ANALYSIS</p>
              </div>
              <div className="itomDataFlowLines2">
                <AnimatedLineDots />
              </div>
              <div className={"itom2"}>
                <div className="itom2h">
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
                        Analysis
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} d-flex justify-content-start align-items-center`}
                >
                  <div className="d-flex flex-column justify-content-start ">
                    <img
                      src={"/images/icon/dontChart.svg"}
                      className="img-fluid"
                      width={24}
                      height={24}
                    />
                    <p className="f-14 ff-j f-c-p pt-2 ">Disk usage</p>
                  </div>
                  <div className={`${styles.chartContainer} ps-2`}>
                    <img
                      src={"/images/icon/redChart.svg"}
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
                  className="itomSvgPathArrow2"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itomMinHeight3 position-relative`}
            >
              <div className={"itom3l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/plan.svg"}
                    className="img-fluid position-absolute itomLoader3g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itomLoader3 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">PLAN</p>
              </div>
              <div className="itomDataFlowLines3">
                <AnimatedLineDots />
              </div>
              <div className={"itom3"}>
                <div className="itom3h">
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
                        Planning
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} d-flex align-items-start justify-content-center flex-column`}
                >
                  <div
                    className={`${styles.userCard} d-flex align-items-start justify-content-end flex-column`}
                  >
                    <div className="d-flex align-items-center justify-content-start my-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 9.29385C0 9.61293 0.261633 9.87457 0.580719 9.87457H3.63181L2.49382 11.0126C2.26697 11.2394 2.26697 11.6069 2.49382 11.833C2.72067 12.0598 3.09571 12.0515 3.31424 11.833L4.45223 10.695C4.82577 10.3214 5.03295 9.82164 5.03295 9.29385C5.03295 8.7653 4.82577 8.26625 4.45223 7.89271L3.31424 6.75471C3.09571 6.53619 2.71234 6.53619 2.49382 6.75471C2.27529 6.97324 2.26697 7.34904 2.49382 7.57513L3.63181 8.71313H0.580719C0.261633 8.71313 0 8.97476 0 9.29385Z"
                          fill="#2FCC71"
                        />
                        <path
                          d="M11.6138 9.29374C11.6138 8.97465 11.3522 8.71302 11.0331 8.71302H7.98197L9.11997 7.57503C9.34681 7.34818 9.34681 6.9807 9.11997 6.75461C9.00957 6.64421 8.86439 6.58447 8.70938 6.58447C8.55437 6.58447 8.40919 6.64421 8.29879 6.75461L7.1608 7.8926C6.78726 8.26614 6.58008 8.76594 6.58008 9.29374C6.58008 9.82229 6.78726 10.3213 7.1608 10.6949L8.29879 11.8329C8.51732 12.0514 8.90069 12.0514 9.11921 11.8329C9.33774 11.6143 9.34606 11.2385 9.11921 11.0125L7.98122 9.87446H11.0323C11.3514 9.87446 11.613 9.61282 11.613 9.29374H11.6138Z"
                          fill="#2FCC71"
                        />
                        <path
                          d="M9.92237 1.42685L9.80063 1.30511C9.30158 0.803792 8.93939 0.443863 8.4048 0.220789C7.87021 4.61514e-08 7.35981 0 6.65281 0H4.83882C3.1821 0 2.08795 0 1.23662 0.849901C0.386719 1.6998 0.386719 2.7955 0.386719 4.4521V5.03282C0.386719 5.3519 0.648352 5.61353 0.967437 5.61353C1.28652 5.61353 1.54816 5.3519 1.54816 5.03282V4.4521C1.54816 2.83774 1.56782 2.16252 2.0593 1.67259C2.54928 1.18108 3.22452 1.16144 4.83882 1.16144H6.65281C7.33788 1.16144 7.65395 1.16749 7.96169 1.29528C8.26943 1.42306 8.49628 1.6416 8.98021 2.12779L9.10195 2.24953C9.58588 2.73347 9.80441 2.96031 9.9322 3.26805C10.06 3.5758 10.066 3.89113 10.066 4.57694V5.03592C10.066 5.355 10.3277 5.61664 10.6468 5.61664C10.9658 5.61664 11.2275 5.355 11.2275 5.03592V4.57694C11.2275 3.86842 11.2275 3.35727 11.0067 2.82495C10.7859 2.29036 10.4237 1.93043 9.92466 1.42911L9.92237 1.42685Z"
                          fill="#2FCC71"
                        />
                      </svg>

                      <div className="ps-2">
                        <p className="f-12 ff-j f-c-p">Compressing old logs</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start my-1">
                      <svg
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3347 1.90489H7.97989L7.75489 1.43965C7.48477 0.884767 7.32013 0.554887 7.00489 0.314646C6.92989 0.25488 6.85489 0.209763 6.77989 0.17988C6.43477 8.94071e-08 6.08965 0 5.44513 0C4.80001 0 4.44025 5.36442e-08 4.07989 0.19512C4.00489 0.240237 3.92989 0.285354 3.85489 0.345121C3.525 0.600001 3.38964 0.915241 3.12012 1.51524L2.94024 1.92012H0.540241C0.24024 1.92012 0 2.16036 0 2.46036C0 2.76036 0.24024 3.0006 0.540241 3.0006H0.840241L1.14024 7.95061C1.23048 9.45061 1.27501 10.2006 1.71036 10.8305C1.92012 11.1457 2.20548 11.4006 2.53536 11.5957C3.16466 12 3.9299 12 5.42992 12C6.92993 12 7.67992 12 8.33962 11.5951C8.6695 11.4 8.93962 11.1451 9.16462 10.8299C9.58474 10.2 9.62986 9.45 9.72009 7.95003L10.0201 3.00002H10.3201C10.6201 3.00002 10.8603 2.75978 10.8603 2.45978C10.8896 2.15978 10.6347 1.90489 10.3347 1.90489ZM4.51459 1.20001C4.54447 1.18477 4.5597 1.17012 4.58959 1.15489C4.7097 1.09512 4.97983 1.09512 5.44447 1.09512C5.89447 1.09512 6.16459 1.09512 6.28471 1.15489C6.31459 1.17012 6.32983 1.18477 6.35971 1.20001C6.46459 1.27501 6.58471 1.51525 6.76459 1.90489H4.12489C4.30477 1.51523 4.40969 1.29023 4.51459 1.20001ZM8.63959 7.89032C8.56459 9.18056 8.51947 9.84032 8.24935 10.2153C8.11458 10.3952 7.94935 10.5604 7.75423 10.6806C7.36399 10.9208 6.71947 10.9208 5.41393 10.9208C4.10905 10.9208 3.46392 10.9208 3.07362 10.6806C2.8785 10.5604 2.71386 10.4104 2.5785 10.2153C2.32362 9.84032 2.2785 9.1952 2.2035 7.89032L1.9035 3.00001H8.90836L8.63959 7.89032Z"
                          fill="#2FCC71"
                        />
                        <path
                          d="M4.06368 8.99995C4.36368 8.99995 4.60392 8.75971 4.60392 8.45971V5.17501C4.60392 4.87501 4.36368 4.63477 4.06368 4.63477C3.76368 4.63477 3.52344 4.87501 3.52344 5.17501V8.44516C3.52402 8.75982 3.76368 8.99995 4.06368 8.99995Z"
                          fill="#2FCC71"
                        />
                        <path
                          d="M6.79473 8.99995C7.09473 8.99995 7.33497 8.75971 7.33497 8.45971L7.33439 5.17501C7.33439 4.87501 7.09415 4.63477 6.79415 4.63477C6.49415 4.63477 6.25391 4.87501 6.25391 5.17501V8.44516C6.25449 8.75982 6.49473 8.99995 6.79473 8.99995Z"
                          fill="#2FCC71"
                        />
                      </svg>

                      <div className="ps-2">
                        <p className="f-12 ff-j f-c-p">
                          Deleting temporary files
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start my-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.37469 7.37584C4.60924 7.14128 4.98891 7.14128 5.22347 7.37584L5.39897 7.55134V6.00008C5.39897 5.66877 5.66784 5.3999 5.99914 5.3999C6.33045 5.3999 6.59931 5.66877 6.59931 6.00008V7.55134L6.77482 7.37584C7.00937 7.14128 7.38904 7.14128 7.6236 7.37584C7.85759 7.60983 7.85759 7.99006 7.6236 8.22406L6.42327 9.42439C6.36477 9.48288 6.29671 9.52732 6.22359 9.55657C6.15609 9.58357 6.08184 9.59932 6.00479 9.59988H5.99916H5.99747C5.91479 9.59988 5.83604 9.58244 5.7646 9.55207C5.70329 9.5262 5.64536 9.48963 5.59361 9.44239C5.58686 9.43564 5.57955 9.42889 5.5728 9.42214L4.37471 8.22405C4.14072 7.99006 4.14069 7.60983 4.37469 7.37584Z"
                          fill="#2FCC71"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.7398 0C2.3185 0 1.92758 0.221623 1.71103 0.582735L0.170995 3.14873C0.0590612 3.33548 0 3.54865 0 3.76634V10.2001C0 11.194 0.806043 12 1.79994 12H10.2001C11.194 12 12 11.194 12 10.2001V3.76634C12 3.73372 11.9983 3.7011 11.9961 3.66903C11.9983 3.64653 12 3.62347 12 3.59985C12 3.4626 11.9533 3.33549 11.8757 3.23423C11.8611 3.20498 11.8453 3.17686 11.829 3.14873L10.289 0.582735C10.0724 0.221623 9.68149 0 9.2602 0H2.7398ZM10.34 3.00029L9.26006 1.20035H2.7398L1.65983 3.00029H10.34ZM1.2002 4.20006V10.2001C1.2002 10.5314 1.46851 10.7997 1.79981 10.7997H10.1999C10.5312 10.7997 10.7995 10.5314 10.7995 10.2001V4.20006H1.2002Z"
                          fill="#2FCC71"
                        />
                      </svg>

                      <div className="ps-2">
                        <p className="f-12 ff-j f-c-p">Archiving unused data</p>
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
                  className="itomSvgPathArrow3"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itomMinHeight4 position-relative`}
            >
              <div className={"itom4l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/execute.svg"}
                    className="img-fluid position-absolute itomLoader4g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itomLoader4 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">EXECUTE</p>
              </div>
              <div className="itomDataFlowLines4">
                <AnimatedLineDots />
              </div>
              <div className={"itom4"}>
                <div className="itom4h">
                  <div
                    className={`${styles.cardHeader} d-flex align-items-center `}
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
                    className={`${styles.userCard} d-flex align-items-start justify-content-end flex-column`}
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
                      <div className="ps-1 pe-1">
                        <p className="f-12 ff-j f-c-p">Compressing old logs</p>
                      </div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 9.29385C0 9.61293 0.261633 9.87457 0.580719 9.87457H3.63181L2.49382 11.0126C2.26697 11.2394 2.26697 11.6069 2.49382 11.833C2.72067 12.0598 3.09571 12.0515 3.31424 11.833L4.45223 10.695C4.82577 10.3214 5.03295 9.82164 5.03295 9.29385C5.03295 8.7653 4.82577 8.26625 4.45223 7.89271L3.31424 6.75471C3.09571 6.53619 2.71234 6.53619 2.49382 6.75471C2.27529 6.97324 2.26697 7.34904 2.49382 7.57513L3.63181 8.71313H0.580719C0.261633 8.71313 0 8.97476 0 9.29385Z"
                          fill="#A2A2A2"
                        />
                        <path
                          d="M11.6138 9.29374C11.6138 8.97465 11.3522 8.71302 11.0331 8.71302H7.98197L9.11997 7.57503C9.34681 7.34818 9.34681 6.9807 9.11997 6.75461C9.00957 6.64421 8.86439 6.58447 8.70938 6.58447C8.55437 6.58447 8.40919 6.64421 8.29879 6.75461L7.1608 7.8926C6.78726 8.26614 6.58008 8.76594 6.58008 9.29374C6.58008 9.82229 6.78726 10.3213 7.1608 10.6949L8.29879 11.8329C8.51732 12.0514 8.90069 12.0514 9.11921 11.8329C9.33774 11.6143 9.34606 11.2385 9.11921 11.0125L7.98122 9.87446H11.0323C11.3514 9.87446 11.613 9.61282 11.613 9.29374H11.6138Z"
                          fill="#A2A2A2"
                        />
                        <path
                          d="M9.92237 1.42685L9.80063 1.30511C9.30158 0.803792 8.93939 0.443863 8.4048 0.220789C7.87021 4.61514e-08 7.35981 0 6.65281 0H4.83882C3.1821 0 2.08795 0 1.23662 0.849901C0.386719 1.6998 0.386719 2.7955 0.386719 4.4521V5.03282C0.386719 5.3519 0.648352 5.61353 0.967437 5.61353C1.28652 5.61353 1.54816 5.3519 1.54816 5.03282V4.4521C1.54816 2.83774 1.56782 2.16252 2.0593 1.67259C2.54928 1.18108 3.22452 1.16144 4.83882 1.16144H6.65281C7.33788 1.16144 7.65395 1.16749 7.96169 1.29528C8.26943 1.42306 8.49628 1.6416 8.98021 2.12779L9.10195 2.24953C9.58588 2.73347 9.80441 2.96031 9.9322 3.26805C10.06 3.5758 10.066 3.89113 10.066 4.57694V5.03592C10.066 5.355 10.3277 5.61664 10.6468 5.61664C10.9658 5.61664 11.2275 5.355 11.2275 5.03592V4.57694C11.2275 3.86842 11.2275 3.35727 11.0067 2.82495C10.7859 2.29036 10.4237 1.93043 9.92466 1.42911L9.92237 1.42685Z"
                          fill="#A2A2A2"
                        />
                      </svg>
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
                      <div className="ps-1 pe-1">
                        <p className="f-12 ff-j f-c-p">Deleting temp files</p>
                      </div>
                      <svg
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3347 1.90489H7.97989L7.75489 1.43965C7.48477 0.884767 7.32013 0.554887 7.00489 0.314646C6.92989 0.25488 6.85489 0.209763 6.77989 0.17988C6.43477 8.94071e-08 6.08965 0 5.44513 0C4.80001 0 4.44025 5.36442e-08 4.07989 0.19512C4.00489 0.240237 3.92989 0.285354 3.85489 0.345121C3.525 0.600001 3.38964 0.915241 3.12012 1.51524L2.94024 1.92012H0.540241C0.24024 1.92012 0 2.16036 0 2.46036C0 2.76036 0.24024 3.0006 0.540241 3.0006H0.840241L1.14024 7.95061C1.23048 9.45061 1.27501 10.2006 1.71036 10.8305C1.92012 11.1457 2.20548 11.4006 2.53536 11.5957C3.16466 12 3.9299 12 5.42992 12C6.92993 12 7.67992 12 8.33962 11.5951C8.6695 11.4 8.93962 11.1451 9.16462 10.8299C9.58474 10.2 9.62986 9.45 9.72009 7.95003L10.0201 3.00002H10.3201C10.6201 3.00002 10.8603 2.75978 10.8603 2.45978C10.8896 2.15978 10.6347 1.90489 10.3347 1.90489ZM4.51459 1.20001C4.54447 1.18477 4.5597 1.17012 4.58959 1.15489C4.7097 1.09512 4.97983 1.09512 5.44447 1.09512C5.89447 1.09512 6.16459 1.09512 6.28471 1.15489C6.31459 1.17012 6.32983 1.18477 6.35971 1.20001C6.46459 1.27501 6.58471 1.51525 6.76459 1.90489H4.12489C4.30477 1.51523 4.40969 1.29023 4.51459 1.20001ZM8.63959 7.89032C8.56459 9.18056 8.51947 9.84032 8.24935 10.2153C8.11458 10.3952 7.94935 10.5604 7.75423 10.6806C7.36399 10.9208 6.71947 10.9208 5.41393 10.9208C4.10905 10.9208 3.46392 10.9208 3.07362 10.6806C2.8785 10.5604 2.71386 10.4104 2.5785 10.2153C2.32362 9.84032 2.2785 9.1952 2.2035 7.89032L1.9035 3.00001H8.90836L8.63959 7.89032Z"
                          fill="#A2A2A2"
                        />
                        <path
                          d="M4.06368 8.99995C4.36368 8.99995 4.60392 8.75971 4.60392 8.45971V5.17501C4.60392 4.87501 4.36368 4.63477 4.06368 4.63477C3.76368 4.63477 3.52344 4.87501 3.52344 5.17501V8.44516C3.52402 8.75982 3.76368 8.99995 4.06368 8.99995Z"
                          fill="#A2A2A2"
                        />
                        <path
                          d="M6.79473 8.99995C7.09473 8.99995 7.33497 8.75971 7.33497 8.45971L7.33439 5.17501C7.33439 4.87501 7.09415 4.63477 6.79415 4.63477C6.49415 4.63477 6.25391 4.87501 6.25391 5.17501V8.44516C6.25449 8.75982 6.49473 8.99995 6.79473 8.99995Z"
                          fill="#A2A2A2"
                        />
                      </svg>
                    </div>
                    <div className="d-flex align-items-center justify-content-start my-xl-2 my-1">
                      <div className={`position-relative`}>
                        <img
                          src={"/images/icon/bgCheck.svg"}
                          className="img-fluid"
                        />
                      </div>
                      <div className="ps-1 pe-1">
                        <p className="f-12 ff-j f-c-p">Archiving unused data</p>
                      </div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.37469 7.37584C4.60924 7.14128 4.98891 7.14128 5.22347 7.37584L5.39897 7.55134V6.00008C5.39897 5.66877 5.66784 5.3999 5.99914 5.3999C6.33045 5.3999 6.59931 5.66877 6.59931 6.00008V7.55134L6.77482 7.37584C7.00937 7.14128 7.38904 7.14128 7.6236 7.37584C7.85759 7.60983 7.85759 7.99006 7.6236 8.22406L6.42327 9.42439C6.36477 9.48288 6.29671 9.52732 6.22359 9.55657C6.15609 9.58357 6.08184 9.59932 6.00479 9.59988H5.99916H5.99747C5.91479 9.59988 5.83604 9.58244 5.7646 9.55207C5.70329 9.5262 5.64536 9.48963 5.59361 9.44239C5.58686 9.43564 5.57955 9.42889 5.5728 9.42214L4.37471 8.22405C4.14072 7.99006 4.14069 7.60983 4.37469 7.37584Z"
                          fill="#A2A2A2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.7398 0C2.3185 0 1.92758 0.221623 1.71103 0.582735L0.170995 3.14873C0.0590612 3.33548 0 3.54865 0 3.76634V10.2001C0 11.194 0.806043 12 1.79994 12H10.2001C11.194 12 12 11.194 12 10.2001V3.76634C12 3.73372 11.9983 3.7011 11.9961 3.66903C11.9983 3.64653 12 3.62347 12 3.59985C12 3.4626 11.9533 3.33549 11.8757 3.23423C11.8611 3.20498 11.8453 3.17686 11.829 3.14873L10.289 0.582735C10.0724 0.221623 9.68149 0 9.2602 0H2.7398ZM10.34 3.00029L9.26006 1.20035H2.7398L1.65983 3.00029H10.34ZM1.2002 4.20006V10.2001C1.2002 10.5314 1.46851 10.7997 1.79981 10.7997H10.1999C10.5312 10.7997 10.7995 10.5314 10.7995 10.2001V4.20006H1.2002Z"
                          fill="#A2A2A2"
                        />
                      </svg>
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
                  className="itomSvgPathArrow4"
                  d="M0.333333 4C0.333333 5.47276 1.52724 6.66667 3 6.66667C4.47276 6.66667 5.66667 5.47276 5.66667 4C5.66667 2.52724 4.47276 1.33333 3 1.33333C1.52724 1.33333 0.333333 2.52724 0.333333 4ZM23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64644L20.1716 0.464465C19.9763 0.269202 19.6597 0.269202 19.4645 0.464465C19.2692 0.659727 19.2692 0.976309 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.73079 19.9763 7.73079 20.1716 7.53553L23.3536 4.35355ZM3 4.5L23 4.5L23 3.5L3 3.5L3 4.5Z"
                  fill="#ACACAC"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardContainer} itomMinHeight5 position-relative`}
            >
              <div className={"itom5l"}>
                <div className=" position-relative">
                  <img
                    src={"./images/svg/monitor.svg"}
                    className="img-fluid position-absolute itomLoader5g"
                  />
                  <img
                    src={"./images/svg/loader1.svg"}
                    className="img-fluid itomLoader5 rotateAnimation "
                  />
                </div>
                <p className="f-12 ff-j f-c-s text-uppercase pt-2 ">MONITOR</p>
              </div>
              <div className="itomDataFlowLines5">
                <AnimatedLineDots />
              </div>
              <div className={"itom5"}>
                <div className="itom5h">
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
                        Monitor
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.cardBody} d-flex justify-content-start align-items-center`}
                >
                  <div className="d-flex flex-column justify-content-start ">
                    <img
                      src={"/images/icon/mag.svg"}
                      className="img-fluid"
                      width={24}
                      height={24}
                    />
                    <p className="f-14 ff-j f-c-p pt-2 ">Disk usage</p>
                  </div>
                  <img
                    src={"/images/icon/successChart.svg"}
                    className="img-fluid ps-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSetting;
