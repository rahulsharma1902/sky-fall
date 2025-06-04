import { motion } from "framer-motion";

const AnimatedPathSVG = () => {
  return (
    <svg
      width="274"
      height="311"
      viewBox="0 0 274 311"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Path Animation */}
      <motion.path
        d="M270 0V139.855C270 146.482 264.627 151.855 258 151.855H16C9.37258 151.855 4 157.227 4 163.855V310.5"
        stroke="#363636"
        strokeWidth="8"
        initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated Circles for Column 1 */}
      <g clipPath="url(#clip0)">
        {[7.5, 29.5, 51.5, 73.5, 95.5, 117.5, 139.5].map((y, index) => (
          <motion.circle
            key={index}
            cx="3"
            cy="3"
            r="3"
            transform={`matrix(-1 0 0 1 272.5 ${y})`}
            fill="#20A558"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </g>

      {/* Animated Circles for Column 2 */}
      <g clipPath="url(#clip1)">
        {[164.5, 186.5, 208.5, 230.5, 252.5, 274.5, 296.5].map((y, index) => (
          <motion.circle
            key={index}
            cx="3"
            cy="3"
            r="3"
            transform={`matrix(-1 0 0 1 7 ${y})`}
            fill="#20A558"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </g>

      {/* Animated Circles for Horizontal Line */}
      <g clipPath="url(#clip2)">
        {[
          18.5, 40.5, 62.5, 84.5, 106.5, 128.5, 150.5, 172.5, 194.5, 216.5,
          238.5, 260.5,
        ].map((x, index) => (
          <motion.circle
            key={index}
            cx="3"
            cy="3"
            r="3"
            transform={`matrix(-1 0 0 1 ${x} 148.5)`}
            fill="#20A558"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </g>

      <defs>
        <clipPath id="clip0">
          <rect
            width="6"
            height="138"
            fill="white"
            transform="translate(266.5 7.5)"
          />
        </clipPath>
        <clipPath id="clip1">
          <rect
            width="6"
            height="138"
            fill="white"
            transform="translate(1 164.5)"
          />
        </clipPath>
        <clipPath id="clip2">
          <rect
            width="251"
            height="6"
            fill="white"
            transform="translate(11 148.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AnimatedPathSVG;
