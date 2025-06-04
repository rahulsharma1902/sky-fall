import { useAnimate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
const useMotionTimeline = (keyframes, count = 1) => {
  const mounted = useRef(true);

  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  useEffect(() => {
    mounted.current = true;
    if (isInView) {
      handleAnimate();
    }
    return () => {
      mounted.current = false;
    };
  }, [isInView]);

  const processAnimation = async (animation) => {
    // If list of animations, run all concurrently
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async (a) => {
          await processAnimation(a);
        })
      );
    } else {
      // Else run the single animation
      console.log("asdfsfsdf", animation);
      await animate(...animation);
    }
  };

  const handleAnimate = async () => {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;
        await processAnimation(animation);
      }
    }
  };

  return { scope, ref };
};

export default useMotionTimeline;
