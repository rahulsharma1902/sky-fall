import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const AnimatedRightLines = () => {
  return (
    <div className="w-100">
      <div className="d-flex align-items-center justify-content-end">
        <svg
          style={{
            overflow: "visible",
            padding: "0px",
            width: "45vw",
          }}
          className={`heroHeight`}
          viewBox="0 0 578 521"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="tPath1"
            d="M578 1H306.038C296.097 1 288.038 9.05887 288.038 19V141C288.038 150.941 279.979 159 270.038 159H1.72257e-05"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath2"
            d="M578 520H259.875C249.934 520 241.875 511.941 241.875 502V381C241.875 371.059 233.816 363 223.875 363H0"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath3"
            d="M578 24L199.535 23.0574C186.81 23.0257 176.478 33.3324 176.478 46.0574V158.13C176.478 170.782 166.259 181.058 153.608 181.13L0 182"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath4"
            d="M578 24L199.535 23.0574C186.81 23.0257 176.478 33.3324 176.478 46.0574V158.13C176.478 170.782 166.259 181.058 153.608 181.13L0 182"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath5"
            d="M578 47L346.796 46.0979C332.951 46.0439 321.699 57.2525 321.699 71.0977V179.078C321.699 192.854 310.553 204.035 296.777 204.077L1.72257e-05 205"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath6"
            d="M578 475L489.254 475.779C475.362 475.901 464.035 464.673 464.035 450.78V342.946C464.035 329.16 452.875 317.976 439.089 317.946L0 317"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath7"
            d="M578 70L407.714 69.1588C389.979 69.0712 375.556 83.4236 375.556 101.158V194.085C375.556 211.725 361.281 226.038 343.641 226.085L1.72257e-05 227"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath8"
            d="M578 362L369.219 362.867C351.495 362.94 337.087 348.592 337.087 330.867V326.905C337.087 309.269 322.817 294.958 305.181 294.905L0 294"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath9"
            d="M578 92L265.639 91.1138C243.504 91.051 225.526 108.978 225.526 131.114V209.177C225.526 231.199 207.725 249.079 185.703 249.177L1.72257e-05 250"
            stroke="white"
            stroke-opacity="0"
          />
          <path
            id="tPath10"
            d="M578 429L327.214 429.862C305.069 429.938 287.077 412.007 287.077 389.862V312.861C287.077 290.824 269.253 272.938 247.216 272.861L0 272"
            stroke="white"
            stroke-opacity="0"
          />
          <motion.text className="f-12 ff-j f-c-p" style={{ fill: "white" }}>
            {[...Array(10)].map((_, i) => {
              return (
                <motion.textPath
                  key={i}
                  href={`#tPath${++i}`}
                  initial={{ startOffset: "100%", opacity: 1 }}
                  animate={{
                    startOffset: "0%",
                  }}
                  transition={{
                    delay: 6,
                    duration: 10,
                    // repeat: Infinity,
                    // // repeatDelay: Math.random() * (5 - 2) + 5,
                    // repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  :======sdsa dasdsadsds============{" "}
                  <ScrambleText text="=+===========:" />
                  ======+++++@#$%+++++==================
                  <ScrambleText text="=+===========:" />
                  ==================:
                </motion.textPath>
              );
            })}
          </motion.text>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedRightLines;
