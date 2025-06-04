"use client";
import React from "react";

const SVGAnimation = () => {
  const paths = [
    "M921 229.5H883C874.163 229.5 867 222.337 867 213.5V97.5C867 88.6634 859.837 81.5 851 81.5H838.5",
    "M909 229.5H863C858.582 229.5 855 225.918 855 221.5V189.5C855 185.082 851.418 181.5 847 181.5H838.5",
    "M909 229.5H863C858.582 229.5 855 233.082 855 237.5V269.5C855 273.918 851.418 277.5 847 277.5H838.5",
    "M921 229.5H883C874.163 229.5 867 236.663 867 245.5V363.5C867 372.337 859.837 379.5 851 379.5H838.5",
  ];

  const circlesPerPath = 5; // Number of circles per path
  const animationDuration = 7; // Duration of one cycle of motion (in seconds)

  return (
    <svg
      width="960"
      height="400"
      viewBox="0 0 960 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define the paths */}
      {paths.map((d, pathIndex) => (
        <path
          key={`path-${pathIndex}`}
          id={`path${pathIndex + 1}`}
          d={d}
          stroke="#5AC487"
          strokeWidth="1.5"
          fill="none"
        />
      ))}

      {/* Circles moving in opposite direction along paths */}
      {paths.map((_, pathIndex) =>
        Array.from({ length: circlesPerPath }).map((_, circleIndex) => {
          const delay = (circleIndex * animationDuration) / circlesPerPath; // Staggered start for each circle
          return (
            <circle
              key={`${pathIndex}-${circleIndex}`}
              cx="0"
              cy="0"
              r="4"
              fill="#D9D9D9"
            >
              <animateMotion
                begin={`${delay}s`}
                dur={`${animationDuration}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#path${pathIndex + 1}`} />
              </animateMotion>
              {/* Reverse direction using scale */}
            </circle>
          );
        })
      )}
    </svg>
  );
};

export default SVGAnimation;
